const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });
    /* Custom file path aliases */
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'apis': path.resolve(__dirname, 'src/apis'),
      'store': path.resolve(__dirname, 'src/store'),
      'components': path.resolve(__dirname, 'src/components'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'types': path.resolve(__dirname, 'src/types'),
    }
    return config
  }
});
