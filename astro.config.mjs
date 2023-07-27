import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

import bookshop from "@bookshop/astro-bookshop"; // add for bookshop

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    bookshop(), // add for bookshop
    sitemap(),
  ],
});
