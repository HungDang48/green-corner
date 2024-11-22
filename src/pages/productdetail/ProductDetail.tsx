import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const [colors, setColors] = useState<string[]>([]); // Danh sách màu sắc
    const [selectedColor, setSelectedColor] = useState<string>(''); // Màu được chọn
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate(); // Hook useNavigate

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/products/${id}`);
                if (!response.ok) throw new Error('Không thể lấy thông tin sản phẩm!');
                const data = await response.json();
                setProduct(data);

                const availableColors = data.color.split(','); 
                setColors(availableColors);
                setSelectedColor(availableColors[0]); 
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (value: number) => {
        if (value < 1) return;
        setQuantity(value);
    };

    const handleAddToCart = () => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
    
      if (!user.UserID) {
        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
        return;
      }
    
      const carts = JSON.parse(localStorage.getItem('carts') || '{}');
      const userCart = carts[user.UserID] || [];
    
      const existingProductIndex = userCart.findIndex(
        (item: any) => item.id === product.id && item.color === selectedColor
      );
    
      if (existingProductIndex > -1) {
        userCart[existingProductIndex].quantity += quantity;
      } else {
        userCart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          color: selectedColor,
        });
      }
    
      carts[user.UserID] = userCart;
      localStorage.setItem('carts', JSON.stringify(carts));
    
      alert('Sản phẩm đã được thêm vào giỏ hàng!');
    
      // Điều hướng đến trang giỏ hàng (nếu cần)
      // navigate('/cart');
    };
    
    
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
                        <label>Số lượng:</label>
                        <div className="quantity-controls">
                            <button
                                type="button"
                                onClick={() => handleQuantityChange(quantity - 1)}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                                min="1"
                            />
                            <button
                                type="button"
                                onClick={() => handleQuantityChange(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="product-color-detail">
                        <label htmlFor="color">Màu sắc:</label>
                        <select
                            id="color"
                            name="color"
                            value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}
                        >
                            {colors.map((color, index) => (
                                <option key={index} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="product-buttons-detail">
                        <button className="add-to-cart" onClick={handleAddToCart}>
                            Thêm vào giỏ hàng
                        </button>
                        <button className="buy-now">Mua ngay</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
