
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Los Angeles, CA');

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="dentists, orthodontists, oral surgeons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base sm:text-lg"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Los Angeles, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 text-base sm:text-lg"
              />
            </div>
          </div>
        </div>
        <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-base sm:text-lg font-medium w-full sm:w-auto sm:self-start">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
