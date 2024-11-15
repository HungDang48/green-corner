import React, { useEffect, useState } from 'react';
import './styleheader.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const userInLocal = localStorage.getItem('user') || ""
    if (!userInLocal) return false;
    return true
  });

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
  const handleMaleClick = () => {
    navigate('/MaleProduct');
  };
  const handleFemaleClick = () => {
    navigate('/FemaleProduct');
  };

  const handleUserAccountClick = () => {
    navigate('/UserAccount');
  };
  
  const handleCartClick = () => {
    navigate('/Cart');
  };

  const handleLogoutClick = () => {
    // Đặt lại trạng thái đăng nhập khi người dùng đăng xuất
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false); // Cập nhật lại trạng thái đăng nhập
    navigate('/Homepage');
  };

  const handleLoginSuccess = () => {
    // Cập nhật trạng thái đăng nhập và localStorage khi đăng nhập thành công
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
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
          </div>
        </div>
        <div className="main-nav">
          <div className="logo" onClick={handleHomePageClick}>
            Shopping<br />Well
          </div>
          <div className="menu">
            <a href="#" onClick={handleHomePageClick}>TRANG CHỦ</a>
            <a href="#" onClick={handleProductDetailClick}>DETAIL</a>
            <a href="#" onClick={handleMaleClick}>NAM</a>
            <a href="#" onClick={handleFemaleClick}>NỮ</a>
          </div>
          <div className="search">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <div className="search-icons">
              {isLoggedIn ? (
                <>
                  <span className="icon cart-icon" onClick={handleCartClick}>🛒</span>
                  <span className="icon user-icon">👤
                    <div className="user-menu">
                    <a href="#" onClick={handleUserAccountClick}>thông tin cá nhân</a>
                      <a href="#">Đơn hàng</a>
                      <a href="#" onClick={handleLogoutClick}>Đăng xuất</a>
                    </div>
                  </span>
                </>
              ) : (
                <div className="auth-links">
                  <a href="#" onClick={handleLoginClick}>Đăng nhập</a>
                  <a href="#" onClick={handleRegisterClick}>Đăng kí</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
