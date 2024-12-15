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
        <div className="left-header">
          <div className="logo-header">Green<span>Corner</span></div>
        </div>
        <div className="mid-header">
          <body>
            <div className="navbar-header">

              <div className="nav-links-header">
                <a href="#" onClick={handleHomePageClick}>TRANG CHỦ</a>
                <a href="#">About Us</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact Us</a>
              </div>

            </div>
          </body>

        </div>
        <div className="right-header">
          <div className="search-header">
            {/* <input type="text" placeholder="Tìm kiếm sản phẩm..." /> */}
            <div className="search-icons-header">
              {isLoggedIn ? (
                <>
                  <span className="icon cart-icon-header" onClick={handleCartClick}>
                    🛒
                    {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
                    {cartItemCount > 0 && (
                      <span className="cart-count-header">{cartItemCount}</span>
                    )}
                  </span>
                  <span className="icon user-icon-header">👤
                    <div className="user-menu-header">
                      <a href="#" onClick={handleUserAccountClick}>thông tin cá nhân</a>
                      {/* <a href="#" onClick={handleOrderStatusClick}>Đơn Hàng</a> */}
                      <a href="#" onClick={handleLogoutClick}>Đăng xuất</a>
                    </div>
                  </span>
                </>
              ) : (
                <div className="auth-links-header">
                  <a href="#" onClick={handleLoginClick}>Đăng nhập</a>
                  <a href="#" onClick={handleRegisterClick}>Đăng kí</a>
                </div>
              )}
            </div>
          </div>
          <a href="#" onClick={handleHomeAdminClick}>TRANG ADMIN</a>


        </div>


      </div>

    </div>

  );
};

export default Header;
