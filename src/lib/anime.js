const puppeteer = require('puppeteer');

const streamLink = async (url, episode) => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto(url);

  // console.log('waiting for widgets');
  await page.waitFor(() => !!document.querySelector(`span[data-name='36']`));

  await page.waitFor(() => !!document.querySelector('.widget.servers'));
  await page.click(`a[data-base='${episode}']`);

  // console.log('waiting for video');
  await page.waitFor(() => {
    if (!!document.querySelector(`iframe`)) {
      const doc = document.querySelector(`iframe`).contentDocument;
      if (doc.readyState  === 'complete') {
        return true;
      }
    }
    return false;
  });
  // console.log('waiting for frame');
  await page.waitFor(4000);

  const frame = await page.frames().find(f=>f.url().includes('rapidvideo'));
  await frame.waitFor('#confirm');
  await frame.click('#confirm', {delay: 1000});
  await frame.waitFor('source');
  const animeLink = await frame.evaluate(() => document.querySelector('source').src);

  await browser.close();
  return animeLink || 'error';
}

streamLink('https://9anime.ru/watch/the-rising-of-the-shield-hero.6kl0', 10)
.then(console.log)

module.exports = streamLink;