// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://dapoerpapoea.pages.dev",
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: cloudflare()
});