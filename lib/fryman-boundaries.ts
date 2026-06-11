// lib/fryman-boundaries.ts
//
// Boundary polygon for the Fryman Estates map on the homepage
// (components/sections/FrymanBoundary.tsx).
//
// ============================================================================
// SOURCE OF TRUTH: Fryman_Estates.kml (single Placemark "Fryman Estates"),
// exported from Google My Maps. The vertices below are the EXACT polygon
// coordinates from that KML, unchanged and unsimplified, converted from KML's
// lon,lat,alt order to { lat, lng }. The redundant ring-closing vertex (KML
// repeats the first point as the last) is dropped, since PolygonF closes the
// ring itself. Fryman is a SINGLE enclave: one polygon, not two. To update,
// re-export from My Maps and re-parse.
// ============================================================================

export type LatLng = { lat: number; lng: number };

// FRYMAN ESTATES (gold) — KML placemark "Fryman Estates", 60 vertices.
export const FRYMAN_BOUNDARY: LatLng[] = [
  { lat: 34.1335975, lng: -118.3915909 },
  { lat: 34.1329936, lng: -118.3918269 },
  { lat: 34.1330469, lng: -118.3938225 },
  { lat: 34.1318036, lng: -118.3937581 },
  { lat: 34.1314662, lng: -118.3961184 },
  { lat: 34.1317681, lng: -118.3965261 },
  { lat: 34.1308623, lng: -118.3964403 },
  { lat: 34.1308978, lng: -118.3967407 },
  { lat: 34.1316793, lng: -118.3975346 },
  { lat: 34.1317503, lng: -118.3982857 },
  { lat: 34.1314484, lng: -118.3986719 },
  { lat: 34.1314839, lng: -118.398865 },
  { lat: 34.1308623, lng: -118.3988865 },
  { lat: 34.1308623, lng: -118.3997448 },
  { lat: 34.1306846, lng: -118.3997448 },
  { lat: 34.1308267, lng: -118.4010108 },
  { lat: 34.1307912, lng: -118.401912 },
  { lat: 34.1302406, lng: -118.4018476 },
  { lat: 34.1303827, lng: -118.4005387 },
  { lat: 34.1302761, lng: -118.4004851 },
  { lat: 34.1302228, lng: -118.4003456 },
  { lat: 34.1297077, lng: -118.4004529 },
  { lat: 34.1295301, lng: -118.4003671 },
  { lat: 34.1294058, lng: -118.4001096 },
  { lat: 34.1295479, lng: -118.3995731 },
  { lat: 34.1293525, lng: -118.39938 },
  { lat: 34.1288907, lng: -118.399101 },
  { lat: 34.1283045, lng: -118.3980496 },
  { lat: 34.1288907, lng: -118.3967836 },
  { lat: 34.1289084, lng: -118.3964618 },
  { lat: 34.1287308, lng: -118.3964188 },
  { lat: 34.1284111, lng: -118.3963759 },
  { lat: 34.1276651, lng: -118.3963652 },
  { lat: 34.127603, lng: -118.3950831 },
  { lat: 34.1275674, lng: -118.3938225 },
  { lat: 34.1261375, lng: -118.3923848 },
  { lat: 34.1253915, lng: -118.3931787 },
  { lat: 34.1248408, lng: -118.3924277 },
  { lat: 34.1249296, lng: -118.3920844 },
  { lat: 34.1245566, lng: -118.3914407 },
  { lat: 34.1249119, lng: -118.387707 },
  { lat: 34.126777, lng: -118.3882435 },
  { lat: 34.1275141, lng: -118.3878358 },
  { lat: 34.1284377, lng: -118.3873422 },
  { lat: 34.1288463, lng: -118.3868702 },
  { lat: 34.1293614, lng: -118.386205 },
  { lat: 34.1298765, lng: -118.3861406 },
  { lat: 34.1299742, lng: -118.3862157 },
  { lat: 34.1301163, lng: -118.3864839 },
  { lat: 34.1300985, lng: -118.3872779 },
  { lat: 34.1300097, lng: -118.3887155 },
  { lat: 34.1300985, lng: -118.3894451 },
  { lat: 34.1308889, lng: -118.3894773 },
  { lat: 34.1311642, lng: -118.388281 },
  { lat: 34.1312131, lng: -118.3873825 },
  { lat: 34.1315461, lng: -118.3870418 },
  { lat: 34.1321766, lng: -118.389134 },
  { lat: 34.1323898, lng: -118.3892949 },
  { lat: 34.1326384, lng: -118.3901747 },
  { lat: 34.1329404, lng: -118.3908935 },
];

/** Simple vertex-average centroid, used to place the area's text label. */
export function centroid(ring: LatLng[]): LatLng {
  const n = ring.length;
  const sum = ring.reduce(
    (acc, p) => ({ lat: acc.lat + p.lat, lng: acc.lng + p.lng }),
    { lat: 0, lng: 0 }
  );
  return { lat: sum.lat / n, lng: sum.lng / n };
}
