/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Use static export for GitHub Pages
    output: 'export',
    images: {
        unoptimized: true, // next export doesn't optimize images
    },
}

module.exports = nextConfig