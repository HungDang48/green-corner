import React from 'react'
import './footerAdmin.css'
const FooterAdmin = () => {
    return (
        <div>
            <body>
                <div className="footer">
                    <div className="footer-column">
                        <h3>
                            HỆ THỐNG CỬA HÀNG TOÀN QUỐC
                        </h3>
                        <div className="location">
                            <i className="fas fa-map-marker-alt">
                            </i>
                            <strong>
                                HALU Đội Cấn
                            </strong>
                            <p>
                                Địa chỉ: A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội
                            </p>
                            <p>
                                Hotline: 0123.456.789
                            </p>
                        </div>
                        <div className="location">
                            <i className="fas fa-map-marker-alt">
                            </i>
                            <strong>
                                HALU Lữ Gia
                            </strong>
                            <p>
                                Địa chỉ: A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội
                            </p>
                            <p>
                                Hotline: 0123.456.789
                            </p>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>
                            THÔNG TIN
                        </h3>
                        <a href="#">
                            Về chúng tôi
                        </a>
                        <a href="#">
                            Điều khoản &amp; Điều kiện
                        </a>
                        <a href="#">
                            Chính sách bảo mật
                        </a>
                        <a href="#">
                            Chính sách thanh toán
                        </a>
                        <a href="#">
                            Chính sách giao hàng
                        </a>
                    </div>
                    <div className="footer-column">
                        <h3>
                            KẾT NỐI VỚI CHÚNG TÔI
                        </h3>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-twitter">
                                </i>
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook-f">
                                </i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram">
                                </i>
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube">
                                </i>
                            </a>
                        </div>
                        <h3>
                            THANH TOÁN
                        </h3>
                        <div className="payment-icons">
                            <img alt="123Pay logo" height="30" src="https://storage.googleapis.com/a1aa/image/0Mt5diZCdNqBPtj71kR4N2aIWtqOSgeCL2eo3qwl6WeEzNdnA.jpg" width="50" />
                            <img alt="JCB logo" height="30" src="https://storage.googleapis.com/a1aa/image/tcKyXuCawp4fNqlH8tsfbEDBGQYXZ1RBqtfBmslbqSFNzNdnA.jpg" width="50" />
                            <img alt="Visa logo" height="30" src="https://storage.googleapis.com/a1aa/image/mJQVwl1WqX4uD9Kyt5HLRGoP723QAt5ki7SFYKsRZ3FZup7E.jpg" width="50" />
                            <img alt="MasterCard logo" height="30" src="https://storage.googleapis.com/a1aa/image/0iD2eebTb9qZYUrFxm6xLihje3R9n9jGDjsS9ABSOfSWmb6OB.jpg" width="50" />
                            <img alt="VNPay QR logo" height="30" src="https://storage.googleapis.com/a1aa/image/RGDCZliuWNqOIpCkgMWS05aZ7uAyQy6rS88hhSOcjn2Zup7E.jpg" width="50" />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default FooterAdmin