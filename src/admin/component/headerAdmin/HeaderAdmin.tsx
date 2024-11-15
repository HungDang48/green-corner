import React from 'react';
import './HeaderAdmin.css';

const HeaderAdmin = () => {
    return (
        <div className="header-container">
            <div className="navbar">
                <div className="navbar-left">
                    <div className="logo">
                        <img
                            alt="Logo"
                            height="40"
                            src="https://storage.googleapis.com/a1aa/image/EJvSbSOCeZSXWiA1BgH9OER9w3xnREn9eqoHoxq5AL3jv4tTA.jpg"
                            width="40"
                        />
                        <span>SHOPPING WELL</span>
                    </div>
                    <div className="search-bar">
                        <input placeholder="Type to search..." type="text" />
                    </div>
                    <div className="nav-links">
                        <a href="#">
                            <i className="fas fa-home"></i>DASHBOARD
                        </a>
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>KHÁCH HÀNG
                        </a>
                        <a href="#">
                            <i className="fas fa-cogs"></i>ADMIN
                        </a>
                        <a href="#">
                            <i className="fas fa-th-large"></i>THANH TOÁN
                        </a>
                        <a href="#">
                            <i className="fas fa-chart-line"></i>SẢN PHẨM
                        </a>
                        <a href="#">
                            <i className="fas fa-bookmark"></i>DANH MỤC
                        </a>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="icons">
                        <i className="fas fa-th"></i>
                        <i className="fas fa-bell">
                            <span className="badge">7</span>
                        </i>
                        <i className="fas fa-envelope">
                            <span className="badge">8</span>
                        </i>
                    </div>
                    <div className="profile">
                        <img
                            alt="Profile"
                            height="32"
                            src="https://storage.googleapis.com/a1aa/image/shf8l6eRZfVzmJ0YNFrwGqTSkGIIXgXelfWBrnVUyXHk8FvdC.jpg"
                            width="32"
                        />
                        <div className="name">
                            <span>Pauline Seitz</span>
                            <small>Web Designer</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdmin;
