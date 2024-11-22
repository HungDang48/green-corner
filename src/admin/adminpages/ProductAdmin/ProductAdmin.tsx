import './ProductAdmin.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../component/modal';
import HeaderAdmin from '../../component/headerAdmin/HeaderAdmin';

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
    productId: string;
    createdAt: number;
    updatedAt: number;
    image: string;
}

interface Category {
    id: number;
    categoriesID: number;
    name: string;
    gendersID: number;
    createdAt: number;
    updatedAt: number;
}


const ProductAdmin = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [imageUrl, setImageUrl] = useState<string>('');


    const [productsList, setProductsList] = useState<Product[] | null>(null);
    const [categoriesList, setCategoriesList] = useState<Category[] | null>(null);
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);


    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 7;
    const [productId, setProductId] = useState<number | null>(null);


    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

    const [showPopupUpdate, setShowPopupUpdate] = useState<boolean>(false);
    const [isEditPopupOpenUpdate, setIsEditPopupOpenUpdate] = useState(false);

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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


    const UpdateAccount = ({ }) => {
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
    }





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
    const togglePopupUpdate = () => {
        setShowPopupUpdate(!showPopupUpdate);
    };
    const onUpdate = ( productId: number) => {
        setProductId( productId);
        togglePopupUpdate();
    };
    const onCancel = () => {
        setProductId(null);
        togglePopupUpdate();
    }

    const toggleEditPopup = () => setIsEditPopupOpen(!isEditPopupOpen);


    const handleEditProduct = (productId: number) => {
        const product = products.find((p) => p.id === productId);
        if (product) {
            setSelectedProduct(product);
            setIsEditPopupOpen(true);
        }
    };







    const handleInputChangeUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };






    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            categoriesID: Number(value), // Chuyển đổi từ string sang number
        }));
    };

    const handleNewSaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            newSaleID: value === 'true', // 'true' sẽ được set thành Boolean true
        }));
    };

    const handleHotSaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            hotSaleID: value === 'true', // 'true' sẽ được set thành Boolean true
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
                productId: String(newProductId), // Chuyển thành chuỗi
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
    const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Kiểm tra xem password và confirmPassword có khớp nhau không

        try {
            // Gửi PATCH request đến API
            await axios.patch(`http://localhost:5000/User/${productId}`, {
                id: productId,
                name: formData.productname || '',
                categoriesID: Number(formData.categoriesID) || '',
                gendersID: Number(formData.gendersID) || '',
                newSaleID: formData.newSaleID === 'true' || '',
                hotSaleID: formData.hotSaleID === 'true' || '',
                size: formData.size || '',
               
            });
            alert('Cập nhật thông tin thành công!');
            togglePopupUpdate(); // Đóng popup sau khi cập nhật
            const response = await axios.get<Product[]>('http://localhost:5000/products');
            setProductsList(response.data);
        } catch (error) {
            console.error('Cập nhật thất bại:', error);
            alert('Cập nhật thông tin thất bại!');
        }
        setProductId(null);
    };



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
        <div>
            <HeaderAdmin />
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
                                    {currentProducts.map((products, index) => (
                                        <tr key={products.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={products.image} alt={products.name} style={{ width: 80, height: 80 }} />
                                            </td>
                                            <td>{products.name}</td>
                                            <td>{getCategoryName(products.categoriesID)}</td>
                                            <td>{products.size}</td>
                                            <td>{products.color}</td>
                                            <td>{products.price} vnd</td>
                                            <td>{products.newSaleID ? 'Cực mới' : 'Bình thường'}</td>
                                            <td>{products.hotSaleID ? 'Hot' : 'Bình thường'}</td>
                                            <td>
                                                <button className="user-account-button-new-account" onClick={() => onUpdate(products.id)}  >
                                                    UPDATE
                                                </button>
                                                <Modal
                                                    open={showPopupUpdate}
                                                    onClose={togglePopupUpdate}
                                                    style={{
                                                        padding: '20px',
                                                        backgroundColor: '#f1f1f1',
                                                        borderRadius: '10px',
                                                        maxWidth: '500px',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <div className="popup-form-container">
                                                        <h2>UPDATE SẢN PHẨM </h2>
                                                        <form className="product-form">
                                                            <label htmlFor="imageUrl">Liên kết hình ảnh:</label>
                                                            <input
                                                                type="url"
                                                                id="imageUrl"
                                                                name="imageUrl"
                                                                value={formData.image}
                                                                onChange={handleInputChangeUpdate}
                                                                placeholder="Nhập URL hình ảnh..."
                                                                required
                                                            />
                                                            <label>
                                                                Tên sản phẩm:
                                                                <input type="text" name="name" value={formData.productname} onChange={handleInputChangeUpdate} required />
                                                            </label>
                                                            <label>
                                                                Danh mục:
                                                                <select name="categoriesID" value={formData.categoriesID} onChange={handleInputChangeUpdate} required>
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
                                                                    value={formData.newSaleID ? 'true' : 'false'}
                                                                    onChange={handleInputChangeUpdate}
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
                                                                    value={formData.hotSaleID ? 'true' : 'false'}
                                                                    onChange={handleInputChangeUpdate}
                                                                    required
                                                                >
                                                                    <option value="true">Hot</option>
                                                                    <option value="false">Bình thường</option>
                                                                </select>
                                                            </label>
                                                            <label>
                                                                Kích thước:
                                                                <input type="text" name="size" value={formData.size} onChange={handleInputChangeUpdate} required />
                                                            </label>
                                                            <label>
                                                                Màu:
                                                                <input type="text" name="color" value={formData.color} onChange={handleInputChangeUpdate} required />
                                                            </label>
                                                            <label>
                                                                Giá:
                                                                <input type="number" name="price" value={formData.price} onChange={handleInputChangeUpdate} required />
                                                            </label>
                                                            <div className="popup-buttons">
                                                                <button type="button" className="submit-button" >
                                                                    UPDATE SẢN PHẨM
                                                                </button>
                                                                <button type="button" className="cancel-button" onClick={togglePopup}>
                                                                    Hủy
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Modal>

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
        </div>

    );
};

export default ProductAdmin;