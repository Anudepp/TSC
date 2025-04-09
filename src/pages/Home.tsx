import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      title: "Pure Pattu Sarees",
      image: "/featured/pattusaree.jpg",
      price: "Starting from ₹5999"
    },
    {
      title: "Designer Tops",
      image: "/featured/tops.jpg",
      price: "Starting from ₹999"
    },
    {
      title: "Traditional Ornaments",
      image: "/featured/ornaments.jpg",
      price: "Starting from ₹1999"
    },
    {
      title: "Sarees",
      image: "/featured/sarees.jpg",
      price: "Starting from ₹599"
    }
  ];

  return (
    
    <div>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://i.pinimg.com/236x/a1/b4/83/a1b4831ff5b4c21e40a00f96ac021cb3.jpg"
          alt="Tripura Saree Collections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">
              Tripura Saree Collections
            </h1>
            <p className="text-2xl mb-2">Fashion Never Ends</p>
            <p className="text-xl mb-8">
              Discover our exclusive collection of Sarees, Tops, Ornaments, and more
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USP Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked collection of finest fabrics and materials</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Traditional & Modern</h3>
              <p className="text-gray-600">Perfect blend of traditional craftsmanship with modern designs</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Dedicated to providing the best shopping experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;