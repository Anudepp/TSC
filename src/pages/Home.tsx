import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import USPCard from '../components/USPCard';

interface Category {
  title: string;
  image: string;
  price: string;
}

interface USP {
  title: string;
  description: string;
}

const categories: Category[] = [
  { title: "Pure Pattu Sarees", image: "/featured/pattusaree.jpg", price: "Starting from ₹5999" },
  { title: "Designer Tops", image: "/featured/tops.jpg", price: "Starting from ₹999" },
  { title: "Traditional Ornaments", image: "/featured/ornaments.jpg", price: "Starting from ₹1999" },
  { title: "Sarees", image: "/featured/sarees.jpg", price: "Starting from ₹599" },
];

const uspData: USP[] = [
  { title: "Premium Quality", description: "Handpicked collection of finest fabrics and materials" },
  { title: "Traditional & Modern", description: "Perfect blend of traditional craftsmanship with modern designs" },
  { title: "Customer Satisfaction", description: "Dedicated to providing the best shopping experience" },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="/featured/backgroung.jpg"
          alt="Tripura Saree Collections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Tripura Saree Collections</h1>
            <p className="text-2xl mb-2">Fashion Never Ends</p>
            <p className="text-xl mb-8">
              Discover our exclusive collection of Sarees, Tops, Ornaments, and more
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
            >
              Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => <CategoryCard key={i} {...cat} />)}
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uspData.map((usp, i) => <USPCard key={i} {...usp} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;