const nextConfig = {
  transpilePackages: ["mui-one-time-password-input"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slas-prop.ganafsmas.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "api.slasprop.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
