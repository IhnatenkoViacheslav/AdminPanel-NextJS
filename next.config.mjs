/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.NEXT_PUBLIC_APP_URL
  },
  images: {
    domains: ['localhost', 'cloudflare-ipfs.com'],
    formats: ['image/webp']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*'
      }
    ]
  }
}

export default nextConfig
