import React from 'react';
import leafy_image from '../assets/leafy Veggies.webp';
import maize_image from '../assets/maize.webp';

// Static data with imported images
const products = [
  {
    id: 1,
    name: 'Leafy Vegetables',
    price: '10 USD',
    image_url: leafy_image,
  },
  {
    id: 2,
    name: 'Maize',
    price: '5 USD',
    image_url: maize_image,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '15 USD',
    image_url: leafy_image, 
  },
  {
    id: 4,
    name: 'Product 4',
    price: '8 USD',
    image_url: maize_image,
  },
  {
    id: 5,
    name: 'Product 5',
    price: '12 USD',
    image_url: leafy_image, 
  },
  {
    id: 6,
    name: 'Product 6',
    price: '9 USD',
    image_url: maize_image,
  },
];

const ProductsAvailable = () => {
  const handleOrder = (productId) => {
    // Handle order functionality here
    console.log('Ordering product with ID:', productId);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {products.map((product) => (
            <div 
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-102"
              key={product.id}
            >
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4 text-lg">{product.price}</p>
                <button
                  className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
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
