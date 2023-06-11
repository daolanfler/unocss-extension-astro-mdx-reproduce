import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx"; // when not using mdx, works fine i.e. 

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [mdx()]
});