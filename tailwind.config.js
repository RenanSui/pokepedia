/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				// dark
				pokeBug: '#7d872f',
				pokeDark: '#b5b2ac',
				pokeDragon: '#6040ac',
				pokeElectric: '#fbeb66',
				pokeFairy: '#f9c8f1',
				pokeFighting: '#bc2d20',
				pokeFire: '#d36715',
				pokeFlying: '#2e17dd',
				pokeGhost: '#382c4c',
				pokeGrass: '#70a853',
				pokeGround: '#a37e21',
				pokeIce: '#309084',
				pokeNormal: '#8c8c58',
				pokePoison: '#813976',
				pokePsychic: '#ec4f79',
				pokeRock: '#968f70',
				pokeShadow: '#754a7c',
				pokeSteel: '#5f5f8e',
				pokeUnkown: '#4e8f7e',
				pokeWater: '#009dc4',
			},
			animation: {
				expanding: 'expanding 3s ease-in-out',
				shrinking: 'shrinking 3s ease-in-out',
				fadeIn: 'fadeIn 3s ease-in-out',
				fadeOut: 'fadeOut 1s ease-in-out',
				loading: 'loading 1s ease-in-out infinite',
			},
			screens: {
				xs: '414px',
				...defaultTheme.screens,
			},
			keyframes: {
				loading: {
					'0%': { left: '-15rem' },
					'100%': { left: '30rem' },
				},
				expanding: {
					'0%': { transform: 'scale(0, 0)' },
					'40%': { transform: 'scale(500, 500)' },
				},
				shrinking: {
					'0%': { transform: 'scale(500, 500)' },
					'20%': { transform: 'scale(0, 0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'40%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'40%': { opacity: '0' },
				},
			},
		},
	},
	plugins: [],
};
