
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/privacy',
        destination: '/privacy/',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/terms',
        destination: '/terms/',
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
