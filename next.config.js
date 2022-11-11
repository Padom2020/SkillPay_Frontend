/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
     domains: [
       "images.unsplash.com",
       "plus.unsplash.com",
       "encrypted-tbn0.gstatic.com",
     ],
   },
   images: {
     unoptimized: true,
   },
};

module.exports = nextConfig;
