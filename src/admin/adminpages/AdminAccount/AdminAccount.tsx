import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminAccount.css';
import HeaderAdmin from '../../component/headerAdmin/HeaderAdmin';
import Modal from '../../component/modal';

interface User {
  id: number;
  UserID: number;
  name: string;
  username: string;
  email: string;
  birthday: string;
  gender: string;
  password: string;
  createdAt: number;
  updatedAt: number;
}

const AdminAccount = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    birthDate: '',
    gender: 'male',
    password: '',
    confirmPassword: ''
  });

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Admins');
      setUsers(response.data); // Set the fetched users
    } catch (error) {
      console.error('There was an error fetching the users!', error);
    }
  };

  // Call API when component is rendered
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      const response = await axios.get<User[]>('http://localhost:5000/Admins');
      const userList = response.data;

      const emailExists = userList.some(user => user.email === formData.email);
      if (emailExists) {
        alert("Email đã tồn tại. Vui lòng sử dụng email khác.");
        return;
      }

      const newUserID = userList.length > 0 ? userList[userList.length - 1].UserID + 1 : 1;
      const newid = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1;

      // Create new user
      await axios.post('http://localhost:5000/Admins', {
        id: newid,
        UserID: newUserID,
        name: formData.fullName,
        username: formData.username,
        email: formData.email,
        birthday: formData.birthDate,
        gender: formData.gender,
        password: formData.password,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      alert('Tạo tài khoản thành công!');
      setIsPopup1Open(false);
      fetchUsers(); // Re-fetch users after adding a new one

      setFormData({
        fullName: '',
        username: '',
        email: '',
        birthDate: '',
        gender: 'male',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error);
      alert('Có lỗi xảy ra khi tạo tài khoản.');
    }
  };

  // Toggle the modal
  const togglePopup = () => {
    setIsPopup1Open(!isPopup1Open);
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="admin-Account-container">
        <div className="admin-Account-container-top">
           
          <h1>DANH SÁCH TÀI KHOẢN ADMIN</h1>
          <button className="admin-Account-button-new-account" onClick={togglePopup}>
            Tạo Tài Khoản Mới
          </button>

          <Modal
            open={isPopup1Open}
            onClose={togglePopup}
            style={{
              padding: '20px',
              backgroundColor: '#f1f1f1',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '100%',
            }}
          >
            <div className="admin-Account-popup-form-container">
              <h2>Tạo tài khoản ADMIN</h2>
              <form className="admin-Account-account-form" onSubmit={handleSubmit}>
                <label>
                  Họ và Tên:
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </label>
                <label>
                  Username:
                  <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </label>
                <label>
                  Ngày Sinh:
                  <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} required />
                </label>
                <label>
                  Giới Tính:
                  <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </label>
                <label>
                  Mật Khẩu:
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </label>
                <label>
                  Xác Nhận Mật Khẩu:
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                </label>
                <div className="admin-Account-popup-buttons">
                  <button type="submit" className="submit-button">Tạo Tài Khoản</button>
                  <button type="button" className="cancel-button" onClick={togglePopup}>Hủy</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <div className="admin-Account-container-body">
          <table className="Admin-account-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.birthday}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button>Update</button>
                    <button>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
