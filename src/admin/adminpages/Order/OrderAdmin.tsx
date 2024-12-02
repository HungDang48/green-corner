import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/headerAdmin/HeaderAdmin";
import Modal from "../../component/modal"; // Import Modal component
import "./OrdeAdmin.css";

export interface Product {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
}

export interface ShippingInfo {
  GuestName: string;
  GuestNumber: string;
  Address: string;
}

export interface Order {
  id: number;
  OrderID: number;
  orderStatus: string;
  paymentStatus: string;  // Thêm paymentStatus vào interface
  orderDate: string;
  paymentMethod: string;
  UserID: number;
  products: Product[];
  shippingInfors: ShippingInfo;
  shippingFee: number;
  courier: string;
  totalAmount: number;
}

const OrderAdmin = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newStatus, setNewStatus] = useState("");
  const [newPaymentStatus, setNewPaymentStatus] = useState(""); // Thêm state cho paymentStatus
  const itemsPerPage = 5;
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [orderID, setOrderID] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/Orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const onUpdate = (orderID: number) => {
    setOrderID(orderID);
    togglePopup1();
  };

  const onCancel = () => {
    setOrderID(null);
    togglePopup1();
  };

  const handleStatusChange = (order: Order) => {
    setSelectedOrder(order);
    setNewStatus(order.orderStatus);
    setNewPaymentStatus(order.paymentStatus); // Đặt trạng thái thanh toán từ order
    togglePopup1();
  };

  const togglePopup1 = () => {
    setIsEditPopupOpen(!isEditPopupOpen);
  };

  const handleUpdateStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;

    setLoading(true);

    fetch(`http://localhost:5000/Orders/${selectedOrder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderStatus: newStatus,
        paymentStatus: newPaymentStatus, // Cập nhật trạng thái thanh toán
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cập nhật trạng thái thất bại.");
        }
        return response.json();
      })
      .then((updatedOrder) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === updatedOrder.id
              ? { ...order, orderStatus: updatedOrder.orderStatus, paymentStatus: updatedOrder.paymentStatus }
              : order
          )
        );
        setSelectedOrder(null);
        togglePopup1();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p>Lỗi: {error}</p>;
  }

  return (
    <div>
      <HeaderAdmin />
      <div className="order-management-container">
        <h1>Quản Lý Đơn Hàng</h1>
        <table className="order-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Trạng Thái Hàng</th>
              <th>Ngày Đặt</th>
              <th>Phương Thức Thanh Toán</th>
              <th>Trạng Thái Thanh Toán</th>
              <th>Sản Phẩm</th>
              <th>Phí Vận Chuyển</th>
              <th>Tên Khách Hàng</th>
              <th>Số Điện Thoại</th>
              <th>Địa Chỉ</th>
              <th>Nhà Vận Chuyển</th>
              <th>Tổng Tiền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{order.OrderID}</td>
                <td>{order.orderStatus}</td>
                <td>{new Date(order.orderDate).toLocaleString()}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.paymentStatus}</td>
                <td>
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th>Tên</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        <th>Size</th>
                        <th>Màu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((product, idx) => (
                        <tr key={idx}>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>{product.price ? product.price.toLocaleString() + " VND" : "N/A"}</td>
                          <td>{product.size}</td>
                          <td>{product.color}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td>{order.shippingFee ? order.shippingFee.toLocaleString() + " VND" : "N/A"}</td>
                <td>{order.shippingInfors.GuestName}</td>
                <td>{order.shippingInfors.GuestNumber}</td>
                <td>{order.shippingInfors.Address}</td>
                <td>{order.courier}</td>
                <td>{order.totalAmount ? order.totalAmount.toLocaleString() + " VND" : "N/A"}</td>
                <td>
                  <button
                    className="user-account-button-new-account"
                    onClick={() => handleStatusChange(order)}
                  >
                    Cập nhật trạng thái
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="prev-page" onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>{currentPage}</span>
          <button className="next-page" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        {/* Modal Popup for status update */}
        {isEditPopupOpen && selectedOrder && (
          <Modal open={isEditPopupOpen} onClose={togglePopup1}>
            <h3>Cập nhật trạng thái đơn hàng và thanh toán</h3>
            <form onSubmit={handleUpdateStatus}>
              <div>
                <label htmlFor="status">Trạng thái đơn hàng</label>
                <select
                  id="status"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <div>
                <label htmlFor="paymentStatus">Trạng thái thanh toán</label>
                <select
                  id="paymentStatus"
                  value={newPaymentStatus}
                  onChange={(e) => setNewPaymentStatus(e.target.value)}
                >
                  <option value="Unpaid">Unpaid</option>
                  <option value="Paid">Paid</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>
              <div className="button-modal">
                <br />
                <button className="button-submit" type="submit">Cập nhật</button>
              </div>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default OrderAdmin;
