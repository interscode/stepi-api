import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeData(url: string) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const links: string[] = [];
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      if (href) {
        links.push(href);
      }
    });

    return links;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}