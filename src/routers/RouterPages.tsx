import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ProductDetail from '../pages/productdetail/ProductDetail';
import LoginAdmin from '../admin/adminpages/LoginAdmin/LoginAdmin';
import HomepageAdmin from '../admin/homepageAdmin/HomepageAdmin';
import SetMale from '../pages/SetMale/SetMale';
import SetFemale from '../pages/SetFemale/SetFemale';
import FemaleProduct from '../components/FemaleProduct/FemaleProduct';
import MaleProduct from '../components/MaleProduct/MaleProduct';
import UserAccountAdmin from '../admin/adminpages/UserAccount/UserAccountAdmin';
import ProductAdmin from '../admin/adminpages/ProductAdmin/ProductAdmin';
import UserAccount from '../pages/UserAccount/UserAccount';
import Cart from '../pages/Cart/Cart';
import NewProduct from '../components/NewProduct/NewProduct';

const RouterPages = () => {
  return (
    <Routes>
      {/* Định nghĩa các tuyến đường */}
      <Route path="/" element={<Homepage />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/homepageadmin" element={<HomepageAdmin />} />
      <Route path="/useraccount" element={<UserAccount />} />
      <Route path="/productadmin" element={<ProductAdmin />} />
      <Route path="/setmale" element={<SetMale />} />
      <Route path="/setfemale" element={<SetFemale />} />
      <Route path="/femaleproduct" element={<FemaleProduct />} />
      <Route path="/maleproduct" element={<MaleProduct />} />
      <Route path="/useraccountadmin" element={<UserAccountAdmin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/newproduct" element={<NewProduct />} /> {/* Thay vì `/`, đặt tên cụ thể */}
    </Routes>
  );
};

export default RouterPages;
