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
          href: "https://github.com/lakruzz/lean-crowd-manifest",
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
//            {
//              label: "Regenerative Thinking",
//              translations: { da: "Regenerativ Tænkning" },
//              slug: "vision/regenerative-thinking",
//            },
          ],
        },
        {
          label: "About Us",
          translations: { da: "Om Os" },
          items: [
            {
              label: "Design Science Laboratory",
              translations: { da: "Design Science Laboratorium" },
              slug: "about/design-science-lab",
            },
            {
              label: "The Triad Model",
              translations: { da: "Triad-modellen" },
              slug: "about/triad-model",
            },
            //            {
            //              label: "Story: From Praqma to C.R.O.W.D.",
            //              translations: { da: "Historie: Fra Praqma til C.R.O.W.D." },
            //              slug: "about/story",
            //            },
          ],
        },
        {
          label: "Governance",
          translations: { da: "Styring" },
          items: [
            {
              label: "General Assembly",
              translations: { da: "Generalforsamling" },
              slug: "governance/general-assembly",
            },
            {
              label: "The Board",
              translations: { da: "Bestyrelsen" },
              slug: "governance/board",
            },
            {
              label: "Regenerative Charter",
              translations: { da: "Regenerativ Charter" },
              slug: "governance/charter",
            },
          ],
        },
        //        {
        //          label: "Careers & Capability",
        //          translations: { da: "Karrierer & Evner" },
        //          items: [
        //            {
        //              label: "Capability Matrix",
        //              translations: { da: "Evne-matrix" },
        //              slug: "careers/capability-matrix",
        //            },
        //            {
        //              label: "Compensation & Benefits",
        //              translations: { da: "Løn & Goder" },
        //              slug: "careers/compensation",
        //            },
        //            {
        //              label: "Growth Path",
        //              translations: { da: "Udviklingsvej" },
        //              slug: "careers/growth",
        //            },
        //            {
        //              label: "Advancement Criteria",
        //              translations: { da: "Avancer Kriterier" },
        //              slug: "careers/advancement",
        //            },
        //          ],
        //        },
        {
          label: "Methodology",
          translations: { da: "Metodologi" },
          items: [
            {
              label: "Regenerative SDLC",
              translations: { da: "Regenerativ SDLC" },
              slug: "methodology/sdlc",
            },
            {
              label: "Green Algorithms",
              translations: { da: "Grønne Algoritmer" },
              slug: "methodology/green-algorithms",
            },
            {
              label: "The Toyota Way",
              translations: { da: "Toyota-vejen" },
              slug: "methodology/toyota-way",
            },
            {
              label: "Participatory Design",
              translations: { da: "Deltagende Design" },
              slug: "methodology/participatory-design",
            },
            {
              label: "Developer Experience (DevX)",
              translations: { da: "Udvikler Erfaring (DevX)" },
              slug: "methodology/devx",
            },
          ],
        },
        {
          label: "Open Source & Commons",
          translations: { da: "Open Source & Fællesgoder" },
          items: [
            {
              label: "Philosophy",
              translations: { da: "Filosofi" },
              slug: "commons/philosophy",
            },
            {
              label: "Cultural Heritage",
              translations: { da: "Kulturarv" },
              slug: "commons/heritage",
            },
            {
              label: "Project Directory",
              translations: { da: "Projektdirectory" },
              slug: "commons/projects",
            },
          ],
        },
        {
          label: "Fellowship Program",
          translations: { da: "Stipendiatureprogram" },
          items: [
            {
              label: "Overview",
              translations: { da: "Oversigt" },
              slug: "fellowship/overview",
            },
            {
              label: "The Model",
              translations: { da: "Modellen" },
              slug: "fellowship/model",
            },
            {
              label: "Apply",
              translations: { da: "Ansøg" },
              slug: "fellowship/apply",
            },
          ],
        },
        {
          label: "Community",
          translations: { da: "Fællesskab" },
          items: [
            {
              label: "For Members & Clients",
              translations: { da: "For Medlemmer & Klienter" },
              slug: "community/members",
            },
            {
              label: "For Contributors",
              translations: { da: "For Bidragydere" },
              slug: "community/contributors",
            },
            {
              label: "Contact & Connect",
              translations: { da: "Kontakt & Forbind" },
              slug: "community/contact",
            },
          ],
        },
      ],
    }),
  ],
});
