
export const sampleStores = [
  {
    id: '1',
    name: 'Smile Bright Dental Care',
    rating: 4.5,
    reviewCount: 89,
    address: '1234 Sunset Blvd, Los Angeles, CA 90028',
    phone: '(323) 555-0123',
    hours: 'Open until 6:00 PM',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
    categories: ['General Dentistry', 'Cosmetic Dentistry', 'Teeth Whitening'],
    priceRange: '$$',
    featured: true
  },
  {
    id: '2',
    name: 'LA Family Dentistry',
    rating: 4.2,
    reviewCount: 156,
    address: '5678 Venice Blvd, Los Angeles, CA 90019',
    phone: '(323) 555-0456',
    hours: 'Open until 7:00 PM',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=400&h=300&fit=crop',
    categories: ['Family Dentistry', 'Pediatric Care', 'Preventive Care'],
    priceRange: '$'
  },
  {
    id: '3',
    name: 'Beverly Hills Dental Studio',
    rating: 4.8,
    reviewCount: 203,
    address: '9012 Wilshire Blvd, Beverly Hills, CA 90210',
    phone: '(310) 555-0789',
    hours: 'Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
    categories: ['Cosmetic Dentistry', 'Veneers', 'Implants'],
    priceRange: '$$$'
  },
  {
    id: '4',
    name: 'Downtown Dental Center',
    rating: 4.1,
    reviewCount: 67,
    address: '3456 Spring St, Los Angeles, CA 90013',
    phone: '(213) 555-0321',
    hours: 'Open until 8:00 PM',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
    categories: ['Emergency Dentistry', 'Root Canal', 'Oral Surgery'],
    priceRange: '$$'
  }
];

export const sampleArticles = [
  {
    id: '1',
    title: 'The Complete Guide to Choosing the Right Dentist',
    excerpt: 'Everything you need to know about finding the perfect dental care provider for your oral health needs.',
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    category: 'Dental Care'
  },
  {
    id: '2',
    title: 'Preventive Care vs. Cosmetic Dentistry: What You Need to Know',
    excerpt: 'A comprehensive comparison of preventive and cosmetic dental treatments to help you make informed decisions.',
    author: 'Dr. Michael Chen',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
    category: 'Treatment Options'
  },
  {
    id: '3',
    title: '5 Signs You Need to See a Dentist Immediately',
    excerpt: 'Learn the warning signs that indicate you should schedule an urgent dental appointment.',
    author: 'Dr. Lisa Martinez',
    publishDate: '2024-01-05',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    category: 'Oral Health'
  }
];

export const sampleReviews = [
  {
    id: '1',
    storeId: '1',
    userName: 'Jessica M.',
    rating: 5,
    date: '2024-01-20',
    title: 'Outstanding dental care!',
    content: 'Dr. Smith and his team provided exceptional service. The office is modern and clean, and they made me feel comfortable throughout my visit. Highly recommend!',
    helpful: 12
  },
  {
    id: '2',
    storeId: '1',
    userName: 'Robert K.',
    rating: 4,
    date: '2024-01-18',
    title: 'Professional and thorough',
    content: 'Great dental practice with skilled dentists. The cleaning was thorough and they explained everything clearly. Only minor complaint is the wait time.',
    helpful: 8
  },
  {
    id: '3',
    storeId: '1',
    userName: 'Maria L.',
    rating: 5,
    date: '2024-01-15',
    title: 'Best dentist in LA!',
    content: 'I was nervous about my procedure, but the staff was so caring and professional. They followed up after my visit to make sure I was doing well.',
    helpful: 15
  }
];
