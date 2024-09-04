import React from 'react'
import Theme from './Theme';

import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Register from './Register';
import Dashboardf from './Farmer Dashboard/FarmerDashboard';
import Dashboardb from './Buyer Dashboard/Dashboardb';
import AdiminDashboard from './Main dashboard/Admin_Dashboard';

import AddProducts from './Pages/AddProducts';
import ViewProduct from './Pages/ViewProduct';
import Orders from './Pages/Orders';
import CurrentTrends from './Pages/CurrentTrends';
import AddCategory from './Pages/AddCategory';
import ViewCategory from './Pages/ViewCategory';
import TodaysPayments from './Pages/TodaysPayments';
import PaymentsMethod from './Pages/PaymentsMethod';
import AddPaymentmethod from './Pages/AddPaymentmethod';




const App = () => {
  return (
    <div className="font-outfit" >
    
      <Routes>
        <Route path='login' element = {<Login/>}/>
        <Route path='register' element = {<Register/>}/>
        <Route path = '/Farmer-dashboard' element ={<Dashboardf/>}/>
        <Route path = 'dashboardb' element ={<Dashboardb/>}/>
        <Route path = 'AdminDashboard' element ={<AdiminDashboard/>}/>
        <Route path = '/farmer/add-product' element ={<AddProducts/>}/>
        <Route path = '/farmer/view-product' element ={<ViewProduct/>}/>
        <Route path = '/farmer/orders' element ={<Orders/>}/>
        <Route path = '/farmer/CurrentTrends' element ={<CurrentTrends/>}/>
        <Route path = '/farmer/add-category' element ={<AddCategory/>}/>
        <Route path = '/farmer/view-category' element ={<ViewCategory/>}/>
        <Route path = '/farmer/todays-payments' element ={<TodaysPayments/>}/>
        <Route path = '/farmer/payments-method' element ={<PaymentsMethod/>}/>
        <Route path = '/farmer/add-payment-method' element ={<AddPaymentmethod/>}/>
        
       
      </Routes>
      
    </div>
  )
}
               
export default App