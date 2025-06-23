
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StarRating from './StarRating';

interface Store {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  hours: string;
  image: string;
  categories: string[];
  priceRange: string;
  featured?: boolean;
}

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div className="mb-2 sm:mb-0">
                <Link
                  to={`/stores/${store.id}`}
                  className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors"
                >
                  {store.name}
                </Link>
                {store.featured && (
                  <Badge className="ml-2 bg-orange-100 text-orange-800">
                    Featured
                  </Badge>
                )}
              </div>
              <span className="text-green-600 font-medium">{store.priceRange}</span>
            </div>
            
            <StarRating 
              rating={store.rating} 
              reviewCount={store.reviewCount}
              size="sm"
            />
            
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                <span className="break-words">{store.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>{store.phone}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>{store.hours}</span>
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-1">
              {store.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreCard;
