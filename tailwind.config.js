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
				'custom-dark-blue-900': '#3A3D62',
				'pokedex-100': '#F5FBFB',
				'pokedex-200': '#EBF3F5',
				// light
				pokeBug: '#ebf2b4',
				pokeDark: '#cdc6bf',
				pokeDragon: '#d4c3fd',
				pokeElectric: '#fdf8ce',
				pokeFairy: '#fdecfa',
				pokeFighting: '#eab7b2',
				pokeFire: '#fbdac1',
				pokeFlying: '#eeecfd',
				pokeGhost: '#c5bbd7',
				pokeGrass: '#d6eeca',
				pokeGround: '#f6ecd2',
				pokeIce: '#e7f7f5',
				pokeNormal: '#ebebdf',
				pokePoison: '#e9cde5',
				pokePsychic: '#fdd3de',
				pokeRock: '#eee6c9',
				pokeShadow: '#d1b9d5',
				pokeSteel: '#eaeaf1',
				pokeUnkown: '#d3e7e2',
				pokeWater: '#d2defa',
				// dark
				pokeBugDarken: '#7d872f',
				pokeDarkDarken: '#6f6356',
				pokeDragonDarken: '#2f0b85',
				pokeElectricDarken: '#9d8d04',
				pokeFairyDarken: '#f284df',
				pokeFightingDarken: '#923229',
				pokeFireDarken: '#94480f',
				pokeFlyingDarken: '#2e17dd',
				pokeGhostDarken: '#382c4c',
				pokeGrassDarken: '#70a853',
				pokeGroundDarken: '#a37e21',
				pokeIceDarken: '#309084',
				pokeNormalDarken: '#8c8c58',
				pokePoisonDarken: '#813976',
				pokePsychicDarken: '#981134',
				pokeRockDarken: '#947e2e',
				pokeShadowDarken: '#754a7c',
				pokeSteelDarken: '#5f5f8e',
				pokeUnkownDarken: '#4e8f7e',
				pokeWaterDarken: '#1641a3',
				cor1: '#F5FBFB',
				cor2: '#B6C6DE',
				cor3: '#D4C8D7',
				cor4: '#DCD7EE',
			},
			animation: {
				expanding: 'expanding 3s ease-in-out',
				shrinking: 'shrinking 3s ease-in-out',
				fadeIn: 'fadeIn 3s ease-in-out',
				fadeOut: 'fadeOut 1s ease-in-out',
			},
			screens: {
				xs: '414px',
				...defaultTheme.screens,
			},
			keyframes: {
				expanding: {
					// TESTES
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
