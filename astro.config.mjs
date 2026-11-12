import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` if the portfolio moves to a custom domain.
export default defineConfig({
  site: 'https://adityajhaportfolioo.netlify.app',
  integrations: [sitemap()],
});
