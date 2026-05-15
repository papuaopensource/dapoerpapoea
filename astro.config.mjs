// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import recipes from './src/data/recipes.json';

const site = 'https://dapoerpapoea.pages.dev';
const categories = [...new Set(recipes.map((r) => r.category))];

const customPages = [
  `${site}/`,
  `${site}/tentang/`,
  `${site}/kata-pengantar/`,
  `${site}/makanan-sehat-bagi-keluarga/`,
  `${site}/daftar-isi/`,
  ...categories.map((c) => `${site}/daftar-isi/${c}/`),
  ...recipes.map((r) => `${site}/${r.category}/${r.slug}/`),
];

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind(), sitemap({ customPages })],
  output: 'server',
  adapter: cloudflare()
});
