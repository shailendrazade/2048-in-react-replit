
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!.*/$)',
          },
        ],
        destination: '/:path*/',
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
