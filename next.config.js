/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname:
					'/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
			},
		],
	},
};

module.exports = nextConfig;
