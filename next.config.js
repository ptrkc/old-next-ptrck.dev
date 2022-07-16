/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  eslint: {
    dirs: [
      'components',
      'lib',
      'pages',
      'styles',
    ],
  },
}

module.exports = nextConfig
