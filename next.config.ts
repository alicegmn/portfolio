import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				pathname: "/alicegmn/paxdb/**",
			},
		],
	},
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
