/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    outputStandalone: true,
  },
  async headers() {
    return [
      {
        source: '/api/edge/version/latest-mac.yml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
