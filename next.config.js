/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // we need to define these patterns in order to use URL of images as src props in <Image /> tags
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dine-market-bay.vercel.app",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "full-stack-ecommerce-clothing-web.vercel.app",
                port: "",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
