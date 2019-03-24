const puppeteer = require('puppeteer');

const streamLink = async (url, episode) => {
  const browser = await puppeteer.launch();
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
  await page.waitFor(5000);

  const frame = await page.frames().find(f=>f.url().includes('rapidvideo'));
  await frame.waitFor('source');
  const animeLink = await frame.evaluate(() => document.querySelector('source').src);

  await browser.close();
  return animeLink || 'error';
}

module.exports = streamLink;