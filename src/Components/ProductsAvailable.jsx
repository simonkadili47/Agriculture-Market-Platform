import React, { useState } from 'react';
import leafy_image from '../assets/leafy Veggies.webp';
import maize_image from '../assets/maize.webp';

// Static data with imported images
const products = [
  {
    id: 1,
    name: 'Vegetables',
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
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handlePlaceOrder = () => {
    if (selectedProduct) {
      // Here you can handle the order submission logic (send to backend, etc.)
      console.log('Placing order for:', selectedProduct.name);
      console.log('Quantity:', quantity);
      console.log('Payment Method:', paymentMethod);
      
      // Close the modal and reset the form
      setShowModal(false);
      setQuantity(1);  
      setPaymentMethod('');  
    }
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
                <h3 className="text-xl mb-2">Product Name: {product.name}</h3>
                <p className="text-gray-700 mb-4 text-lg">Selling Price: {product.selling_price}</p>
                <button
                  className="bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={() => handleOrderClick(product)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Order Form */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
            <p><strong>Product Name:</strong> {selectedProduct.name}</p>
            <p><strong>Selling Price:</strong> {selectedProduct.selling_price}</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <input 
                type="text" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <select 
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Payment Method</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded ml-2 hover:bg-red-600"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsAvailable;
