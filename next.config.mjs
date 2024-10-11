/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Outputs a Single-Page Application (SPA).
  //distDir: './dist', // Changes the build output directory to `./dist/`.
  eslint: {
    dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

export default nextConfig;
