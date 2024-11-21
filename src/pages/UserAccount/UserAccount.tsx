import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserAccount.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../admin/component/modal';
import { axiosClient } from '../../api/axiosClient';

const UserAccount = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    birthday: '',
    gender: '',
    password: '',
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Hàm gọi API để lấy thông tin người dùng
  const fetchUserData = async () => {
    const userId_local: any = localStorage.getItem('user');
    const datauser = JSON.parse(userId_local);

    if (userId_local) {
      try {
        const response = await axiosClient.get(`/User/${datauser?.id}`);
        const user = response.data;
        setUserData(user);
      } catch (error) {
        console.error('Có lỗi khi gọi API:', error);
      }
    } else {
      console.log('Không tìm thấy UserID trong localStorage');
      // window.location.href = "/login"; // Chuyển hướng nếu cần
    }
  };

  // Sử dụng useEffect để gọi API khi component render
  useEffect(() => {
    fetchUserData();
  }, []);

  // Hàm xử lý thay đổi mật khẩu
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra mật khẩu hiện tại có đúng không
    if (currentPassword !== userData.password) {
      alert('Mật khẩu hiện tại không đúng!');
      return;
    }

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu có khớp
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu mới và xác nhận không khớp!');
      return;
    }

    try {
      const userId_local: any = localStorage.getItem('user');
      const datauser = JSON.parse(userId_local);

      if (!datauser?.id) {
        alert('Không tìm thấy thông tin người dùng!');
        return;
      }

      // Gửi yêu cầu cập nhật mật khẩu qua API
      const response = await axiosClient.put(`/User/${datauser.id}`, {
        ...userData,
        password: newPassword, // Cập nhật mật khẩu mới
      });

      if (response.status === 200) {
        alert('Mật khẩu đã được thay đổi thành công!');
        setShowPasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        throw new Error('Cập nhật mật khẩu thất bại!');
      }
    } catch (error) {
      console.error('Có lỗi khi cập nhật mật khẩu:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại!');
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-container-account">
        <div className="profile-card-account">
          <div className="profile-info-account">
            <div className="info-row-account">
              <label>Họ Tên:</label>
              <span>{userData.name}</span>
            </div>
            <div className="info-row-account">
              <label>Username:</label>
              <span>{userData.username}</span>
            </div>
            <div className="info-row-account">
              <label>Email:</label>
              <span>{userData.email}</span>
            </div>
            <div className="info-row-account">
              <label>Ngày Sinh:</label>
              <span>{userData.birthday}</span>
            </div>
            <div className="info-row-account">
              <label>Giới Tính:</label>
              <span>{userData.gender}</span>
            </div>
            <div className="info-row-account">
              <label>Mật khẩu:</label>
              <span>********</span>
            </div>
          </div>
          <div className="password-change-account">
            <button
              className="change-password-btn-account"
              onClick={() => setShowPasswordModal(true)}
            >
              Thay đổi mật khẩu
            </button>
          </div>
        </div>

        {/* Modal thay đổi mật khẩu */}
        <Modal
          open={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
          style={{
            padding: '20px',
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <form onSubmit={handlePasswordChange}>
            <div>
              <label>Mật khẩu hiện tại:</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Mật khẩu mới:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Xác nhận mật khẩu mới:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Thay đổi mật khẩu</button>
          </form>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;
