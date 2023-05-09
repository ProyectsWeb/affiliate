/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgaz3.staticbg.com',
        port: '',
        pathname: '/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'imgaz1.staticbg.com',
        port: '',
        pathname: '/thumb/**',
      },
      {
       hostname: 'imgaz2.staticbg.com'
      },
      {
       hostname: 'imgaz.staticbg.com'
      }
      
    ],
  }
}

module.exports = nextConfig
/* imgaz3.staticbg.com, */


/* {
  protocol: 'https',
  hostname: 'imgaz1.staticbg.com',
  port: '',
  pathname: '/thumb/**',
}, */