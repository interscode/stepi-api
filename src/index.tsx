import { Hono } from 'hono'
import { renderer } from './renderer'
import { scrapeData } from '../scraping/scraper'

const app = new Hono();

app.get('/scrape', async (c) => {
  const url = c.req.query('url');
    if (!url) {
      return c.json({ error: 'URL is required' }, 400);
    }

    const data = await scrapeData(url);
    return c.json({ data });
});

export default app
