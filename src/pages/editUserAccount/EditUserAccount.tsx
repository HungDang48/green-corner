import React from 'react';
import Header from '../../components/Header/Header';
import './EditUserAccount.css'
const EditUserAccount = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Profile Picture */}
        <div className="profile-pic">
          <img alt="Profile picture placeholder" src="https://storage.googleapis.com/a1aa/image/fIWmzaqoujzzZyBLOildpV48wvqRqxZjx7Kwq6H8E6fexJ2nA.jpg" width="100" height="100" />
        </div>

        {/* Textarea */}
        <div className="form-group">
          <textarea placeholder="1223"  ></textarea>
        </div>

        {/* Display Name */}
        <div className="form-group">
          <label htmlFor="display-name">Tên hiển thị</label>
          <input id="display-name" type="text" value="Hưng Đặng" />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input id="email" type="email" value="dangviethung1@dtu.edu.vn" />
            <i className="fas fa-pen" aria-hidden="true"></i>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dob">Ngày sinh</label>
          <div className="dob-select">
            <select id="dob-day">
              <option value="30">30</option>
            </select>
            <select id="dob-month">
              <option value="11">11</option>
            </select>
            <select id="dob-year">
              <option value="1990">1990</option>
            </select>
          </div>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Giới tính</label>
          <div className="gender">
            <input id="male" name="gender" type="radio" value="male" checked />
            <label htmlFor="male">Nam</label>

            <input id="female" name="gender" type="radio" value="female" />
            <label htmlFor="female">Nữ</label>

            <input id="other" name="gender" type="radio" value="other" />
            <label htmlFor="other">Khác</label>
          </div>
        </div>

        {/* ID Number */}
        <div className="form-group">
          <label htmlFor="id-number">Số chứng minh thư</label>
          <input id="id-number" type="text" value="201864420" />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Địa chỉ</label>
          <input id="address" type="text" />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input id="phone" type="text" value="0788614615" />
        </div>

        {/* Follow Toggles */}
        <div className="form-group toggle">
          <label htmlFor="followers">Số lượng người tôi theo dõi</label>
          <input id="followers" type="checkbox" checked />
        </div>
        <div className="form-group toggle">
          <label htmlFor="followed">Số lượng người theo dõi tôi</label>
          <input id="followed" type="checkbox" />
        </div>
        <div className="form-group toggle">
          <label htmlFor="comments">Bình luận đã gửi</label>
          <input id="comments" type="checkbox" checked />
        </div>
        <div className="form-group toggle">
          <label htmlFor="darkmode">Darkmode</label>
          <input id="darkmode" type="checkbox" />
        </div>

        {/* Social Links */}
        <div className="form-group social-link">
          <button className="connect-btn">Kết nối facebook</button>
        </div>
        <div className="form-group add-social">
          <button className="add-btn">+ Thêm mạng xã hội</button>
        </div>

        {/* Actions */}
        <div className="form-group actions">
          <button className="cancel-btn">Hủy</button>
          <button className="save-btn">Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserAccount;
