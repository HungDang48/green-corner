import React from 'react';
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HotSaleProduct from '../../components/HotsaleProduct/HotSaleProduct';

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <div className="product-detail">
      <div className="product-image-detail">
          <img src="https://dosi-in.com/file/detailed/400/dosiin-dac-retro-ao-thun-dacretro-rapper-asapmob-phong-cach-hiphop-400459400459.jpg?w=1000&h=1000&fit=fill&fm=webp" alt="Product Image" />
        </div>
        <div className="product-info-detail">
          <h1 className="product-name-detail">Tên Sản Phẩm</h1>
          <p className="product-price-detail">Giá: 1.000.000 VND</p>
          <div className="product-quantity-detail">
            <label htmlFor="quantity">Số lượng:</label>
            <input type="number" id="quantity" name="quantity" min="1" value="1" />
          </div>
          <div className="product-color-detail">
            <label htmlFor="color">Màu sắc:</label>
            <select id="color" name="color">
              <option value="red">Đỏ</option>
              <option value="blue">Xanh</option>
              <option value="green">Xanh lá</option>
            </select>
          </div>
          <div className="product-buttons-detail">
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
            <button className="buy-now">Mua ngay</button>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;