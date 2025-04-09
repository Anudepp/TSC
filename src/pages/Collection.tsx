import React from 'react';

const Collection = () => {
  const sarees = [
    {
      id: 1,
      name: "Traditional Silk Saree",
      price: "$299",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      description: "Handwoven pure silk saree with traditional motifs"
    },
    {
      id: 2,
      name: "Designer Wedding Saree",
      price: "$599",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800",
      description: "Luxurious bridal saree with intricate embroidery"
    },
    {
      id: 3,
      name: "Contemporary Fusion Saree",
      price: "$399",
      image: "https://images.unsplash.com/photo-1615886753866-79396abc5c44?auto=format&fit=crop&q=80&w=800",
      description: "Modern design with traditional elements"
    },
    {
      id: 4,
      name: "Casual Cotton Saree",
      price: "$199",
      image: "https://images.unsplash.com/photo-1583391733956-6c77a55a5d9e?auto=format&fit=crop&q=80&w=800",
      description: "Comfortable daily wear cotton saree"
    },
    {
      id: 5,
      name: "Party Wear Saree",
      price: "$449",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      description: "Elegant party wear with modern design"
    },
    {
      id: 6,
      name: "Festival Collection",
      price: "$349",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800",
      description: "Vibrant festive wear saree"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Our Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sarees.map((saree) => (
          <div key={saree.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={saree.image}
                alt={saree.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{saree.name}</h3>
                <p className="text-sm mb-2">{saree.description}</p>
                <p className="text-lg font-bold">{saree.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;