
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import StarRating from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { sampleStores, sampleReviews } from '@/data/sampleData';
import { MapPin, Phone, Clock, Globe, ThumbsUp, Calendar } from 'lucide-react';

const StoreDetail = () => {
  const { id } = useParams();
  const store = sampleStores.find(s => s.id === id);
  const reviews = sampleReviews.filter(r => r.storeId === id);

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Store not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Store Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{store.name}</h1>
                  {store.featured && (
                    <Badge className="bg-orange-100 text-orange-800 mb-4">
                      Featured Store
                    </Badge>
                  )}
                </div>
                <span className="text-2xl font-bold text-green-600">{store.priceRange}</span>
              </div>
              
              <StarRating 
                rating={store.rating} 
                reviewCount={store.reviewCount}
                size="lg"
              />
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  {store.address}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  {store.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  {store.hours}
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {store.categories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  Call Now
                </Button>
                <Button variant="outline">
                  Get Directions
                </Button>
                <Button variant="outline">
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Customer Reviews</CardTitle>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Write a Review
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">{review.userName}</span>
                            <StarRating rating={review.rating} showNumber={false} size="sm" />
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">{review.title}</h4>
                      <p className="text-gray-600 mb-3">{review.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-gray-700">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                      </div>
                      <Separator className="mt-6" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{store.rating}/5</div>
                    <div className="text-sm text-gray-500">Average Rating</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{store.reviewCount}</div>
                    <div className="text-sm text-gray-500">Total Reviews</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-500">Years in Business</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
