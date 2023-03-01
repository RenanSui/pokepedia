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
        pokeBug: '#ebf2b4',
        pokeDark: '#cdc6bf',
        pokeDragon: '#d4c3fd',
        pokeElectric: '#fdf8ce',
        pokeFairy: '#fdecfa',
        pokeFighting: '#eab7b2',
        pokeFire: '#fbdac1',
        pokeFlying: '#eeecfd',
        pokeGhost: '#705898',
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
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
