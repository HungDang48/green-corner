import React from 'react';
import './styleheader.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegisterClick = () => {
    navigate('/Register');
  };
  const handleProductDetailClick = () => {
    navigate('/ProductDetail');
  };
  const handleHomePageClick = () => {
    navigate('/Homepage');
  };
  const handleLoginAdminClick = () => {
    navigate('/LoginAdmin');
  };
  const handleHomeAdminClick = () => {
    navigate('/HomepageAdmin');
  };
  const handleSetMaleClick = () => {
    navigate('/SetMale');
  };
  const handleSetFemaleClick = () => {
    navigate('/setFemale');
  };

  return (
    <div>
      <div className="container-header">
      <div className="top-bar">
        <div>
          <a href="#">84RISING*</a>
          <a href="#">COOLXPRINT</a>
        </div>
        <div>
        <a href="#" onClick={handleHomeAdminClick}>TRANG ADMIN</a>
          <a href="#">Blog</a>
          <a href="#">Về Shopping Well</a>
          <a href="#">Trung tâm CSKH</a>
          <a href="#" onClick={handleLoginClick}>Đăng nhập</a>
          <a href="#" onClick={handleRegisterClick}>Đăng kí</a>
        </div>
      </div>
      <div className="main-nav">
        <div className="logo">
          Shopping<br />Well
        </div>
        <div className="menu">
        <a href="#" onClick={handleHomePageClick}>TRANG CHỦ</a>
          <a href="#" onClick={handleProductDetailClick}>DETAIL</a>
          <a href="#" onClick={handleSetMaleClick}>SET NAM</a>
          <a href="#" onClick={handleSetFemaleClick}>SET NỮ</a>
        </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
         
          <span className="icon">0</span>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Header;
