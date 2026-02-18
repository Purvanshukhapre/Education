import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-8">😔</div>
        
        <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
        
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        
        <p className="text-text-secondary mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="flex items-center justify-center">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;