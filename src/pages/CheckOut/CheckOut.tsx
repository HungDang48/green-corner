import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const CheckOut = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState<any[]>(location.state?.cartItems || []);
  const [totalPrice, setTotalPrice] = useState<number>(location.state?.totalPrice || 0);

  // Tính tổng tiền hàng (có thể tính lại nếu cần)
  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <h1 className="checkout-title">Thanh Toán</h1>

        {/* Thông tin người mua */}
        <section className="customer-info">
          <h2>Thông Tin Người Nhận</h2>
          <form className="customer-form">
            <input type="text" placeholder="Họ và tên" required />
            <input type="text" placeholder="Số điện thoại" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Địa chỉ giao hàng" required></textarea>
          </form>
        </section>

        {/* Danh sách sản phẩm */}
        <section className="product-list">
          <h2>Giỏ Hàng Của Bạn</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="item-name">{item.name}</p>
                  <p>Giá: {item.price} VND</p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Tổng: {item.price * item.quantity} VND</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Tổng tiền hàng: {totalPrice} VND</p>
        </section>

        {/* Phương thức giao hàng */}
        <section className="shipping-method">
          <h2>Phương Thức Giao Hàng</h2>
          <select className="shipping-select">
            <option value="standard">Giao hàng tiêu chuẩn (20,000 VND)</option>
            <option value="express">Giao hàng nhanh (50,000 VND)</option>
          </select>
        </section>

        {/* Phương thức thanh toán và mã giảm giá */}
        <section className="payment-and-promo">
          {/* Phương thức thanh toán */}
          <section className="payment-method">
            <h2>Phương Thức Thanh Toán</h2>
            <label>
              <input type="radio" name="payment" value="cod" /> Thanh toán khi nhận hàng
            </label>
            <label>
              <input type="radio" name="payment" value="card" /> Thẻ tín dụng/ghi nợ
            </label>
            <label>
              <input type="radio" name="payment" value="momo" /> Ví Momo
            </label>
          </section>

          {/* Mã giảm giá */}
          <section className="promo-code">
            <h2>Mã Giảm Giá</h2>
            <input type="text" placeholder="Nhập mã giảm giá" className="promo-input" />
            <button className="apply-btn">Áp Dụng</button>
          </section>
        </section>

        {/* Tổng kết */}
        <section className="order-summary">
          <h2>Tóm Tắt Đơn Hàng</h2>
          <p>Tổng tiền hàng: {totalPrice} VND</p>
          <p>Phí giao hàng: 20,000 VND</p>
          <p>Giảm giá: -0 VND</p>
          <h3>Tổng thanh toán: {totalPrice + 20000} VND</h3>
        </section>

        {/* Nút xác nhận */}
        <button className="confirm-order">Xác Nhận Đặt Hàng</button>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
