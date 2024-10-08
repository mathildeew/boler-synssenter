/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Legg til domenet du bruker
  },
  experimental: new URL("www.https://boler-synssenter.vercel.app/"),
};

export default nextConfig;
