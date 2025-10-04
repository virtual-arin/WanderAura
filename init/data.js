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
];

module.exports = { data: sampleListings };
