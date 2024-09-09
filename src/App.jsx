import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import Login from './Login';
import Register from './Register';

// Farmer Dashboard and Pages
import Dashboardf from './Farmer Dashboard/FarmerDashboard';
import AddProducts from './Pages/AddProducts';
import ViewProduct from './Pages/ViewProduct';
import Orders from './Pages/Orders';
import CurrentTrends from './Pages/CurrentTrends';
import AddCategory from './Pages/AddCategory';
import ViewCategory from './Pages/ViewCategory';
import TodaysPayments from './Pages/TodaysPayments';
import PaymentsMethod from './Pages/PaymentsMethod';
import AddPaymentmethod from './Pages/AddPaymentmethod';
import PendingPayments from './Pages/PendingPayments';

// Buyer Dashboard and Pages
import Dashboardb from './Buyer Dashboard/BuyerDashboard';
import AvailableProducts from './Pages/AvailableProducts';
import CurrentOrders from './Pages/CurrentOrders';
import BuyerPayment from './Pages/BuyerPayment';
import BuyerPaidPayment from './Pages/BuyersPaidPayment';

// Admin Dashboard
import AdiminDashboard from './Main dashboard/Admin_Dashboard';

const App = () => {
  return (
    <div className="font-outfit">
      <Routes>
        {/* Redirect to Login by default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Authentication Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Farmer Dashboard and Routes */}
        <Route path="/Farmer-Dashboard" element={<Dashboardf />} />
        <Route path="/farmer/add-product" element={<AddProducts />} />
        <Route path="/farmer/view-product" element={<ViewProduct />} />
        <Route path="/farmer/orders" element={<Orders />} />
        <Route path="/farmer/CurrentTrends" element={<CurrentTrends />} />
        <Route path="/farmer/add-category" element={<AddCategory />} />
        <Route path="/farmer/view-category" element={<ViewCategory />} />
        <Route path="/farmer/todays-payments" element={<TodaysPayments />} />
        <Route path="/farmer/payments-method" element={<PaymentsMethod />} />
        <Route path="/farmer/add-payment-method" element={<AddPaymentmethod />} />
        <Route path="/farmer/pending-payments" element={<PendingPayments />} />

        {/* Buyer Dashboard and Routes */}
        <Route path="/Buyer-Dashboard" element={<Dashboardb />} />
        <Route path="/buyer/available-products" element={<AvailableProducts />} />
        <Route path="/buyer/current-orders" element={<CurrentOrders />} />
        <Route path="/buyer/payments-method" element={<BuyerPayment/>} />
        <Route path="/buyer/paid-payments" element={<BuyerPaidPayment/>} />

        {/* Admin Dashboard Route */}
        <Route path="/AdminDashboard" element={<AdiminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
