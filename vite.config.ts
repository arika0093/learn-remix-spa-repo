import path from "path";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remix({
			ssr: false,
		}),
		tsconfigPaths(),
	],
	server: {
		fs: {
			allow: ["app", "src"],
		},
	},
	resolve: {
		alias: {
			"~": path.join(__dirname, "./app"),
			"@": path.join(__dirname, "./src"),
		},
	},
});
