const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APPLICATION_PORT: process.env.APPLICATION_PORT,
    MAIN_SERVICES_URL: process.env.MAIN_SERVICES_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'main.thevisual-clinic.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
    ],
  },
}
module.exports = withNextIntl(nextConfig)
