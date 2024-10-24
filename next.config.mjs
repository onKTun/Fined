/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self' kkwupcruwqnlbuzkkiom.supabase.co;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'self' kkwupcruwqnlbuzkkiom.supabase.co;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig = {
  output: "standalone", // Outputs a Single-Page Application (SPA).
  //distDir: './dist', // Changes the build output directory to `./dist/`.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
