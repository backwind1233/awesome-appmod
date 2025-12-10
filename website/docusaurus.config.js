// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/**
 * @type {import('@docusaurus/types').Config}
 */

import { themes as prismThemes } from "prism-react-renderer";

const config = {
  // CONFIG: Add Custom Fields - globally reference them from siteConfig
  customFields: {
    description:
      "Awesome App Modernization Tasks are reusable Microsoft tasks and workflows for modernizing applications with VS Code extensions and Azure services.",
  },

  // CONFIG: Landing Pages uses this (also globally via siteConfig)
  title: "Awesome App Modernization",
  tagline: "Discover - Create - Contribute",

  // CONFIG: Used for GitHub Pages
  url: "https://backwind1233.github.io",
  baseUrl: "/awesome-appmod/",
  favicon: "img/favicon.ico",
  organizationName: "backwind1233",
  projectName: "awesome-appmod",
  deploymentBranch: "gh-pages",

  // CONFIG: Early detection for site health
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // CONFIG: Localization if supporting multiple languages
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // CONFIG: theme = set properties for UI like navbar, footer, docs, copyright etc.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // CONFIG: sidebar
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      // CONFIG: default theme color mode
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // CONFIG: navbar logo, items, style, stickiness
      navbar: {
        title: "awesome-appmod",
        logo: {
          alt: "Awesome AppMod logo",
          src: "img/logo.png",
          href: "/",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          {
            to: "/getting-started",
            label: "Getting Started",
            position: "left",
          },
          {
            label: "Contribute",
            position: "left",
            type: "doc",
            docId: "contribute",
          },
          {
            to: "https://github.com/backwind1233/app-mod-my-tasks",
            label: "My Tasks",
            position: "left",
          },
          {
            to: "https://learn.microsoft.com/azure/",
            label: "Resources",
            position: "left",
          },

          // right
          {
            href: "https://github.com/backwind1233/awesome-appmod",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },

          {
            to: "/docs/contribute",
            label: "Submit your task!",
            position: "right",
            className: "button",
          },
        ],
      },

      // CONFIG: footer
      footer: {
        style: "light",
        links: [
          {
            label: `App Modernization Tasks`,
            to: "https://github.com/topics/appmod-tasks",
          },
          {
            label: `My Tasks Repository`,
            to: "https://github.com/backwind1233/app-mod-my-tasks",
          },
          {
            label: "Privacy Statement",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: "Built With Docusaurus",
            to: "https://docusaurus.io",
          },
          {
            label: `Copyright © ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },

      // CONFIG: the prism-react-renderer to highlight code blocks
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  // CONFIG: plugins
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/getting-started",
            from: "/about",
          },
          {
            to: "/docs/contribute",
            from: "/docs/intro",
          },
        ],
      },
    ],
  ],

  // CONFIG: Set presets for chosen theme
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
};

module.exports = config;
