import React, { useEffect, useState } from 'react';
import './FemaleProduct.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

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

const FemaleProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 8;

    // Lấy danh sách tất cả sản phẩm ban đầu
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Product[]>('http://localhost:5000/products');
            const filteredProducts = response.data.filter(product => product.gendersID === 2);
            setProducts(filteredProducts);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    // Lấy sản phẩm theo danh mục
    const fetchProductsByCategory = async (categoriesID: number) => {
        try {
            setLoading(true);
            const response = await axios.get<Product[]>('http://localhost:5000/products');
            const filteredProducts = response.data.filter(
                product => product.categoriesID === categoriesID && product.gendersID === 2
            );
            setProducts(filteredProducts);
            setCurrentPage(1); // Reset trang về 1 khi lọc sản phẩm
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>, categoryID: number) => {
        event.preventDefault(); // Ngăn tải lại trang
        fetchProductsByCategory(categoryID); // Lọc sản phẩm theo danh mục
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            {/* <Header /> */}
            {/* <Banner /> */}
            <div className="container-product">
                <body>
                    <div className="nav">
                        <div className="header">
                            Nữ
                            <button type="button" onClick={(e) => handleCategoryClick(e, 2)}>SƠ MI</button>
                            <button type="button" onClick={(e) => handleCategoryClick(e, 4)}>ÁO VEST</button>
                            <button type="button" onClick={(e) => handleCategoryClick(e, 6)}>CROPTOP</button>
                            <button type="button" onClick={(e) => handleCategoryClick(e, 8)}>ÁO NỈ</button>
                        </div>
                    </div>
                    <div className="product-grid">
                        {currentProducts && currentProducts.map((product) => (
                            <div className="product" key={product.id}>
                                {/* Thêm Link để dẫn đến trang chi tiết sản phẩm */}
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
            {/* <Footer /> */}
        </div>
    );
};

export default FemaleProduct;
