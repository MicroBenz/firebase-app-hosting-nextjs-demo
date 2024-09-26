/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'eldenring.fanapis.com'
      }
    ]
  },
};

export default nextConfig;
