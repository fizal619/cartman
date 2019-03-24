const puppeteer = require('puppeteer');

/**
 * Returns an array of results from 9anime.
 * [{name, img, url}]
 *
 * @param {String} term
 * @returns {Promise<Array[Object]>}
 */
const search = async (term) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.goto(`https://9anime.ru/search?keyword=${term}`);

  await page.waitFor(() => !!document.querySelector(`.widget-body`));

  const results = await page.evaluate(()=>{
    const items = document.querySelectorAll('a.poster');
    const results = [];
    items.forEach(item => {
      results.push({
        name: item.children[0].alt,
        img: item.children[0].src,
        url: item.href
      });
    });
    return results;
  });
  await browser.close();
  return results;

}


module.exports = search;