import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://lmbexe.github.io",
  base: "portfolio",
  trailingSlash: "always",
  integrations: [tailwind()],
});
