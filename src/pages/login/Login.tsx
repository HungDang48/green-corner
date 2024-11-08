import React, { useState } from 'react';
import './Login.css'; // Assuming CSS Modules

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  // };

  return (
    <div>
       <div className="container-login">
      <div className="container-right">
        <h1 className="app-title">ĐĂNG NHẬP</h1>
      </div>
      <div className="container-left">
       
          <div className="control-group">
            <input
              type="text"
              className="login-field"

              // onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              id="login-name"
            />
            <label className="login-field-icon fui-user" htmlFor="login-name"></label>
          </div>
          <div className="control-group">
            <input
              type="password"
              className="login-field"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              id="login-pass"
            />
            <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
          </div>
          <button className="btn btn-primary btn-large btn-block" type="submit">
            Login
          </button>
          <a className="login-link" href="#">
            Lost your password?
          </a>
       
      </div>


    </div>
    </div>
   


  );
};

export default Login;