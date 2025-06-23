
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  reviewCount?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  showNumber = true,
  reviewCount 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            className={`${sizeClasses[size]} ${
              index < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : index < rating
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className={`${textSizeClasses[size]} font-medium text-gray-700`}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount && (
        <span className={`${textSizeClasses[size]} text-gray-500`}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
};

export default StarRating;
