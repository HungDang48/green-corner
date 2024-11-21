import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams để lấy ID từ URL
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/products/${id}`);
                if (!response.ok) throw new Error('Không thể lấy thông tin sản phẩm!');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;
    if (!product) return <p>Không tìm thấy sản phẩm!</p>;

    return (
        <div>
            <Header />
            <div className="product-detail">
                <div className="product-image-detail">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info-detail">
                    <h1 className="product-name-detail">{product.name}</h1>
                    <p className="product-price-detail">Giá: {product.price} VND</p>
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
