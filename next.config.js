/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    outputStandalone: true,
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
