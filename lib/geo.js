/**
 * Geographic calculation helpers
 */

/**
 * Calculates distance between two points in km (Haversine formula)
 */
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export const STATE_COORDINATES = {
  rajasthan: { lat: 26.9124, lon: 75.7873 },
  kerala: { lat: 8.5241, lon: 76.9366 },
  "uttar-pradesh": { lat: 26.8467, lon: 80.9462 },
  "himachal-pradesh": { lat: 31.1048, lon: 77.1734 },
  goa: { lat: 15.4909, lon: 73.8278 },
  uttarakhand: { lat: 30.3165, lon: 78.0322 },
  ladakh: { lat: 34.1526, lon: 77.5771 },
  karnataka: { lat: 12.9716, lon: 77.5946 },
};
