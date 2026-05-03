import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// eslint configuration is not supported in NextConfig
	experimental: {
		globalNotFound: true,
	},
};

export default nextConfig;
