import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: "/learn-remix-spa-repo/",
	plugins: [
		remix({
			basename: "/learn-remix-spa-repo/",
			ssr: false,
		}),
		tsconfigPaths(),
	],
	server: {
		fs: {
			allow: ["app", "src"],
		},
	},
});
