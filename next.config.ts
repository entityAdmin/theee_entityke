import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['nowqwttrqtklrxgjgxid.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nowqwttrqtklrxgjgxid.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/folder/photos/**',
      },
    ],
  },
}

module.exports = nextConfig