import React from 'react';
import './RecommentMale.css'
const RecommentMale = () => {
  return (
    <section className="container">
      <section className="section">
        <h2>CÁC SẢN PHẨM KHÁC CỦA SHOP</h2>
        <a href="#" className="view-all">Xem Tất Cả </a>
        <div className="product-grid">
          {/* Individual product items */}
          <div className="product">
                    <img alt="Gray cardigan with white stripes" height="400" src="https://storage.googleapis.com/a1aa/image/jayOcLKPe2yHcC4dpCItVRAsp8jEFqbwSFaSMMeVDfi66CYnA.jpg" width="300" />
                    <div className="product-title">
                        Áo Len Cardigan ALD.269
                    </div>
                    <div className="product-price">
                        799,000₫
                    </div>
                </div>
                <div className="product">
                    <img alt="Gray cardigan with white stripes" height="400" src="https://storage.googleapis.com/a1aa/image/jayOcLKPe2yHcC4dpCItVRAsp8jEFqbwSFaSMMeVDfi66CYnA.jpg" width="300" />
                    <div className="product-title">
                        Áo Len Cardigan ALD.269
                    </div>
                    <div className="product-price">
                        799,000₫
                    </div>
                </div>
                <div className="product">
                    <img alt="Gray cardigan with white stripes" height="400" src="https://storage.googleapis.com/a1aa/image/jayOcLKPe2yHcC4dpCItVRAsp8jEFqbwSFaSMMeVDfi66CYnA.jpg" width="300" />
                    <div className="product-title">
                        Áo Len Cardigan ALD.269
                    </div>
                    <div className="product-price">
                        799,000₫
                    </div>
                </div>
                <div className="product">
                    <img alt="Gray cardigan with white stripes" height="400" src="https://storage.googleapis.com/a1aa/image/jayOcLKPe2yHcC4dpCItVRAsp8jEFqbwSFaSMMeVDfi66CYnA.jpg" width="300" />
                    <div className="product-title">
                        Áo Len Cardigan ALD.269
                    </div>
                    <div className="product-price">
                        799,000₫
                    </div>
                </div>
          {/* Repeat the article structure for other products */}
        </div>
      </section>
      
    </section>
  );
};

export default RecommentMale;