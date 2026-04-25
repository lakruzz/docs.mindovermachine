import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          protocols: ["https"],
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  vite: {
    server: {
      host: true,
      allowedHosts: true,
    },
  },
  integrations: [
    starlight({
      title: "Mind over Machine Manifest",
      customCss: ["./src/styles/custom.scss"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        da: {
          label: "Dansk",
          lang: "da",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mindovermachine-dev",
        },
      ],
      sidebar: [
        {
          label: "Vision & Mission",
          translations: { da: "Vision & Mission" },
          items: [
            {
              label: "The Manifesto",
              translations: { da: "Manifestet" },
              slug: "vision/manifesto",
            },
            {
              label: "The C.R.O.W.D. Values",
              translations: { da: "C.R.O.W.D. Værdierne" },
              slug: "vision/crowd-values",
            },
          ],
        },
        {
          label: "About Us",
          translations: { da: "Om Os" },
          items: [
            {
              label: "Founder's Story",
              translations: { da: "Founder's Story" },
              slug: "about/founder-story",
            },
          ],
        },
        {
          label: "Organization",
          translations: { da: "Organisation" },
          items: [
            {
              label: "The Three Pillars",
              translations: { da: "De tre Søjler" },
              slug: "governance/three-pillars",
            }, 
            {
              label: "Regenerative Charter",
              translations: { da: "MioMa Charter" },
              slug: "governance/charter",
            },
          ],
        },
        {
          label: "Methodology",
          translations: { da: "Metoder" },
          items: [
            {
              label: "How We Work",
              translations: { da: "Sådan arbejder vi" },
              slug: "methodology/how-we-work",
            },
//            {
//              label: "The Toyota Way",
//              translations: { da: "Toyota-vejen" },
//              slug: "methodology/toyota-way",
//            },
//            {
//              label: "Participatory Design",
//              translations: { da: "Deltagende Design" },
//              slug: "methodology/participatory-design",
//            },
//            {
//              label: "Developer Experience (DevX)",
//              translations: { da: "Udvikler Erfaring (DevX)" },
//              slug: "methodology/devx",
//            },
          ],
        },
      ],
    }),
  ],
  redirects: {
    "/methodology": "/methodology/how-we-work",
    "/da/methodology": "/da/methodology/how-we-work"
  },
});
