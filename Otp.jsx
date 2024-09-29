import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {
  const [otp, setOtp] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (otp.length === 6) {  
    
      axios.post('/api/verify-otp', { otp })
        .then(response => { 
          toast.success('OTP verified successfully!');
          navigate('/login'); // Navigate to login on successful OTP verification
        })
        .catch(error => {
          toast.error('Failed to verify OTP. Try again.');
        });

      toast.success('OTP submitted successfully!');

       
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ToastContainer />
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-md font-bold text-center text-gray-700">
          Please enter the OTP we sent to your email
        </h1>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="otp"
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
