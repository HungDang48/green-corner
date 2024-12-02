import React, { useEffect, useState } from 'react';
import './styleheader.css';
import { useNavigate } from 'react-router-dom';
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
}

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const userInLocal = localStorage.getItem('user') || '';
    return userInLocal ? true : false;
  });

  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    // Lấy giỏ hàng từ localStorage
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const totalQuantity = cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
    setCartItemCount(totalQuantity);
  }, []);

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
    if (isLoggedIn) {
      // Nếu đã đăng nhập, cho phép vào trang Admin
      navigate('/HomepageAdmin');
    } else {
      // Nếu chưa đăng nhập, điều hướng đến trang đăng nhập Admin
      navigate('/LoginAdmin');
    }
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
  const handleOrderStatusClick = () => {
    navigate('/OrderStatus');
  };

  const handleLogoutClick = () => {
    // Xóa thông tin tài khoản khỏi localStorage
    localStorage.removeItem('user'); // Xóa thông tin người dùng
    localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
    
    // Cập nhật lại trạng thái đăng nhập trong ứng dụng
    setIsLoggedIn(false); // Cập nhật lại trạng thái đăng nhập
  
    // Điều hướng người dùng về trang chủ
    navigate('/Homepage');
  };

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
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
            {/* <a href="#" onClick={handleMaleClick}>NAM</a>
            <a href="#" onClick={handleFemaleClick}>NỮ</a> */}
          </div>
          <div className="search">
            {/* <input type="text" placeholder="Tìm kiếm sản phẩm..." /> */}
            <div className="search-icons">
              {isLoggedIn ? (
                <>
                  <span className="icon cart-icon" onClick={handleCartClick}>
                  🛒
                    {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
                    {cartItemCount > 0 && (
                      <span className="cart-count">{cartItemCount}</span>
                    )}
                  </span>
                  <span className="icon user-icon">👤
                    <div className="user-menu">
                      <a href="#" onClick={handleUserAccountClick}>thông tin cá nhân</a>
                      {/* <a href="#" onClick={handleOrderStatusClick}>Đơn Hàng</a> */}
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
