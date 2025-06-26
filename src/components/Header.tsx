
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/0ddf429d-234c-469f-943a-6843a3e905e6.png" 
                alt="LA Mattress Store Reviews"
                className="h-32 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === '/' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/stores" 
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === '/stores' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Stores
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === '/blog' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Write a Review
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
