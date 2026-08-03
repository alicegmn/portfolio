import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		globalNotFound: true,
	},

	async redirects() {
		return [
			{
				source: "/",
				destination: "/en",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
