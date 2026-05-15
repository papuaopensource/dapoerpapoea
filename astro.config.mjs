// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://dapoerpapoea.pages.dev",
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare()
});