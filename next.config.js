/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "images.indianexpress.com"
            }
        ]
    }
}

module.exports = nextConfig
