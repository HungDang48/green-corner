import React from 'react'
import './ProductDetail.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HotSaleProduct from '../../components/HotsaleProduct/HotSaleProduct';
import RecommentMale from '../../components/RecommentMale/RecommentMale';

const ProductDetail = () => {
    return (
        <div>
        <Header />
            <body>
            <div className="container">
                <div className="left-column">
                    <img alt="Túi xách tay, 24STDE001B" className="product-image" height="800" src="https://storage.googleapis.com/a1aa/image/TFArm49UV1J7DVrXG8i3lMhj6Eo3YOBeUddXfEXHDBvGbisTA.jpg" width="600" />
                    <div className="thumbnail-images">
                        <img alt="Thumbnail 1" height="60" src="https://storage.googleapis.com/a1aa/image/9zpsuKjU2O6uPVKU3DgqJq74RD0kH1Da67sL34tKJ3GymI7E.jpg" width="60" />
                        <img alt="Thumbnail 2" height="60" src="https://storage.googleapis.com/a1aa/image/UrQPePRPNhWIZq2g3MZwUyCJCHqr9fQur693w17v3x9CbisTA.jpg" width="60" />
                        <img alt="Thumbnail 3" height="60" src="https://storage.googleapis.com/a1aa/image/b0ag45fDeqqXqkEghLKFFmHt4M4EvB4cEFr6HFyuTufO2EZnA.jpg" width="60" />
                        <img alt="Thumbnail 4" height="60" src="https://storage.googleapis.com/a1aa/image/Wz4rSo4QrMaJD1iSziJBYbi9zhdfY7sq8uB8I1ubW1xkNR2JA.jpg" width="60" />
                        <img alt="Thumbnail 5" height="60" src="https://storage.googleapis.com/a1aa/image/qFMikv5Rv560BpfflnfqbOqz8LDGt3cIUN9lAuIfpl3RsJyOB.jpg" width="60" />
                    </div>
                </div>
                <div className="right-column">
                    <div className="product-title">
                        Túi xách tay, 24STDE001B
                    </div>
                    <div className="product-code">
                        Mã sản phẩm: 24STDE001B
                    </div>
                    <div className="product-status">
                        Tình trạng: Còn hàng
                    </div>
                    <div className="product-brand">
                        Thương hiệu: Accessories
                    </div>
                    <div className="product-price">
                        149,700đ
                    </div>
                    <div className="product-old-price">
                        499,000đ
                    </div>
                    <div className="product-discount">
                        -70%
                    </div>
                    <div className="quantity-section">
                        <label>
                            Số lượng:
                        </label>
                        <input id="quantity" min="1" type="number" value="1" />
                    </div>
                    <div className="add-to-cart">
                        THÊM VÀO GIỎ
                    </div>
                    <div className="buy-now">
                        MUA NGAY
                    </div>
                    <div className="share-section">
                        <span>
                            Chia sẻ:
                        </span>
                        <i className="fab fa-facebook">
                        </i>
                        <i className="fab fa-twitter">
                        </i>
                        <i className="fab fa-pinterest">
                        </i>
                        <i className="fab fa-whatsapp">
                        </i>
                        <i className="fab fa-telegram">
                        </i>
                    </div>

                </div>
            </div>
           
           
        </body>
        {/* <RecommentMale />  */}
        <Footer />
        </div>
    )
}

export default ProductDetail