import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExampleComponent.css'
// import { Product } from './interfaces/Product'; // Import interface Product

export interface Product {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    categoryId: number;
    size: string;
    color: string;
    price: number;
    image: string;
}
const ExampleComponent: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null); // Dữ liệu là mảng các đối tượng Product hoặc null
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Product[]>('http://localhost:5000/products');
                setProducts(response.data);  // Cập nhật state với dữ liệu từ API
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
            <div className="header-low">
                SET NAM ĐANG HOT
            </div>
            <body>
                <ul>
                    {products && products.map((product) => (

                        <li key={product.id}>

                            <img height="400" src={product.image} alt={product.name} width="100" />
                            <div className="product-title">
                                {product.name}
                            </div>
                            <div className="product-price">
                                {product.price}
                            </div>


                        </li>
                    ))}
                </ul>
            </body>

        </div>
    );
};

export default ExampleComponent;
