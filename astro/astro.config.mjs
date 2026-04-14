import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      host: true,
      allowedHosts: true,
    },
  },
  integrations: [
    starlight({
      title: 'Lean Crowd Manifest',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        da: {
          label: 'Dansk',
          lang: 'da',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lakruzz/lean-crowd-manifest',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          translations: { da: 'Vejledninger' },
          items: [
            { label: 'Example Guide', translations: { da: 'Eksempelvejledning' }, slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          translations: { da: 'Reference' },
          items: [
            { label: 'Example Reference', translations: { da: 'Eksempelreference' }, slug: 'reference/example' },
          ],
        },
      ],
    }),
  ],
});
