/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    swcMinify: true,
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
