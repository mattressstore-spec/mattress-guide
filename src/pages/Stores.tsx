
import React, { useState } from 'react';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { sampleStores } from '@/data/sampleData';
import { Search, Filter, MapPin } from 'lucide-react';

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredStores = sampleStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = priceFilter === 'all' || store.priceRange === priceFilter;
    return matchesSearch && matchesPrice;
  });

  const sortedStores = [...filteredStores].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mattress Stores in Los Angeles</h1>
          <p className="text-gray-600">Find the perfect place to buy your next mattress</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search stores or mattress types..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="$">$ (Budget)</SelectItem>
                <SelectItem value="$$">$$ (Mid-range)</SelectItem>
                <SelectItem value="$$$">$$$ (Premium)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {sortedStores.length} of {sampleStores.length} stores
          </p>
          <Button variant="outline" className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>View Map</span>
          </Button>
        </div>

        {/* Store List */}
        <div className="space-y-6">
          {sortedStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {sortedStores.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No stores found matching your criteria</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setPriceFilter('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stores;
