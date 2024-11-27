// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import remarkMermaid from 'remark-mermaidjs'

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.pierswalter.co.uk',
    integrations: [expressiveCode(), mdx(), sitemap(), tailwind(), react()],
    redirects: {
        '/blog': '/'
    },
    markdown: {
        remarkPlugins: [remarkMermaid],

    }
});