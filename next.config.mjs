/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ng.jumia.is",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
