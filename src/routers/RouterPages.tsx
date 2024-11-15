import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/login/Login';
import Register from '../pages//register/Register';
import ProductDetail from '../pages/productdetail/ProductDetail';
import LoginAdmin from '../admin/adminpages/LoginAdmin/LoginAdmin';
import HomepageAdmin from '../admin/homepageAdmin/HomepageAdmin';
import SetMale from '../pages/SetMale/SetMale';
import SetFemale from '../pages/SetFemale/SetFemale';
import FemaleProduct from '../components/FemaleProduct/FemaleProduct';
import MaleProduct from '../components/MaleProduct/MaleProduct';
import UserAccount from '../pages/UserAccount/UserAccount';
import Cart from '../pages/Cart/Cart';




const RouterPages = () => {
  return (
    <>
     <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/ProductDetail" element={<ProductDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Homepage" element={<Homepage />} />
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    <Route path="/HomepageAdmin" element={<HomepageAdmin />} />
    <Route path="/SetMale" element={<SetMale />} />
    <Route path="/SetFemale" element={<SetFemale />} />
    <Route path="/FemaleProduct" element={<FemaleProduct />} />
    <Route path="/MaleProduct" element={<MaleProduct />} />
    <Route path="/UserAccount" element={<UserAccount />} />
    <Route path="/Cart" element={<Cart />} />
   
   
  </Routes>
    </>
   
  )
}

export default RouterPages