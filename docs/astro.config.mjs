import { defineConfig } from 'astro';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MoodUI',
      description: 'A mobile-first UI library with a layered theme system for effortless customization',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/yourusername/mood-ui',
      },
      editLink: {
        baseUrl: 'https://github.com/yourusername/mood-ui/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Theming',
          items: [
            { label: 'Overview', slug: 'theming/overview' },
            { label: 'Token Layers', slug: 'theming/tokens' },
            { label: 'Dark Mode', slug: 'theming/dark-mode' },
            { label: 'CSS Override', slug: 'theming/css-override' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Button', slug: 'components/button' },
            { label: 'Badge', slug: 'components/badge' },
            { label: 'Input', slug: 'components/input' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
