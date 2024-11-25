import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<any[]>(location.state?.cartItems || []);
  const [totalPrice, setTotalPrice] = useState<number>(location.state?.totalPrice || 0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [guestName, setGuestName] = useState('');
  const [guestNumber, setGuestNumber] = useState('');
  const [address, setAddress] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  const validPromoCodes: Record<'SALE10' | 'SALE20', number> = {
    SALE10: 10,
    SALE20: 20, 
  };

  // Áp dụng mã giảm giá
  const handleApplyPromo = () => {
    if (promoCode in validPromoCodes) {
      const discountPercentage = validPromoCodes[promoCode as keyof typeof validPromoCodes];
      const discountValue = (totalPrice * discountPercentage) / 100;
      setDiscount(discountValue);
      alert(`Áp dụng mã giảm giá thành công! Bạn được giảm ${discountValue} VND.`);
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  // Tính tổng tiền hàng
  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Xác nhận đơn hàng
  const handleConfirmOrder = async () => {
    if (!guestName.trim() || !guestNumber.trim() || !address.trim()) {
      alert('Vui lòng nhập đầy đủ thông tin họ và tên, số điện thoại, và địa chỉ giao hàng.');
      return;
    }
  
    const shippingFee = shippingMethod === 'standard' ? 20000 : 50000;
    const orderData = {
      OrderID: Math.floor(Math.random() * 100000),
      orderStatus: 'Pending',
      orderDate: new Date().toISOString(),
      paymentStatus: paymentMethod === 'cod' ? 'Unpaid' : 'Paid',
      paymentMethod,
      UserID: 1,
      products: cartItems.map((item) => ({
        productId: item.id || Math.random().toString(),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size || 'N/A',
        color: item.color || 'N/A',
      })),
      shippingInfors: {
        GuestName: guestName,
        GuestNumber: guestNumber,
        Address: address,
      },
      shippingFee,
      courier: shippingMethod === 'standard' ? 'Giao Hàng Tiêu Chuẩn' : 'Giao Hàng Nhanh',
      totalAmount: totalPrice + shippingFee - discount,
      discount,
    };
  
    try {
      const response = await fetch('http://localhost:5000/Orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) throw new Error('Failed to place the order');
      const result = await response.json();
      console.log('Order placed successfully:', result);
  
      // Xóa giỏ hàng trong localStorage sau khi đặt hàng thành công
      localStorage.removeItem('carts');
      setCartItems([]); // Cập nhật lại giỏ hàng trong state (rỗng)
  
      alert('Đặt hàng thành công!');
      navigate('/'); // Điều hướng về trang chủ hoặc trang khác sau khi đặt hàng thành công
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Có lỗi xảy ra khi đặt hàng.');
    }
  };
  

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <h1 className="checkout-title">Thanh Toán</h1>

        {/* Thông tin người mua */}
        <section className="customer-info">
          <h2>Thông Tin Người Nhận</h2>
          <form className="customer-form">
            <input
              type="text"
              placeholder="Họ và tên"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              required
            />
            <textarea
              placeholder="Địa chỉ giao hàng"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
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
                  <p>Kích thước: {item.size || 'Không có'}</p>
                  <p>Tổng: {item.price * item.quantity} VND</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Áp dụng mã giảm giá */}
        <section className="promo-code">
          <h2>Mã Giảm Giá</h2>
          <input
            type="text"
            placeholder="Nhập mã giảm giá"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="promo-input"
          />
          <button className="apply-btn" onClick={handleApplyPromo}>
            Áp DụngtoLocaleString
          </button>
        </section>

        {/* Tổng kết */}
        <section className="order-summary">
          <h2>Tóm Tắt Đơn Hàng</h2>
          <p>Tổng tiền hàng: {totalPrice} VND</p>
          <p>Phí giao hàng: {shippingMethod === 'standard' ? 20000 : 50000} VND</p>
          <p>Giảm giá: -{discount} VND</p>
          <h3>
            Tổng thanh toán: {totalPrice + (shippingMethod === 'standard' ? 20000 : 50000) - discount} VND
          </h3>
        </section>

        {/* Nút xác nhận */}
        <button className="confirm-order" onClick={handleConfirmOrder}>
          Xác Nhận Đặt Hàng
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
