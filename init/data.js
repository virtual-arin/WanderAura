const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities",
  },
  {
    title: "Mountain Chalet",
    description:
      "Enjoy breathtaking mountain views from this cozy chalet. Ideal for hiking and skiing enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Castle",
    description:
      "Live like royalty in this historic castle. A truly unique and unforgettable experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Luxury Villa with a Pool",
    description:
      "Indulge in luxury at this stunning villa with a private pool. Perfect for a lavish vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625249334398-042d76f5b1b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Santorini",
    country: "Greece",
    category: "Amazing Pools",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A perfect escape from the hustle and bustle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Trending",
  },
  {
    title: "Quaint Farmhouse",
    description:
      "Experience country living in this charming farmhouse. Enjoy fresh air and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Arctic Igloo",
    description:
      "Sleep under the Northern Lights in a real igloo. An adventure of a lifetime.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
  },
  {
    title: "Luxury Yacht",
    description:
      "Sail the seas in this luxurious yacht. A perfect blend of adventure and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573843981267-be199c65d874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Caribbean Sea",
    country: "Various",
    category: "Boats",
  },
  {
    title: "Houseboat on the Canal",
    description:
      "Experience Amsterdam from a unique perspective on this cozy houseboat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Boats",
  },
  {
    title: "Private Room in a Shared Apartment",
    description:
      "A comfortable and affordable private room in a centrally located shared apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499796571259-0da29a4dc345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 500,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
  },
  {
    title: "Campsite by the Lake",
    description:
      "Enjoy the great outdoors at this beautiful campsite by the lake. Tent and gear not included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476041941994-51b742164484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 200,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Charming Parisian Apartment",
    description:
      "Live like a local in this beautiful apartment in the heart of Paris. Close to all major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Paris",
    country: "France",
    category: "Iconic cities",
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "A traditional Swiss chalet with modern amenities, offering stunning views of the Alps. Perfect for a winter getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585672358943-cbf6a642d234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3dpc3MlMjBhbHBzJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Grindelwald",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Bali Infinity Pool Villa",
    description:
      "A luxurious villa in Bali with a private infinity pool overlooking the jungle. A serene and tranquil retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsaSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "Amazing Pools",
  },
  {
    title: "Irish Castle Stay",
    description:
      "Experience history with a stay in a beautifully restored Irish castle. Feel like royalty for a night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573352489539-424c71933559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJpc2glMjBjYXN0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "County Galway",
    country: "Ireland",
    category: "Castles",
  },
  {
    title: "Modern Room in Tokyo",
    description:
      "A sleek and modern room in a convenient location in Tokyo. Perfect for solo travelers or couples.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590215068486-3d383b7a8a13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW8lMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Shibuya, Tokyo",
    country: "Japan",
    category: "Rooms",
  },
  {
    title: "Desert Glamping",
    description:
      "A unique glamping experience in the desert. Enjoy starry nights and beautiful sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533874643333-1a53361c7873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwZ2xhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Wadi Rum",
    country: "Jordan",
    category: "Camping",
  },
  {
    title: "Vineyard Cottage in Bordeaux",
    description:
      "Stay at a charming cottage in a Bordeaux vineyard. Enjoy wine tasting and beautiful countryside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598546310249-4a1a72a147a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmluZXlhcmQlMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Bordeaux",
    country: "France",
    category: "Farms",
  },
  {
    title: "Glass Cabin in Norway",
    description:
      "Watch the Northern Lights from the comfort of your bed in this stunning glass cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhlcm4lMjBsaWdodHMlMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
  },
  {
    title: "Overwater Bungalow in Maldives",
    description:
      "A luxurious overwater bungalow with direct access to the turquoise lagoon. A dream vacation spot.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1515404929236-700424e39e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBidW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Maldives",
    country: "Maldives",
    category: "Boats",
  },
  {
    title: "Forest Dome House",
    description:
      "A unique and cozy dome house nestled in the forest. Connect with nature in this magical retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586222583942-a4354f743525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Catskills",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Historic Roman Apartment",
    description:
      "Stay in a charming apartment in a historic building in Rome, just steps from the Colosseum.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Rome",
    country: "Italy",
    category: "Iconic cities",
  },
  {
    title: "Ski-In/Ski-Out Whistler Condo",
    description:
      "The perfect spot for ski lovers. A cozy condo with direct access to the slopes of Whistler.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549623199-2c641a20a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpJTIwY29uZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Whistler",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Mykonos Villa with Rooftop Pool",
    description:
      "Enjoy the stunning sunsets of Mykonos from the rooftop pool of this beautiful villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1594393196321-0f8bac343633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXlrb25vcyUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
  },
  {
    title: "A-Frame Cabin by the River",
    description:
      "A rustic A-frame cabin perfect for a peaceful retreat by the river. Great for fishing and hiking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559445368-b8a993676d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YS1mcmFtZSUyMGNhYmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Oregon",
    country: "United States",
    category: "Trending",
  },
];

module.exports = { data: sampleListings };
