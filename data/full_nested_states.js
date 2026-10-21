export const states = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North-West",
    capital: "Jaipur",
    tagline: "The Land of Kings & Grand Forts",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    description: "Rajasthan is a magical realm of opulent palaces, mighty hill fortresses, vibrant desert folklore, and rich royal heritage. From the pink-hued architecture of Jaipur to the golden sands of Jaisalmer, every corner narrates tales of chivalry and grandeur.",
    bestTimeToVisit: "October to March",
    culture: "Folk music (Manganiyar & Langa), Kalbelia dance, Bandhani textiles, Dal Baati Churma",
    districts: [
      {
        id: "jaipur",
        name: "Jaipur",
        description: "Known as the Pink City, Jaipur is renowned for UNESCO World Heritage forts, bustling bazaars, and astronomical marvels.",
        image: "https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "hawa-mahal",
            name: "Hawa Mahal (Palace of Winds)",
            category: "Heritage",
            rating: 4.8,
            reviewsCount: 14200,
            bestTimeToVisit: "October to March (Early mornings for best photography)",
            timings: "9:00 AM - 5:00 PM",
            entryFee: "₹50 (Indian), ₹200 (Foreign)",
            description: "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a 5-story palace crafted from red and pink sandstone with 953 intricately carved jharokhas (casements) designed to allow royal women to observe street festivities unnoticed.",
            images: [
              "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "The Raj Palace Grand Heritage",
                rating: 4.9,
                pricePerNight: "₹18,500",
                location: "Amer Road, Jaipur",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Palace Architecture", "Fine Dining", "Spa", "Pool", "WiFi"]
              },
              {
                name: "Samode Haveli",
                rating: 4.7,
                pricePerNight: "₹9,200",
                location: "Gangapole, Jaipur",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                amenities: ["Historic Courtyard", "Ayurvedic Spa", "Swimming Pool", "Rooftop Dining"]
              }
            ]
          },
          {
            id: "amber-fort",
            name: "Amber Fort & Palace",
            category: "Heritage",
            rating: 4.9,
            reviewsCount: 22000,
            bestTimeToVisit: "October to March (Late afternoon for light & sound show)",
            timings: "8:00 AM - 5:30 PM & 6:30 PM - 9:15 PM",
            entryFee: "₹100 (Indian), ₹500 (Foreign)",
            description: "Perched high on Cheel ka Teela (Hill of Eagles), Amber Fort is celebrated for its artistic Hindu elements, sprawling ramparts, and the spellbinding Sheesh Mahal (Mirror Palace) where candlelight reflects like a million stars.",
            images: [
              "https://images.unsplash.com/photo-1592635196078-9fe3d54f2377?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Trident Jaipur",
                rating: 4.8,
                pricePerNight: "₹11,000",
                location: "Jal Mahal, Amer Road",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Lake Views", "Luxury Spa", "Kids Club", "Fine Dining"]
              }
            ]
          }
        ]
      },
      {
        id: "udaipur",
        name: "Udaipur",
        description: "The City of Lakes and Venice of the East, famed for shimmering Lake Pichola, island palaces, and majestic romantic settings.",
        image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "city-palace-udaipur",
            name: "City Palace Complex",
            category: "Heritage",
            rating: 4.9,
            reviewsCount: 18500,
            bestTimeToVisit: "September to March",
            timings: "9:00 AM - 9:00 PM",
            entryFee: "₹300 (Adult), ₹100 (Child)",
            description: "A monumental complex built atop a ridge overlooking Lake Pichola. Begun in 1559 by Maharana Udai Singh II, it blends Rajasthani and Mughal architectural styles with panoramic views of the water palaces.",
            images: [
              "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Taj Lake Palace",
                rating: 5.0,
                pricePerNight: "₹38,000",
                location: "Lake Pichola, Udaipur",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                amenities: ["Island Location", "Private Butler", "Royal Jiva Spa", "Boat Transfer"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South",
    capital: "Thiruvananthapuram",
    tagline: "God's Own Country",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    description: "Kerala is a tropical paradise defined by tranquil emerald backwaters, misty rolling tea gardens in Munnar, pristine Arabian Sea beaches, and rejuvenating authentic Ayurvedic traditions.",
    bestTimeToVisit: "September to March",
    culture: "Kathakali dance, Kalaripayattu martial arts, Onam Sadya, Snake boat races",
    districts: [
      {
        id: "alappuzha",
        name: "Alappuzha (Alleppey)",
        description: "The hub of Kerala's backwaters, famed for serene houseboat cruises along palm-fringed lagoons and canals.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "alleppey-backwaters",
            name: "Alleppey Houseboat Backwaters",
            category: "Nature",
            rating: 4.9,
            reviewsCount: 16800,
            bestTimeToVisit: "November to February",
            timings: "Open 24 Hours (Houseboat check-in typically 12:00 PM)",
            entryFee: "Houseboat stays: ₹7,000 - ₹25,000/night",
            description: "Glide gently past paddy fields, rustic village hamlets, and swaying coconut palms aboard a traditional Kettuvallam (thatched houseboat) while savoring authentic Malabar pearl spot fish and Kerala curries.",
            images: [
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Kumarakom Lake Resort",
                rating: 4.9,
                pricePerNight: "₹16,000",
                location: "Vembanad Lake Shore",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
                amenities: ["Infinity Pool", "Ayurvedic Spa", "Houseboat Marina", "Lakefront Villas"]
              }
            ]
          }
        ]
      },
      {
        id: "idukki",
        name: "Idukki (Munnar)",
        description: "Perched at 1,600m in the Western Ghats, Munnar features endless rolling carpet-like tea estates, waterfalls, and cool mountain air.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "munnar-tea-estates",
            name: "Munnar Tea Plantations & Eravikulam",
            category: "Nature",
            rating: 4.8,
            reviewsCount: 12500,
            bestTimeToVisit: "September to April",
            timings: "7:00 AM - 6:00 PM",
            entryFee: "₹120 (National Park Entry)",
            description: "Vast emerald green tea slopes surrounded by mist, home to the endangered Nilgiri Tahr and the rare Neelakurinji flower which blooms once every twelve years.",
            images: [
              "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "The Panoramic Getaway",
                rating: 4.8,
                pricePerNight: "₹8,500",
                location: "Chithirapuram, Munnar",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                amenities: ["Mountain View Balconies", "Heated Pool", "Helipad", "Spa"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North",
    capital: "Lucknow",
    tagline: "The Spiritual & Cultural Soul of Bharat",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
    description: "Home to eternal holy rivers, timeless ancient cities, and timeless wonders like the Taj Mahal. Uttar Pradesh is a crucible of Indian civilization, philosophy, music, and Awadhi culinary elegance.",
    bestTimeToVisit: "October to March",
    culture: "Ganga Aarti, Kathak classical dance, Chikankari embroidery, Awadhi Biryani",
    districts: [
      {
        id: "agra",
        name: "Agra",
        description: "The imperial Mughal capital, home to the world's greatest monument to love and UNESCO fortresses.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "taj-mahal",
            name: "Taj Mahal",
            category: "Heritage",
            rating: 5.0,
            reviewsCount: 45000,
            bestTimeToVisit: "Sunrise & Full Moon nights (October to March)",
            timings: "Sunrise to Sunset (Closed Fridays)",
            entryFee: "₹50 (Indian), ₹1,100 (Foreign)",
            description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by the Mughal emperor Shah Jahan in memory of his favourite wife, Mumtaz Mahal. It is universally admired as a masterpiece of world heritage.",
            images: [
              "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "The Oberoi Amarvilas",
                rating: 5.0,
                pricePerNight: "₹32,000",
                location: "Taj East Gate Road, Agra",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                amenities: ["Every Room Taj View", "Terraced Gardens", "Butler Service", "Luxury Pool"]
              }
            ]
          }
        ]
      },
      {
        id: "varanasi",
        name: "Varanasi (Kashi)",
        description: "One of the oldest continually inhabited cities on Earth, the spiritual capital of India along the sacred river Ganga.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "dashashwamedh-ghat",
            name: "Dashashwamedh Ghat & Ganga Aarti",
            category: "Spiritual",
            rating: 4.9,
            reviewsCount: 29000,
            bestTimeToVisit: "Evening around 6:30 PM",
            timings: "Open 24 Hours (Aarti starts at twilight)",
            entryFee: "Free (Boat rides: ₹300 - ₹1,500)",
            description: "The vibrant epicentre of Varanasi where priests dressed in silk perform the choreographed Maha Aarti with massive tiered brass lamps, conch shells, and incense, echoing devotion over the river Ganga.",
            images: [
              "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "BrijRama Palace Heritage",
                rating: 4.9,
                pricePerNight: "₹19,000",
                location: "Darbhanga Ghat, Varanasi",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Ghatside Elevator", "Classical Music Recitals", "Pure Veg Gourmet", "Private Boat"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "North",
    capital: "Shimla",
    tagline: "Dev Bhoomi - Abode of Gods & Snow",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    description: "A dramatic Himalayan realm of snow-covered peaks, apple orchards, swift pine-fringed rivers, and adventure trails ranging from Solang Valley skiing to Spiti Valley moonscapes.",
    bestTimeToVisit: "March to June (Summer) & Dec to Feb (Snow)",
    culture: "Himachali caps, Nati folk dance, Siddu, trout fish, Tibetan Buddhism in Dharamshala",
    districts: [
      {
        id: "kullu-manali",
        name: "Kullu & Manali",
        description: "A high-altitude resort town on the Beas River, gateway for trekking, paragliding, skiing, and Rohtang Pass journeys.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "solang-valley",
            name: "Solang Valley & Atal Tunnel",
            category: "Adventure",
            rating: 4.8,
            reviewsCount: 21000,
            bestTimeToVisit: "December to February (Snow) or May to June",
            timings: "9:00 AM - 6:00 PM",
            entryFee: "Free (Activities ₹500 - ₹3,500)",
            description: "Surrounded by glaciers and snow-capped mountain peaks, Solang Valley offers exhilarating activities like paragliding, quad biking, zorbing, and winter snow skiing.",
            images: [
              "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Span Resort & Spa",
                rating: 4.8,
                pricePerNight: "₹12,500",
                location: "Baragran, Kullu Manali Highway",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                amenities: ["Riverfront Cottages", "Heated Pool", "Helipad", "Spa"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    region: "West",
    capital: "Panaji",
    tagline: "Sun, Sand, Spice & Portuguese Charm",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
    description: "Famous for its golden beaches, vibrant beach shacks, Portuguese colonial churches, spice plantations, and laid-back susegad lifestyle.",
    bestTimeToVisit: "November to February",
    culture: "Goan Carnival, Fado music, vindaloo, feni, Latin quarter architecture in Fontainhas",
    districts: [
      {
        id: "north-goa",
        name: "North Goa",
        description: "Known for lively beaches, water sports, historic forts like Aguada, flea markets, and buzzing cafes.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "vagator-beach",
            name: "Vagator Beach & Chapora Fort",
            category: "Beaches",
            rating: 4.7,
            reviewsCount: 19400,
            bestTimeToVisit: "November to March (Sunset hours)",
            timings: "Open 24 Hours (Fort: 9:30 AM - 5:30 PM)",
            entryFee: "Free",
            description: "Dramatic red laterite cliffs towering over soft white sands and the Arabian Sea, crowned by the historic Chapora Fort made famous by Bollywood films.",
            images: [
              "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "W Goa",
                rating: 4.9,
                pricePerNight: "₹22,000",
                location: "Vagator Beach, Goa",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Rock Pool", "Private Beach Access", "Spa", "Lounge"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    region: "North",
    capital: "Dehradun",
    tagline: "Simply Heaven - Land of Yoga & Peaks",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1600&q=80",
    description: "Nestled in the Himalayas, Uttarakhand boasts the Char Dham pilgrimage, the yoga capital Rishikesh on the turquoise Ganga, and Jim Corbett wildlife.",
    bestTimeToVisit: "March to June & September to November",
    culture: "Garhwali & Kumaoni folklore, yoga retreats, Bal Mithai, Ganga Aarti at Triveni Ghat",
    districts: [
      {
        id: "dehradun-rishikesh",
        name: "Dehradun & Rishikesh",
        description: "The world yoga hub surrounded by forested hills and the sacred holy Ganga river.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "rishikesh-river-rafting",
            name: "Rishikesh Ganga Rapids & Lakshman Jhula",
            category: "Adventure",
            rating: 4.9,
            reviewsCount: 31000,
            bestTimeToVisit: "September to June",
            timings: "Sunrise to Sunset",
            entryFee: "Rafting: ₹600 - ₹2,500",
            description: "Famous worldwide for white-water rafting on the emerald Ganga rapids, suspension bridges, Beatles Ashram, and serene ashram meditations.",
            images: [
              "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Ananda in the Himalayas",
                rating: 5.0,
                pricePerNight: "₹34,000",
                location: "Palace Estate, Narendra Nagar",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                amenities: ["World Class Wellness", "Ayurvedic Spa", "Yoga Pavilions", "Valley Views"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    region: "North",
    capital: "Leh",
    tagline: "The Roof of the World",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    description: "A high-altitude desert framed by dramatic stark mountains, crystal-clear sapphire lakes like Pangong Tso, Buddhist monasteries perched on cliffs, and high passes.",
    bestTimeToVisit: "May to September",
    culture: "Tibetan Buddhism, Hemis festival, Thangka paintings, Butter tea, Thukpa & Momos",
    districts: [
      {
        id: "leh",
        name: "Leh District",
        description: "The historical capital of Ladakh with ancient stupas, palace ruins, and thrilling motorcycling mountain passes.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "pangong-tso",
            name: "Pangong Tso Lake",
            category: "Nature",
            rating: 5.0,
            reviewsCount: 18200,
            bestTimeToVisit: "June to September",
            timings: "Open 24 Hours (Inner Line Permit Required)",
            entryFee: "ILP Environment fee: ₹400",
            description: "An endorheic lake at 4,225m altitude extending from India into Tibet. Renowned for its shifting shades of blue from turquoise to deep indigo throughout the day.",
            images: [
              "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "The Grand Dragon Ladakh",
                rating: 4.8,
                pricePerNight: "₹14,000",
                location: "Old Road Sheynam, Leh",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Oxygen-equipped Rooms", "Himalayan View Terrace", "Solar Heated", "Multi-cuisine"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    region: "South",
    capital: "Bengaluru",
    tagline: "One State, Many Worlds",
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1600&q=80",
    description: "From the boulder-strewn ruins of the Vijayanagara Empire in Hampi to the tech corridors of Bengaluru and the misty coffee hills of Coorg.",
    bestTimeToVisit: "October to March",
    culture: "Carnatic classical music, Yakshagana theatre, Mysore Silk, Bisi Bele Bath",
    districts: [
      {
        id: "vijayanagara-hampi",
        name: "Hampi (Vijayanagara)",
        description: "A UNESCO World Heritage marvel featuring monumental stone temples and monolithic sculptures among rugged granite boulders.",
        image: "https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1000&q=80",
        places: [
          {
            id: "stone-chariot-hampi",
            name: "Vittala Temple & Stone Chariot",
            category: "Heritage",
            rating: 4.9,
            reviewsCount: 17400,
            bestTimeToVisit: "November to February",
            timings: "8:30 AM - 5:30 PM",
            entryFee: "₹40 (Indian), ₹600 (Foreign)",
            description: "The iconic stone chariot shrine dedicated to Garuda stands in the courtyard of the 15th-century Vijayanagara temple, famous for its resonant musical pillars.",
            images: [
              "https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1200&q=80"
            ],
            hotels: [
              {
                name: "Evolve Back Kamalapura Palace",
                rating: 5.0,
                pricePerNight: "₹28,000",
                location: "Hampi, Karnataka",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                amenities: ["Palatial Stone Suites", "Private Plunge Pool", "Ayurvedic Spa", "History Walk Tours"]
              }
            ]
          }
        ]
      }
    ]
  }
];
