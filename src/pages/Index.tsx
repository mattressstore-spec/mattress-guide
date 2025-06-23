
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import StoreCard from '@/components/StoreCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sampleStores, sampleArticles } from '@/data/sampleData';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Index = () => {
  const featuredStores = sampleStores.filter(store => store.featured);
  const topStores = sampleStores.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find the Perfect Mattress Store in LA
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover top-rated mattress stores, read genuine reviews, and make informed decisions for better sleep.
            </p>
          </div>
          
          <SearchBar />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Reviews</h3>
              <p className="opacity-90">Real reviews from real customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local Experts</h3>
              <p className="opacity-90">Connect with LA's best mattress stores</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="opacity-90">Find stores with proven track records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Mattress Stores</h2>
            <Link to="/stores">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>View All Stores</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Rated Stores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topStores.map((store) => (
              <Card key={store.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(store.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({store.reviewCount})</span>
                    </div>
                    <span className="text-green-600 font-medium">{store.priceRange}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{store.address}</p>
                  <Link to={`/stores/${store.id}`}>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Sleep Tips & Guides</h2>
            <Link to="/blog">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Read More Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LA Mattress</h3>
              <p className="text-gray-400">Your trusted guide to finding the perfect mattress store in Los Angeles.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Discover</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/stores" className="hover:text-white">Browse Stores</Link></li>
                <li><Link to="/blog" className="hover:text-white">Sleep Tips</Link></li>
                <li><a href="#" className="hover:text-white">Write a Review</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">Follow us for the latest mattress deals and sleep tips.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LA Mattress Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
