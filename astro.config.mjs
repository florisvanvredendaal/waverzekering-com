import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { siteConfig } from './src/config';

export default defineConfig({
  site: siteConfig.url,
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});