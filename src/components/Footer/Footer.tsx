import React from 'react'
import './stylefooter.css'
const footer = () => {
  return (
    <body>
      <div className="footer">
        <div className="logo">
          <img alt="Shopping Well Logo" height="50" src="#" width="100" />
        </div>
        <div className="columns">
          <div className="column">
            <h3>
              Về Shopping Well
            </h3>
            <ul>
              <li>
                <a href="#">
                  Shopping Well là gì?
                </a>
              </li>
              <li>
                <a href="#">
                  Thông báo
                </a>
              </li>
              <li>
                <a href="#">
                  Cơ hội nghề nghiệp
                </a>
              </li>
              <li>
                <a href="#">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>
              Cửa hàng Bán lẻ
            </h3>
            <ul>
              <li>
                <a href="#">
                  Chính sách Đổi, Trả, Hoàn tiền
                </a>
              </li>
              <li>
                <a href="#">
                  Danh sách cửa hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>
              Cửa hàng Trực tuyến
            </h3>
            <ul>
              <li>
                <a href="#">
                  Chính sách Bán hàng
                </a>
              </li>
              <li>
                <a href="#">
                  Chính sách Giao hàng
                </a>
              </li>
              <li>
                <a href="#">
                  Chính sách Trả hàng, Hoàn tiền
                </a>
              </li>
              <li>
                <a href="#">
                  Chính sách Đổi hàng
                </a>
              </li>
              <li>
                <a href="#">
                  Chính sách Bảo hành
                </a>
              </li>
              <li>
                <a href="#">
                  Chính sách Bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3>
              Đăng ký nhận bản tin từ Shopping Well
            </h3>
            <div className="subscribe">
              <input placeholder="Nhập địa chỉ email" type="email" />
              <button>
                Đăng ký
              </button>
            </div>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-zalo">
                </i>
              </a>
              <a href="#">
                <i className="fab fa-facebook">
                </i>
              </a>
              <a href="#">
                <i className="fab fa-instagram">
                </i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok">
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="info">
          <img alt="Đã Thông Báo Bộ Công Thương" height="50" src="#" width="100" />
          <p>
            Bản quyền thuộc © Ryohin Keikaku Co., Ltd.
          </p>
          <p>
            <strong>
              CÔNG TY TNHH Shopping Well RETAIL (VIỆT NAM)
            </strong>
          </p>
          <p>
            ĐKKD SỐ 0315855270 do sở KH &amp; ĐT TP.HCM cấp ngày: 28/10/2024
          </p>
          <p>
            Trụ sở chính: Phòng 501-502-503-504, Tầng 5, The Landmark, 5B Đường Tôn Đức Thắng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
          </p>
          <p>
            Thời gian làm việc: Thứ 2 - Thứ 6. Từ 08:00 sáng - 05:00 chiều
          </p>
          <p>
            Điện thoại liên hệ: 1900 2555 79 ( Chăm Sóc Khách Hàng Thương Mại Điện Tử )
          </p>
          <p>
            Email: ec.sale@muji.vn
          </p>
        </div>
        
      </div>
    </body>
  )
}

export default footer