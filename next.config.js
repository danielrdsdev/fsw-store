/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fsw-store.s3.sa-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
}

module.exports = nextConfig
