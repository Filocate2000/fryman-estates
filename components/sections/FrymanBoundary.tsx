"use client";

import { useEffect, useState } from "react";
import {
  GoogleMap,
  PolygonF,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import { MAP_ID } from "@/lib/commute/mapStyle";
import { FRYMAN_BOUNDARY, centroid, type LatLng } from "@/lib/fryman-boundaries";
import { homeContent } from "@/content/home";

// Reuse the SAME loader id + libraries as the commute widget so the two maps on
// the homepage share a single Google Maps script instance. @react-google-maps
// keys its loader by `id`; mismatched options under the same id throw, so these
// must stay in lockstep with CommuteWidget.tsx.
const GOOGLE_MAPS_LIBRARIES: ("geometry" | "marker")[] = ["geometry", "marker"];
const MAP_CONTAINER_STYLE = { width: "100%", height: "540px" };

// Fryman is a single enclave, rendered in the site gold (no laurelwood two-tone).
const POLY_OPTIONS = {
  fillColor: "#C8A75B",
  strokeColor: "#9A7A31",
  fillOpacity: 0.3,
  strokeOpacity: 0.95,
  strokeWeight: 2,
  clickable: false,
} as const;

// Gold map pin + white pill label, centered on the polygon, rendered through an
// OverlayView so it tracks the map. The map has no default google.maps.Marker;
// this custom SVG pin replaces it while keeping the readable label below.
function AreaLabel({ position, text }: { position: LatLng; text: string }) {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
      })}
    >
      <div className="flex flex-col items-center pointer-events-none select-none">
        <svg
          width="30"
          height="40"
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.4))" }}
        >
          <path
            d="M15 0C6.716 0 0 6.716 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.716 23.284 0 15 0z"
            fill="#C8A75B"
            stroke="#9A7A31"
            strokeWidth="1.5"
          />
          <circle cx="15" cy="15" r="5.5" fill="#0A1F3D" />
        </svg>
        <div
          className="-mt-1 px-2.5 py-1 bg-white/95 text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-sm ring-1 ring-black/5"
          style={{ color: "#0e1a2e", textShadow: "0 1px 0 rgba(255,255,255,0.6)" }}
        >
          {text}
        </div>
      </div>
    </OverlayView>
  );
}

function MapCanvas() {
  const browserApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: browserApiKey ?? "",
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "misraje-commute-map-script",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  useEffect(() => {
    if (!map || !isLoaded) return;
    const b = new window.google.maps.LatLngBounds();
    FRYMAN_BOUNDARY.forEach((p) => b.extend(p));
    map.fitBounds(b, 64);
  }, [map, isLoaded]);

  if (!browserApiKey) {
    return (
      <p className="text-ink-300 text-sm py-12">
        Map unavailable, browser key not configured.
      </p>
    );
  }

  if (loadError) {
    return <p className="text-ink-300 text-sm py-12">Map failed to load.</p>;
  }

  if (!isLoaded) {
    return (
      <div
        className="bg-white/5 animate-pulse"
        style={MAP_CONTAINER_STYLE}
        aria-label="Loading map"
      />
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={centroid(FRYMAN_BOUNDARY)}
      zoom={15}
      options={{
        mapId: MAP_ID,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
        clickableIcons: false,
      }}
      onLoad={(m) => setMap(m)}
    >
      <PolygonF path={FRYMAN_BOUNDARY} options={POLY_OPTIONS} />
      <AreaLabel position={centroid(FRYMAN_BOUNDARY)} text="Fryman Canyon Estates" />
    </GoogleMap>
  );
}

/**
 * Homepage boundary band: an interactive Google Map of the single Fryman Estates
 * enclave, in place of laurelwood's two-tone West/East overlay. The boundary
 * vertices live in lib/fryman-boundaries.ts (parsed from Fryman_Estates.kml).
 * Navy band, heading, and intro copy are unchanged from the placeholder version.
 */
export function FrymanBoundary() {
  const b = homeContent.boundary;
  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="w-full px-6 md:px-16">
        <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
          {b.heading}
        </h2>
        <span className="gold-rule mb-10" />
        <div className="text-lg text-ink-100 leading-relaxed mb-10 space-y-5">
          {b.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div
          className="overflow-hidden border-2 border-gold-500/70"
          style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.35)" }}
        >
          <MapCanvas />
        </div>
      </div>
    </section>
  );
}
