/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Outputs a Single-Page Application (SPA).
  //distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kkwupcruwqnlbuzkkiom.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/avatars/**",
      },
    ],
  },
};

export default nextConfig;
