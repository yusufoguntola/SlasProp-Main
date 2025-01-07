const scripts = ["https://*.paystack.co", "https://*.gstatic.com"].join(" ");
const remotePatterns = [
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
  {
    protocol: "https",
    hostname: "*.openstreetmap.org",
  },
];

const images = remotePatterns.map(({ hostname }) => hostname).join(" ");

const csp = [
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${scripts}`,
  `style-src 'self' 'unsafe-inline' 'https://cdn.jsdelivr.net/*'`,
  `img-src 'self' blob: data: ${images}`,
  `font-src 'self'`,
  `frame-ancestors 'none'`,
];

async function headers() {
  return [
    {
      source: "/(.*)?", // Matches all pages
      headers: [
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Webkit-CSP",
          value: "default-src 'self'",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Content-Security-Policy",
          value: csp.join("; "),
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ];
}

/**@type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["mui-one-time-password-input"],
  images: {
    remotePatterns,
  },
  headers,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
