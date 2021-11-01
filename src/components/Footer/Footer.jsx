import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-inner-left">
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침 </li>
              <li>고객센터</li>
            </ul>
            <p> 비디온리 |대표자 | 홍길동 사업자 등록번호: 356-00-00000;</p>
            <p>이메일test0101@vidionly.co.kr | FAX: 070-0000-0000</p>
            <p>서울 특별시 강남구 도산대로 8길 17 3층 </p>
            <p>
              Copyright <i class="fa fa-copyright" aria-hidden="true"></i>
              VIDIONLY All right reserved
            </p>
          </div>
          <div className="footer-inner-right">
            <ul>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-instagram-square"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-skype"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
