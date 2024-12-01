import React, { useEffect, useState } from 'react';
import './UniProduct.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface Product {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    categoriesID: number;
    gendersID: number;
    size: string;
    color: string;
    price: number;
    image: string;
}

export interface Category {
    id: string;
    categoriesID: number;
    name: string;
    gendersID: number;
    createdAt: number;
    updatedAt: number;
}

const UniProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 8;

    // Fetch products (only unisex products, gendersID === 3)
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Product[]>('http://localhost:5000/products');
            const filteredProducts = response.data.filter(product => product.gendersID === 3);
            setProducts(filteredProducts);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch categories for unisex products
    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Category[]>('http://localhost:5000/categories');
            const filteredCategories = response.data.filter(category => category.gendersID === 3);
            setCategories(filteredCategories);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch products by category
    const fetchProductsByCategory = async (categoriesID: number) => {
        try {
            setLoading(true);
            const response = await axios.get<Product[]>('http://localhost:5000/products');
            const filteredProducts = response.data.filter(
                product => product.categoriesID === categoriesID && product.gendersID === 3
            );
            setProducts(filteredProducts);
            setCurrentPage(1); // Reset to first page after filtering
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories(); // Fetch categories when component mounts
    }, []);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="container-product">
                <body>
                    <div className="nav">
                        <div className="header">
                            <h2>UNISEX</h2>
                            {/* Render category buttons dynamically */}
                            {categories && categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => fetchProductsByCategory(category.categoriesID)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="product-grid">
                        {currentProducts && currentProducts.map((product) => (
                            <div className="product" key={product.id}>
                                <Link to={`/productdetail/${product.id}`}>
                                    <img alt={product.name} height="400" src={product.image} width="300" />
                                    <div className="product-title">{product.name}</div>
                                    <div className="product-price">
                                        {product.price.toLocaleString('vi-VN')} VND
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button
                            className="BTN-pagination"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} </span>
                        <button
                            className="BTN-pagination"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={!products || currentPage === Math.ceil((products.length || 0) / productsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </body>
            </div>
        </div>
    );
};

export default UniProduct;
