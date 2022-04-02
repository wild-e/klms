module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['Crimson pro'], // ex: class="font-crimson"
        inter: ['Inter'],
      },
      colors: {
        blue: {
          munsell: '#0091AD',
          sapphire: '#165F78',
          cadet: '#2B2D42',
          eerie: '#191516',
        },
        gray: {
          granite: '#605F6B',
          silver: '#CAC3BC',
        },
        beige: {
          lace: '#FFF4E4',
        },
        red: {
          persimmon: {
            DEFAULT: '#E55812',
            lighter: '#F07C42',
            darker: '#BD490F',
          },
          amaranth: {
            DEFAULT: '#D90429',
            lighter: '#F0052C',
            darker: '#C80425',
          },
        },
        brown: {
          golden: '#99621E',
        },
        yellow: {
          lemon: '#FCFC62',
        },
        green: {
          lime: '#6BD425',
        },
      },
    },
  },
  plugins: [],
};
