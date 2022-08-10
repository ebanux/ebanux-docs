// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ebanux - Docs',
  staticDirectories: ['public', 'static'],
  tagline: 'Sell anywhere',
  url: 'https://docs.ebanux.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore', //'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'ebanux', // Usually your GitHub org/user name.
  projectName: 'ebanux-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ebanux/ebanux-docs/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/ebanux/ebanux-docs-docs/edit/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cenit I0 - Docs',
        // logo: {
        //   alt: 'Cenit I0 - Docs Logo',
        //   src: 'img/logo2.svg',
        //   width: 28,
        //   // height: 32,
        // },
        items: [
          {
            type: 'doc',
            docId: 'terms_of_service',
            position: 'left',
            label: 'Terms of service',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ebanux/ebanux-docs-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/terms_of_service',
              },
              {
                label: 'Roadmap',
                href: 'https://cenit.frill.co/roadmap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/cenit-io/',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/cenitio/shared_invite/zt-16z88smty-4B9SPlL0ro~53ctg1TqZZw',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/CenitIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://cenit.frill.co/b/6m4lrkv4/feature-ideas',
                label: 'Feature ideas',
              },
              {
                label: 'Suggest a feature',
                href: 'https://github.com/ebanux/ebanux-docs/issues/new?assignees=&labels=&template=feature_request.md&title=',
              },
              {
                label: 'Report an issue',
                href: 'https://github.com/ebanux/ebanux-docs/issues/new?assignees=&labels=&template=bug_report.md&title=',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ebanux, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
