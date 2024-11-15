import React from 'react';
import './Cart.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="cart">
            <div className="cart-header">
              <div>Hình ảnh</div>
              <div>Thông tin</div>
              <div>Số lượng</div>
              <div>Giá tiền</div>
            </div>

            <div className="cart-item">
              <img 
                alt="Black blazer with high collar" 
                src="https://dosi-in.com/file/detailed/400/dosiin-dac-retro-ao-thun-dacretro-rapper-asapmob-phong-cach-hiphop-400459400459.jpg?w=1000&h=1000&fit=fill&fm=webp" 
              />
              <div className="cart-item-info">
                <h4>Áo Blazer peplum cổ chống cao</h4>
                <p>- Đen - M</p>
                <a href="#">Xem lại</a>
              </div>

              <div className="cart-item-quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div className="cart-item-price">1,855,000đ</div>
              <div>
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>

          <div className="summary">
            <div className="summary-item">
              <h4>Tổng tiền hàng:</h4>
              <p>1,855,000đ</p>
            </div>
            <div className="summary-item">
              <h4>Giảm giá:</h4>
              <p>- 0đ</p>
            </div>
            <div className="summary-item">
              <h4>Tạm tính:</h4>
              <p>1,855,000đ</p>
            </div>
            <div className="summary-item summary-total">
              <h4>Tổng tiền:</h4>
              <p>1,855,000đ</p>
            </div>

            <button className="checkout">TIẾN HÀNH ĐẶT HÀNG</button>
            <button className="add-more">MUA THÊM SẢN PHẨM</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
