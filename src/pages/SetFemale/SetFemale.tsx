import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import './SetFemale.css'
import axios from 'axios'

export interface Product {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    categoryId: number;
    gendersID: number;
    size: string;
    color: string;
    price: number;
    image: string;
}
const SetFemale: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null); // Dữ liệu là mảng các đối tượng Product hoặc null
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Product[]>('http://localhost:5000/products');
                const filteredProducts = response.data.filter(product => product.gendersID === 3);
                setProducts(filteredProducts);  // Cập nhật state với các sản phẩm có categoryId = 7
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
        <Header />
        <Banner />
        <div className="header-low">
            SET NỮ ĐANG HOT
        </div>
        <div className="product-grid">
            {products && products.map((product) => (
                <div className="product" key={product.id}>
                    <img alt={product.name} height="400" src={product.image} width="300" />
                    <div className="product-title">
                        {product.name}
                    </div>
                    <div className="product-price">
                        {product.price} VND
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
    )
}

export default SetFemale