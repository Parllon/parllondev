import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import {
  seoConfig,
  buildHeadTags,
  buildSitemap,
  buildRobots,
} from "./seo.config.js";

/**
 * Injeta SEO ESTÁTICO no index.html (meta, Open Graph, Twitter e
 * JSON-LD) a partir de seo.config.js — assim crawlers e robôs de
 * preview leem tudo sem executar JS. Também emite sitemap.xml e
 * robots.txt no build, a partir da mesma fonte única.
 */
function seo() {
  return {
    name: "seo-static-injection",
    transformIndexHtml() {
      return buildHeadTags(seoConfig);
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(seoConfig),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobots(seoConfig),
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
