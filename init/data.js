const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Glamping Dome in the Rockies",
    description: "Experience luxury camping in a geodesic dome with panoramic views of the Rocky Mountains.",
    image: "https://images.unsplash.com/photo-1580577482330-9669f9edca27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Floating Cabin on the Lake",
    description: "Enjoy a peaceful retreat on a floating cabin with direct access to the lake and beautiful sunset views.",
    image: "https://images.unsplash.com/photo-1604773253044-4472d9ab44f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1350,
    location: "Lake Powell",
    country: "United States",
  },
  {
    title: "Traditional Ryokan Experience",
    description: "Immerse yourself in Japanese culture at this authentic Ryokan with tatami floors and onsen baths.",
    image: "https://images.unsplash.com/photo-1571731956672-f8fbd54dbd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Sleep above the turquoise waters in a luxurious overwater bungalow with direct lagoon access.",
    image: "https://images.unsplash.com/photo-1570077013993-1fbb30c2b5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Cave House in Cappadocia",
    description: "Stay inside a natural cave carved into the mountainside, surrounded by magical fairy chimneys.",
    image: "https://images.unsplash.com/photo-1566837945700-eccfdf0888c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Göreme",
    country: "Turkey",
  },
  {
    title: "Windmill Cottage in the Countryside",
    description: "Relax in a converted historic windmill surrounded by lush countryside and wildflowers.",
    image: "https://images.unsplash.com/photo-1602524811843-0e8a2fd52fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Norfolk",
    country: "United Kingdom",
  },
  {
    title: "Igloo Stay Under the Northern Lights",
    description: "Watch the aurora dance above you from a glass igloo in the snowy Arctic wilderness.",
    image: "https://images.unsplash.com/photo-1579892124544-4b9df30f985d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Bohemian Desert Camp",
    description: "Live the nomad life in this stylish desert camp with Berber rugs and stargazing galore.",
    image: "https://images.unsplash.com/photo-1611860489339-f589c3ee684e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Modern House on Icelandic Cliffs",
    description: "Wake up to stunning sea cliffs and volcanic landscapes in a minimalist Nordic home.",
    image: "https://images.unsplash.com/photo-1580741492370-fb5c4fd92c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Vík í Mýrdal",
    country: "Iceland",
  },
  {
    title: "Jungle Treehouse in Amazon",
    description: "Get off the grid and stay in a sustainable treehouse deep in the Amazon Rainforest.",
    image: "https://images.unsplash.com/photo-1533839561126-8e4466a7b8f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Iquitos",
    country: "Peru",
  },
];

module.exports = { data: sampleListings };
