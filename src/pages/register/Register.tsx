import React from 'react';
import './Register.css';

const Register = () => {
  return (
    
      <body>
        <div className="register-container">
          <form>
            <label htmlFor="fullname">Họ và tên:</label>
            <input type="text" id="fullname" name="fullname" required />

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="birthday">Ngày sinh:</label>
            <input type="date" id="birthday" name="birthday" required />

            <label htmlFor="gender">Giới tính:</label>
            <select id="gender" name="gender" required>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>

            <label htmlFor="password">Mật khẩu:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />

            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </body>

   

  );
};

export default Register;