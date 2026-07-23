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
      // frymanranch.com is a legacy domain: every request to it (apex or www)
      // is sent off-domain to the Fryman Ranch history page on the canonical
      // frymancanyonhomes.com host. Keeping visitors on www.frymanranch.com
      // broke site navigation, since menu links to '/' were redirected back to
      // the history page.
      //
      // Catch-all '/:path*' is safe here: the destination is a different host,
      // so no request on frymanranch.com can redirect to itself.
      {
        source: "/:path*",
        has: [{ type: "host", value: "frymanranch.com" }],
        destination: "https://www.frymancanyonhomes.com/history/fryman-ranch",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.frymanranch.com" }],
        destination: "https://www.frymancanyonhomes.com/history/fryman-ranch",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
