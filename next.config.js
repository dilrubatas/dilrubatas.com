/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dilrubatas.com',
  assetPrefix: '/dilrubatas.com/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig; 