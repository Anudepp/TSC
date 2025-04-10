
const Collection = () => {
  const sarees = [
    {
      id: 1,
      name: "Traditional Silk Saree",
      price: "₹2500",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQV3VxzJ1Cz4hpy-CzKVdtM3W5XDN8KjGEurhEGGfk4UW6H95Iyo2zPORMee-5-BjvG7KStUVzkKKE0mlL4CiXqHcnV7oxHYX9N0XOR_TDasqb06OlFMDFr&usqp=CAc",
      description: "Handwoven pure silk saree with traditional motifs"
    },
    {
      id: 2,
      name: "Designer Wedding Saree",
      price: "₹4500",
      image: "https://lajreedesigner.com/cdn/shop/products/KP-3018_2_400x600_crop_center.jpg?v=1660711538",
      description: "Luxurious bridal saree with intricate embroidery"
    },
    {
      id: 3,
      name: "Contemporary Fusion Saree",
      price: "₹3500",
      image: "https://lajreedesigner.com/cdn/shop/files/ShrijiAvadh-SC-220-Yellow_2_400x600_crop_center.jpg?v=1711435262",
      description: "Modern design with traditional elements"
    },
    {
      id: 4,
      name: "Casual Cotton Saree",
      price: "₹5000",
      image: "https://lajreedesigner.com/cdn/shop/products/MurtiNx-156-Firozi_2080add6-fbac-41a5-b0ac-fa766301214a_400x600_crop_center.jpg?v=1673262225",
      description: "Comfortable daily wear cotton saree"
    },
    {
      id: 5,
      name: "Party Wear Saree",
      price: "₹4490",
      image: "https://lajreedesigner.com/cdn/shop/files/ShrijiAvadh-SC-249-Pink_2_400x600_crop_center.jpg?v=1714046637",
      description: "Elegant party wear with modern design"
    },
    {
      id: 6,
      name: "Festival Collection",
      price: "₹3490",
      image: "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-591Orgenza-DarkPink_1_400x600_crop_center.jpg?v=1708329331",
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
