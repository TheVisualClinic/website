const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIN_SERVICES_URL: process.env.MAIN_SERVICES_URL,
    IMAGE_URL: process.env.IMAGE_URL,
    FACEBOOK_1_PIXEL_ID: process.env.FACEBOOK_1_PIXEL_ID,
    FACEBOOK_2_PIXEL_ID: process.env.FACEBOOK_2_PIXEL_ID,
    GOOGLE_TAG: process.env.GOOGLE_TAG,
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
