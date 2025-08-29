import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  allowedDevOrigins: ["https://ox-vocal-finch.ngrok-free.app"],
};

export default nextConfig;
