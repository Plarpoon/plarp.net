import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'plarp.net',
  icon: '/lw.png',
  logo: {
    light: '/SisselCat.webp',
    dark: '/SisselCat.webp',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/plarpoon/plarp.net',
      },
    ],
  },
});
