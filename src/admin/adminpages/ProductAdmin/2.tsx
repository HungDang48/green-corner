import './ProductAdmin.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Modal from '../../component/modal';

// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
    name: string;
    categoriesID: number;
    size: string;
    color: string;
    price: number;
    imageUrl: string;
    newSaleID: boolean;
    hotSaleID: boolean;
    id: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    image: string;
}
export interface ProductData {
    name: string;
    categoriesID: string; // Change this to the correct type, depending on your categories
    newSaleID: boolean;
    hotSaleID: boolean;
    size: string;
    color: string;
    price: string;
    image: string;
    productId: number;  // You might want to add this if it's part of the update payload
}



export interface Category {
    id: number;
    categoriesID: number;
    name: string;
    gendersID: number;
    createdAt: number;
    updatedAt: number;
}


const ProductAdmin = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [productsList, setProductsList] = useState<Product[] | null>(null);
    const [categoriesList, setCategoriesList] = useState<Category[] | null>(null);
    const [productId, setProductId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 10; // Số sản phẩm hiển thị trên mỗi trang
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    // const [editUserData, setEditUserData] = useState<Product | null>(null);
    
    const [editProductData, setEditProductData] = useState<ProductData>({
        name: '',
        categoriesID: '',
        newSaleID: false,
        hotSaleID: false,
        size: '',
        color: '',
        price: '',
        image: '',
        productId: 0,
    });
    
    const [formData, setFormData] = useState({
        productId: '',
        productname: '',
        categoriesID: '',
        gendersID: '',
        newSaleID: '',
        hotSaleID: '',
        size: '',
        color: '',
        price: '',
        image: '',

    });
    const [newProduct, setNewProduct] = useState<Partial<Product>>({
        name: '',
        categoriesID: 1,
        size: '',
        color: '',
        price: 0,
        imageUrl: '',
        newSaleID: false,
        hotSaleID: false,
    });

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopup1 = () => setIsEditPopupOpen(!isEditPopupOpen);
    const onUpdate = (productId: number) => {
        setProductId(productId);
        togglePopup1();
    };

    const onCancel = () => {
        setProductId(null);
        togglePopup1();
    }







    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditProductData((prevData: ProductData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setEditProductData((prevData: ProductData) => ({
            ...prevData,
            categoriesID: value,
        }));
    };
    const handleNewSaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setEditProductData((prevData: ProductData) => ({
            ...prevData,
            newSaleID: value === 'true',
        }));
    };

    const handleHotSaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setEditProductData((prevData: ProductData) => ({
            ...prevData,
            hotSaleID: value === 'true',
        }));
    };

    // Gửi dữ liệu sản phẩm mới
    // Gửi dữ liệu sản phẩm mới
    const handleAddProduct = async () => {
        try {
            // Lấy ID của sản phẩm cuối cùng và cộng thêm 1
            const newProductId = productsList && productsList.length > 0 ? productsList[productsList.length - 1].id + 1 : 1;

            // Tạo đối tượng sản phẩm mới với thứ tự trường theo yêu cầu
            const productWithOrderedFields = {
                id: newProductId,
                productId: Number(newProductId), // Chuyển thành chuỗi
                name: newProduct.name,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                categoriesID: newProduct.categoriesID,
                gendersID: 2, // Bạn có thể sửa giá trị này nếu cần
                newSaleID: newProduct.newSaleID,
                hotSaleID: newProduct.hotSaleID,
                size: newProduct.size,
                color: newProduct.color,
                price: newProduct.price,
                image: newProduct.imageUrl, // Dùng URL ảnh đã nhập
            };

            // Gửi yêu cầu POST với sản phẩm mới
            const response = await axios.post('http://localhost:5000/Products', productWithOrderedFields);

            // Cập nhật danh sách sản phẩm
            setProductsList((prev) => (prev ? [...prev, response.data] : [response.data]));

            alert('Thêm sản phẩm thành công!');
            togglePopup();
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            alert('Thêm sản phẩm thất bại!');
        }
    };

    
    const handleUpdateProduct = async () => {
        try {
            await axios.put(`http://localhost:5000/products/${editProductData.productId}`, editProductData);
            // Refresh the product list after update
            const updatedProducts = await axios.get('http://localhost:5000/products');
            setProductsList(updatedProducts.data);
            setIsEditPopupOpen(false);
            alert('Cập nhật sản phẩm thành công!');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Cập nhật sản phẩm thất bại!');
        }
    };
    

    useEffect(() => {
        async function fetchData() {
            try {
                const productsResponse = await axios.get('http://localhost:5000/products');
                const categoriesResponse = await axios.get('http://localhost:5000/categories');
                setProductsList(productsResponse.data);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Product[]>('http://localhost:5000/Products');
                setProductsList(response.data);
                const categoriesResponse = await axios.get<Category[]>('http://localhost:5000/Categories');
                setCategoriesList(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsList?.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = productsList ? Math.ceil(productsList.length / productsPerPage) : 0;

    const getCategoryName = (categoriesID: number): string => {
        const category = categoriesList?.find((cat) => cat.categoriesID === categoriesID);
        return category ? category.name : 'Không xác định';
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="product-admin-container">
            {/* Header */}
            <div className="product-admin-container-top">
                <h1>DANH SÁCH SẢN PHẨM</h1>
                <button className="product-admin-button-new-product" onClick={togglePopup}>
                    Thêm sản phẩm mới
                </button>
                <Modal
                    open={showPopup}
                    onClose={togglePopup}
                    style={{
                        padding: '20px',
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                        maxWidth: '500px',
                        width: '100%',
                    }}
                >
                    <div className="popup-form-container">
                        <h2>Thêm sản phẩm mới</h2>
                        <form className="product-form">
                            <label htmlFor="imageUrl">Liên kết hình ảnh:</label>
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                value={imageUrl}
                                onChange={handleInputChange}
                                placeholder="Nhập URL hình ảnh..."
                                required
                            />
                            <label>
                                Tên sản phẩm:
                                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Danh mục:
                                <select name="categoriesID" value={newProduct.categoriesID} onChange={handleCategoryChange} required>
                                    <option value="">Chọn danh mục</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                New Sale:
                                <select
                                    name="newSaleID"
                                    value={newProduct.newSaleID ? 'true' : 'false'}
                                    onChange={handleNewSaleChange}
                                    required
                                >
                                    <option value="true">Cực mới</option>
                                    <option value="false">Bình thường</option>
                                </select>
                            </label>
                            <label>
                                Hot Sale:
                                <select
                                    name="hotSaleID"
                                    value={newProduct.hotSaleID ? 'true' : 'false'}
                                    onChange={handleHotSaleChange}
                                    required
                                >
                                    <option value="true">Hot</option>
                                    <option value="false">Bình thường</option>
                                </select>
                            </label>
                            <label>
                                Kích thước:
                                <input type="text" name="size" value={newProduct.size} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Màu:
                                <input type="text" name="color" value={newProduct.color} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Giá:
                                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
                            </label>
                            <div className="popup-buttons">
                                <button type="button" className="submit-button" onClick={handleAddProduct}>
                                    Thêm sản phẩm
                                </button>
                                <button type="button" className="cancel-button" onClick={togglePopup}>
                                    Hủy
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>

            {/* Product Table */}
            <div className="product-admin-container-bottom">
                {loading ? (
                    <p>Đang tải dữ liệu...</p>
                ) : currentProducts && currentProducts.length > 0 ? (
                    <>
                        <table className="product-admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Danh mục</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Giá</th>
                                    <th>New Sale</th>
                                    <th>Hot Sale</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsList?.map((product, index) => (
                                    <tr key={product.productId}>
                                        <td>{index + 1}</td>
                                        <td>
                                        <img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} />
                                    </td>
                                        <td>{product.name}</td>
                                        <td>{categories.find(c => c.id === product.categoriesID)?.name}</td>

                                        <td>{product.size}</td>
                                        <td>{product.color}</td>
                                        <td>{product.price}</td>
                                        <td>{product.hotSaleID ? 'Có' : 'Không'}</td>
                                        <td>{product.newSaleID ? 'Có' : 'Không'}</td>
                                        <td>
                                        <button>Chỉnh sửa</button>
                                        

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Phân trang */}
                        <div className="pagination">
                            <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
                                Trước
                            </button>
                            <span>
                                Trang {currentPage}/{totalPages}
                            </span>
                            <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
                                Sau
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Không có sản phẩm nào.</p>
                )}
            </div>
        </div>
    );
};

export default 2;