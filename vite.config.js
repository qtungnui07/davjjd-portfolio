import { defineConfig } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fallbackMissingModulesPlugin() {
  return {
    name: 'fallback-missing-modules',
    resolveId(id, importer) {
      if (id.startsWith('./') && (id.endsWith('.js') || id.endsWith('.css'))) {
        const importerDir = importer ? path.dirname(importer) : path.resolve(__dirname, 'src');
        const resolvedPath = path.resolve(importerDir, id);
        if (!fs.existsSync(resolvedPath)) {
          return '\0virtual:' + id;
        }
      }
      return null;
    },
    load(id) {
      if (id.startsWith('\0virtual:')) {
        if (id.endsWith('.css')) {
          return '';
        }
        return 'export default function Fallback() { return null; }; export const t = () => null;';
      }
      return null;
    },
  };
}

function creativePortfolioCleanupPlugin() {
  return {
    name: 'creative-portfolio-cleanup',
    transform(code, id) {
      if (!id.endsWith('CreativePortfolioTemplatePage.js')) {
        return null;
      }

      const withMinimalLoader = code
        // Keep the full-page loader and its slide-up exit, but remove the
        // template's avatar and owner name from its center.
        .replace(
          /\(0,h\.jsx\)\(m,\{imageSrc:`https:\/\/storage\.googleapis\.com\/webild\/default\/templates\/creative-portfolio\/avatar\.webp`,title:`Joseph Alexander`\}\),/,
          '(0,h.jsx)(m,{}),',
        );

      const contentReplacements = [
        [
          'https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-1.webp',
          '/flashcards/miku-sky.jpg',
        ],
        [
          'https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-2.webp',
          '/flashcards/miku-ribbon.jpg',
        ],
        [
          'https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-3.webp',
          '/flashcards/miku-library.jpg',
        ],
        [
          'https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp',
          '/webild/default/templates/creative-portfolio/avatar.webp',
        ],
        [
          '© 2026 Joseph Alexander. All rights reserved.',
          'Copyright 2026 davjjd. Website by qtitpc.',
        ],
        ['1 spot left this month', 'Vietnam'],
        ['Design that', 'Hi there!'],
        ['commands attention.', "I'm Davjjd"],
        [
          "I don't design to decorate — I design to solve. Sharp, intentional work that moves brands forward.",
          "Hi, I'm davjjd. An English major bridging the gap between language studies, gaming, and streaming.",
        ],
        ['Joseph Alexander', 'davjjd'],
        ['Alexander', 'davjjd'],
      ];

      const updatedCode = contentReplacements.reduce(
        (result, [from, to]) => result.replaceAll(from, to),
        withMinimalLoader,
      );

      return { code: updatedCode, map: null };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [fallbackMissingModulesPlugin(), creativePortfolioCleanupPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
