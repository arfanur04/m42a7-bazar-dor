import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
	allowedDevOrigins: ["192.168.1.246"],
	images: {
		remotePatterns: [{ protocol: "https", hostname: "**" }],
	},
};

export default nextConfig;
