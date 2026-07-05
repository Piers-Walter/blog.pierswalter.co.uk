// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import remarkMermaid from 'remark-mermaidjs'

import expressiveCode from 'astro-expressive-code';

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.pierswalter.co.uk',
    integrations: [expressiveCode(), mdx({rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],}), sitemap(), tailwind(), react()],
    redirects: {
        '/blog': '/'
    },
    markdown: {
        remarkPlugins: [remarkMermaid],
        rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
    }
});