import { states } from "@/data/full_nested_states";

/**
 * Get all states
 */
export function getAllStates() {
  return states;
}

/**
 * Get a single state by its ID
 */
export function getStateById(stateId) {
  return states.find(
    (s) => s.id.toLowerCase() === stateId?.toLowerCase()
  );
}

/**
 * Get a specific district within a state
 */
export function getDistrictById(stateId, districtId) {
  const state = getStateById(stateId);
  if (!state) return null;
  return state.districts?.find(
    (d) => d.id.toLowerCase() === districtId?.toLowerCase()
  );
}

/**
 * Get a specific place within a district of a state
 */
export function getPlaceById(stateId, districtId, placeId) {
  const district = getDistrictById(stateId, districtId);
  if (!district) return null;
  return district.places?.find(
    (p) => p.id.toLowerCase() === placeId?.toLowerCase()
  );
}

/**
 * Global search across states, districts, and places
 */
export function searchLocations(query) {
  if (!query || query.trim() === "") return [];
  const q = query.toLowerCase().trim();
  const results = [];

  for (const state of states) {
    if (state.name.toLowerCase().includes(q) || state.tagline?.toLowerCase().includes(q)) {
      results.push({
        type: "state",
        title: state.name,
        subtitle: state.tagline || `State in ${state.region} India`,
        url: `/states/${state.id}`,
        image: state.heroImage,
      });
    }

    for (const district of state.districts || []) {
      if (district.name.toLowerCase().includes(q)) {
        results.push({
          type: "district",
          title: district.name,
          subtitle: `District in ${state.name}`,
          url: `/states/${state.id}/${district.id}`,
          image: district.image,
        });
      }

      for (const place of district.places || []) {
        if (
          place.name.toLowerCase().includes(q) ||
          place.category?.toLowerCase().includes(q) ||
          place.description?.toLowerCase().includes(q)
        ) {
          results.push({
            type: "place",
            title: place.name,
            subtitle: `${place.category} · ${district.name}, ${state.name}`,
            url: `/states/${state.id}/${district.id}/${place.id}`,
            image: place.images?.[0],
            rating: place.rating,
          });
        }
      }
    }
  }

  return results.slice(0, 8);
}

/**
 * Get all places flattened for featured display
 */
export function getAllPlaces() {
  const places = [];
  for (const state of states) {
    for (const district of state.districts || []) {
      for (const place of district.places || []) {
        places.push({
          ...place,
          stateId: state.id,
          stateName: state.name,
          districtId: district.id,
          districtName: district.name,
        });
      }
    }
  }
  return places;
}
