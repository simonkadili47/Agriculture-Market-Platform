import React from 'react';
import leafy_image from '../assets/leafy Veggies.webp';
import maize_image from '../assets/maize.webp';

// Static data with imported images
const products = [
  {
    id: 1,
    name: ' Vegetables',
    selling_price: '1000@ TZs',
    image_url: leafy_image,
  },
  {
    id: 2,
    name: 'Maize',
    selling_price: '2000/kg TZs',
    image_url: maize_image,
  },
  {
    id: 3,
    name: 'Product 3',
    selling_price: '1500 TZs',
    image_url: leafy_image, 
  },
  {
    id: 4,
    name: 'Product 4',
    selling_price: '8000 TZs',
    image_url: maize_image,
  },
  {
    id: 5,
    name: 'Product 5',
    selling_price: '12000 TZs',
    image_url: leafy_image, 
  },
  {
    id: 6,
    name: 'Product 6',
    selling_price: '900 TZs',
    image_url: maize_image,
  },
];

const ProductsAvailable = () => {
  const handleOrder = (productId) => {
    // Handle order functionality here
    console.log('Ordering product with ID:', productId);
  };

  return (
    <div className="p-5 flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {products.map((product) => (
            <div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-102"
              key={product.id}
            >
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl  mb-2">Product Name: {product.name}</h3>
                <p className="text-gray-700 mb-4 text-lg">Selling Price: {product.selling_price}</p>
                <button
                  className="bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={() => handleOrder(product.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsAvailable;
