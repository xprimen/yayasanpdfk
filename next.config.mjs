/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      /* {
        source: `/${process.env.ADMIN_PREFIX}/:path*`,
        destination: "/secure/:path*",
      }, */
      // {
      //   source: "/aman/*",
      //   destination: "/secure/*",
      // },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // pathname: "/images/stock/**",
      },
    ],
  },
};

export default nextConfig;
