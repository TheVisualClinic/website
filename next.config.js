const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APPLICATION_PORT: process.env.APPLICATION_PORT,
    NEXT_PUBLIC_CLIENT_KEY: process.env.NEXT_PUBLIC_CLIENT_KEY,
    MAIN_SERVICES_URL: process.env.MAIN_SERVICES_URL,
    IDP_PROVIDER_URL: process.env.IDP_PROVIDER_URL,
    STORAGE_PROVIDER_URL: process.env.STORAGE_PROVIDER_URL,
  },
}
module.exports = withNextIntl(nextConfig)
