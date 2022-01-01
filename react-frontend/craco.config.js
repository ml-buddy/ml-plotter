const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@styles': './src/assets/styles',
          '@images': './src/assets/images',
          '@store': './src/state',
          '@state': './src/state/features',
          '@views': './src/views',
          '@': './src'
        }
      }
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

