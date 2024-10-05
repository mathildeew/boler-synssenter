/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Legg til domenet du bruker
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
