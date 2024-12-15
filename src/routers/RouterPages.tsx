import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
 
import LoginAdmin from '../admin/adminpages/LoginAdmin/LoginAdmin';
import HomepageAdmin from '../admin/homepageAdmin/HomepageAdmin';
 
 
 
 
import UserAccount from '../pages/UserAccount/UserAccount';
 
 
 
 
import AdminAccount from '../admin/adminpages/AdminAccount/AdminAccount';
import EditUserAccount from '../pages/editUserAccount/EditUserAccount';
 
 
const RouterPages = () => {
  return (
    <Routes>
      {/* Định nghĩa các tuyến đường */}
      <Route path="/" element={<Homepage />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/LoginAdmin" element={<LoginAdmin />} />
      <Route path="/HomepageAdmin" element={<HomepageAdmin />} />
      <Route path="/useraccount" element={<UserAccount />} />
     
      <Route path="/AdminAccount" element={<AdminAccount />} />
      <Route path="/EditUserAccount" element={<EditUserAccount />} />
       
      
   

    </Routes>
  );
};

export default RouterPages;
