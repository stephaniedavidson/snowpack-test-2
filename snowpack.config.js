// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/'
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@marlonmarcello/snowpack-plugin-pug'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "public"
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
