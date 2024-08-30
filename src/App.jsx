import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Register from './Register';
import Dashboardf from './Farmer dashboard/Dashboardf';
import Dashboardb from './Buyer Dashboard/Dashboardb';
import AdiminDashboard from './Main dashboard/Admin_Dashboard';

import AddProducts from './Pages/AddProducts';
import ViewProduct from './Pages/ViewProduct';





const App = () => {
  return (
    <div >
    
      <Routes>
        <Route path='login' element = {<Login/>}/>
        <Route path='register' element = {<Register/>}/>
        <Route path = 'dashboardf' element ={<Dashboardf/>}/>
        <Route path = 'dashboardb' element ={<Dashboardb/>}/>
        <Route path = 'AdminDashboard' element ={<AdiminDashboard/>}/>
        <Route path = '/farmer/add-product' element ={<AddProducts/>}/>
        <Route path = '/farmer/view-product' element ={<ViewProduct/>}/>
   
        
        
       
      </Routes>
      
    </div>
  )
}
               
export default App