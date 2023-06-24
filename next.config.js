/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => {
      return rule.test?.test?.('.svg');
    });

    config.module.rules.push(
      {
        ...fileLoaderRule,
        resourceQuery: /url/,
        test: /\.svg$/i,
      },
      {
        use: ['@svgr/webpack'],
        resourceQuery: { not: /url/ },
        issuer: /\.[jt]sx?$/,
        test: /\.svg$/i,
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
