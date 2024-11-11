import React, { useState } from 'react';
import './UserAccount.css';

const UserAccount = () => {
  // Dữ liệu người dùng mẫu
  const [userData, setUserData] = useState({
    avatar: 'https://via.placeholder.com/150',
    fullName: 'Nguyễn Văn A',
    username: 'nguyenvana',
    email: 'nguyenvana@example.com',
    birthday: '01/01/1990',
    gender: 'Nam',
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      alert('Mật khẩu đã được thay đổi!');
      setShowPasswordModal(false);
    } else {
      alert('Mật khẩu mới và xác nhận không khớp!');
    }
  };

  return (
    <div className="profile-container-account">
      <div className="profile-card-account">
        <div className="avatar-container-account">
          <img src={userData.avatar} alt="Avatar" className="avatar" />
          <button className="change-avatar-btn">Thay đổi ảnh</button>
        </div>
        <div className="profile-info-account">
          <div className="info-row-account">
            <label>Họ Tên:</label>
            <span>{userData.fullName}</span>
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
        </div>
        <div className="password-change-account">
          <button className="change-password-btn-account" onClick={() => setShowPasswordModal(true)}>
            Thay đổi mật khẩu
          </button>
        </div>
      </div>

      {showPasswordModal && (
        <div className="password-change-modal-account">
          <div className="modal-content-account">
            <span className="close-btn-account" onClick={() => setShowPasswordModal(false)}>&times;</span>
            <h2>Thay đổi mật khẩu</h2>
            <form onSubmit={handlePasswordChange}>
              <div className="form-group-account">
                <label>Mật khẩu cũ:</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group-account">
                <label>Mật khẩu mới:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group-account">
                <label>Xác nhận mật khẩu:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Lưu thay đổi</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
