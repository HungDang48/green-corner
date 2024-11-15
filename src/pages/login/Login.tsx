import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

// Định nghĩa interface User
interface User {
  id: number;
  userID: number;
  name: string;
  email: string;
  password: string;
  birthday: string;
  genders: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Xử lý khi nhấn vào "Đăng kí"
  const handleRegisterClick = () => {
    navigate('/Register');
  };

  // Xử lý khi người dùng submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Gọi API để lấy danh sách người dùng
      const response = await axios.get<User[]>('http://localhost:5000/User');
      const users = response.data;

      // Tìm người dùng có email và mật khẩu khớp
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage
        setErrorMessage(''); // Xóa lỗi nếu đăng nhập thành công
        navigate('/HomePage'); // Điều hướng đến trang HomePage
      } else {
        setErrorMessage('Email hoặc mật khẩu không đúng');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container-login">
        <div className="container-right-login">
          <h1 className="app-title">ĐĂNG NHẬP</h1>
        </div>
        <div className="container-left-login">
          <form onSubmit={handleSubmit}>
            <div className="control-group-login">
              <input
                type="text"
                className="login-field-login"
                placeholder="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="login-field-icon fui-user" htmlFor="email"></label>
            </div>
            <div className="control-group-login">
              <input
                type="password"
                className="login-field"
                placeholder="password"
                id="login-pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
            </div>
            <button className="btn btn-primary btn-large btn-block" type="submit">
              Login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <a href="#" onClick={handleRegisterClick}>Đăng kí</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
