/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
    ],
    qualities: [82, 85],
  },
  experimental: {
    // Disable Next's dev-tools "Segment Explorer". In 15.5.x it injects a
    // <SegmentViewNode> client component that fails to resolve in the RSC
    // client manifest, surfacing as "Cannot read properties of undefined
    // (reading 'call')" on dev pages. (Inherited from misraje-site.)
    devtoolSegmentExplorer: false,
  },
  async redirects() {
    return [
      // frymanranch.com is a legacy domain: its homepage should land on the
      // Fryman Ranch history page. The apex (no www) is redirected out to the
      // canonical www host + full URL; the www host redirects only its own
      // homepage internally to /history/fryman-ranch.
      //
      // IMPORTANT: source is '/' (homepage only), NOT '/:path*'. A catch-all on
      // www.frymanranch.com would match /history/fryman-ranch itself and
      // redirect the destination to itself, causing an infinite loop.
      {
        source: "/",
        has: [{ type: "host", value: "frymanranch.com" }],
        destination: "https://www.frymanranch.com/history/fryman-ranch",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.frymanranch.com" }],
        destination: "/history/fryman-ranch",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
