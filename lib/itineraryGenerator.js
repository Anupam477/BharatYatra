/**
 * Intelligent Itinerary Generation Engine for Bharat Yatra
 */
import { getStateById } from "./data";

export function generateSmartItinerary({ stateId, durationDays = 3, travelStyle = "heritage", pace = "balanced" }) {
  const state = getStateById(stateId) || getStateById("rajasthan");
  const districts = state?.districts || [];
  const allPlaces = districts.flatMap((d) => d.places || []);

  const days = [];
  const totalDays = Math.min(Math.max(parseInt(durationDays, 10) || 3, 2), 7);

  // Pick destinations distributed across days
  for (let i = 1; i <= totalDays; i++) {
    const placeIndex = (i - 1) % (allPlaces.length || 1);
    const place = allPlaces[placeIndex];
    const district = districts.find((d) => d.places?.some((p) => p.id === place?.id)) || districts[0];

    let theme = "Cultural Exploration & Iconic Sights";
    if (travelStyle === "spiritual") theme = "Sacred Darshan, Morning Chants & Holy Aarti";
    if (travelStyle === "adventure") theme = "Trekking Trails, Sunrise Views & Thrills";
    if (travelStyle === "luxury") theme = "Royal Palace Stays, High Tea & Private Tours";
    if (travelStyle === "nature") theme = "Eco Reserves, Mist-Covered Hills & Lake Sunsets";

    days.push({
      dayNumber: i,
      title: `Day ${i}: ${district?.name || state.name} — ${theme}`,
      location: `${district?.name || state.capital}, ${state.name}`,
      highlightPlace: place?.name || `${state.name} Grandeur`,
      placeId: place?.id,
      stateId: state.id,
      districtId: district?.id,
      activities: [
        {
          time: "07:30 AM - 10:00 AM",
          title: "Morning Sunrise & Heritage Walk",
          desc: `Early morning exploration around ${place?.name || "the historic center"} when ambient light is optimal for photography and serene contemplation.`,
          icon: "Sunrise"
        },
        {
          time: "11:30 AM - 02:00 PM",
          title: `Guided Architecture Tour of ${place?.name || "Historic Marvels"}`,
          desc: `In-depth visit with local storytelling. ${place?.description ? place.description.slice(0, 140) + "..." : "Marvel at centuries-old stone craftsmanship and royal courtyards."}`,
          icon: "Compass"
        },
        {
          time: "02:30 PM - 04:00 PM",
          title: "Authentic Regional Gastronomy Experience",
          desc: `Savor signature delicacies of ${state.name} like ${state.culture?.split(",")?.[3] || "traditional local thali"} at a heritage courtyard eatery.`,
          icon: "Utensils"
        },
        {
          time: "05:30 PM - 08:00 PM",
          title: "Sunset Golden Hour & Artisan Bazaars",
          desc: "Stroll through traditional craft bazaars, observing master weavers, block printers, and folk performers.",
          icon: "Sunset"
        }
      ],
      hotelRecommendation: place?.hotels?.[0] || {
        name: `Heritage Palace Stay ${district?.name}`,
        pricePerNight: "₹9,500",
        rating: 4.8
      },
      insiderTip: `Dress modestly when visiting sacred shrines in ${state.name}. Carry cash for local artisans and start early to beat the afternoon sun.`
    });
  }

  // Budget calculations
  const baseDailyCostInr = travelStyle === "luxury" ? 22000 : travelStyle === "adventure" ? 4500 : 8500;
  const estimatedTotalInr = baseDailyCostInr * totalDays;

  return {
    stateName: state.name,
    tagline: state.tagline,
    heroImage: state.heroImage,
    durationDays: totalDays,
    travelStyle,
    estimatedCostInr: estimatedTotalInr,
    estimatedCostPerDayInr: baseDailyCostInr,
    bestSeason: state.bestTimeToVisit,
    days,
    packingChecklist: [
      "Comfortable breathable cottons and walking footwear",
      "Power bank and universal Indian plug adapters",
      "Sun protection (polarized sunglasses, hat, SPF 50)",
      "Modest scarves/shawls for temple and monument entries",
      "Hydration flask and light fleece jacket for breezy evenings"
    ]
  };
}
