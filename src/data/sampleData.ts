
export const sampleStores = [
  {
    id: '1',
    name: 'Dream Sleep Mattress Center',
    rating: 4.5,
    reviewCount: 89,
    address: '1234 Sunset Blvd, Los Angeles, CA 90028',
    phone: '(323) 555-0123',
    hours: 'Open until 9:00 PM',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    categories: ['Memory Foam', 'Luxury Mattresses', 'Adjustable Beds'],
    priceRange: '$$',
    featured: true
  },
  {
    id: '2',
    name: 'LA Mattress Warehouse',
    rating: 4.2,
    reviewCount: 156,
    address: '5678 Venice Blvd, Los Angeles, CA 90019',
    phone: '(323) 555-0456',
    hours: 'Open until 8:00 PM',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    categories: ['Budget Mattresses', 'Hybrid', 'Innerspring'],
    priceRange: '$'
  },
  {
    id: '3',
    name: 'Premium Sleep Solutions',
    rating: 4.8,
    reviewCount: 203,
    address: '9012 Wilshire Blvd, Beverly Hills, CA 90210',
    phone: '(310) 555-0789',
    hours: 'Open until 7:00 PM',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    categories: ['Organic', 'Luxury', 'Custom Made'],
    priceRange: '$$$'
  },
  {
    id: '4',
    name: 'Sleep City Downtown',
    rating: 4.1,
    reviewCount: 67,
    address: '3456 Spring St, Los Angeles, CA 90013',
    phone: '(213) 555-0321',
    hours: 'Open until 6:00 PM',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    categories: ['Memory Foam', 'Cooling', 'Firm Support'],
    priceRange: '$$'
  }
];

export const sampleArticles = [
  {
    id: '1',
    title: 'The Ultimate Guide to Choosing the Perfect Mattress',
    excerpt: 'Everything you need to know about finding the right mattress for your sleep style, body type, and budget.',
    author: 'Sarah Johnson',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    category: 'Buying Guide'
  },
  {
    id: '2',
    title: 'Memory Foam vs. Innerspring: Which is Right for You?',
    excerpt: 'A comprehensive comparison of the two most popular mattress types to help you make an informed decision.',
    author: 'Dr. Michael Chen',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
    category: 'Comparison'
  },
  {
    id: '3',
    title: '5 Signs It\'s Time to Replace Your Mattress',
    excerpt: 'Learn the telltale signs that indicate your mattress has reached the end of its lifespan.',
    author: 'Lisa Martinez',
    publishDate: '2024-01-05',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
    category: 'Tips'
  }
];

export const sampleReviews = [
  {
    id: '1',
    storeId: '1',
    userName: 'Jessica M.',
    rating: 5,
    date: '2024-01-20',
    title: 'Amazing service and quality!',
    content: 'I had the best experience at Dream Sleep. The staff was incredibly knowledgeable and helped me find the perfect mattress. The delivery was prompt and professional.',
    helpful: 12
  },
  {
    id: '2',
    storeId: '1',
    userName: 'Robert K.',
    rating: 4,
    date: '2024-01-18',
    title: 'Great selection, competitive prices',
    content: 'Wide variety of mattresses to choose from. Prices were competitive with other stores I visited. Only minor complaint is the showroom could be a bit cleaner.',
    helpful: 8
  },
  {
    id: '3',
    storeId: '1',
    userName: 'Maria L.',
    rating: 5,
    date: '2024-01-15',
    title: 'Excellent customer service',
    content: 'The team at Dream Sleep went above and beyond to ensure I was satisfied with my purchase. They even followed up a week later to make sure everything was perfect.',
    helpful: 15
  }
];
