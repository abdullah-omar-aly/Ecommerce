/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    mongodburl: "Your MongoDB connection String",
},
images: {
 
  
}

}

module.exports = nextConfig
 