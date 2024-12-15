import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserAccount.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; // thêm Footer
import Modal from '../../admin/component/modal';
import { axiosClient } from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleEditUserAccountClick = () => {
    navigate('/EditUserAccount'); // Điều hướng đến trang chỉnh sửa tài khoản
  };

  return (
    <div className="user-account-wrapper">
      <Header />
      <main>
        <div className="user-account-container">
          <section className="user-account-top">
            <div className="profile-card">
              <div className="profile-img-wrapper">
                <img
                  alt="Profile picture"
                  className="profile-img"
                  src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/458455914_2273810929638630_4721550709966813856_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=v4fkO9o_i0cQ7kNvgGq0HEa&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AOcj7tuVtKmWdWRDmpTmd0F&oh=00_AYAZlGypEiA3miF25cGx7WxjFBUFs354VdaIpcAsUasCYg&oe=67645CC2"
                />
              </div>
              <h2 className="username">Hưng Dang</h2>
              <p className="user-handle">@0788614615</p>
              <p>MÔ TẢ</p>
              <button onClick={handleEditUserAccountClick} className="edit-profile-btn">Chỉnh sửa trang cá nhân</button>
              <div className="profile-stats">
                <div className="stat-item">
                  <p className="stat-value">0</p>
                  <p className="stat-label">followers</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">0</p>
                  <p className="stat-label">following</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">0</p>
                  <p className="stat-label">spiders</p>
                </div>
              </div>
            </div>
          </section>

          <section className="user-account-bottom">
            <div className="content">
              <div className="tabs">
                <div className="tab active">Bài viết (0)</div>
                <div className="tab">Series</div>
                <div className="tab">Đã lưu</div>
              </div>
              <div className="no-content-message">
                <div className="article">
                  <div className="article-left">
                  <img
                    alt="A person standing in a forest and a bear standing in a field"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/9SUufRY5gcwDcyffEG9YdhZRrxz8bnkuOprUqFtgP1aEyI2nA.jpg"
                    width="100"
                  />
                  </div>
                  <div className="article-center">
                  <div className="article-content">
                    <p className="article-categories">QUAN ĐIỂM - TRANH LUẬN • 10 phút đọc</p>
                    <h2 className="article-title">Tại sao một bộ phận nam giới có ác cảm với nữ quyền?</h2>
                    <p className="article-summary">Những khía cạnh ít ai nói tới về phong trào nữ quyền, bài viết mà mọi giới tính nên đọc.</p>

                    <div className="article-footer">
                      <div className="author-info">
                        <i className="fas fa-user-circle"></i>
                        <span className="author-name">PEDrO Pentacle</span> • <span className="publish-date">17 Th5</span>
                      </div>

                      <div className="article-stats">
                        <span className="upvotes"><i className="fas fa-arrow-up"></i> 19</span>
                        <span className="comments"><i className="fas fa-comment"></i> 20</span>
                      </div>
                    </div>
                  </div>

                  </div>
                  <div className="article-right">

                  </div>
                 
                

                </div>
              </div>
              <div className="view-mode">
                <button className="view-grid-btn">Chế độ xem lưới</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer /> {/* Hiển thị Footer */}
    </div>
  );
};

export default UserAccount;
