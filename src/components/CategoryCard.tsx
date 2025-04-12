import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
  price: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, price }) => (
  <div className="group relative">
    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{price}</p>
    </div>
  </div>
);

export default CategoryCard;