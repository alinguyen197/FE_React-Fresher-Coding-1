import React from "react";
import CountUp from "react-countup";
export default function Quantity() {
  return (
    <div className="quantity">
      <div className="container">
        <div className="quantity-inner">
          <p>체험 가능한 템플릿</p>
          <div className="quantity-count">
            <div className="quantity-item">
              <p>
                <i className="fas fa-video"></i>
              </p>
              <p>사용중인 기업</p>
              <p>
                <CountUp delay={3} duration={10} end={41} />
              </p>
            </div>
            <div className="quantity-item">
              <p>
                <i className="fas fa-video"></i>
              </p>
              <p>사용중인 기업</p>
              <p>
                <CountUp delay={3} duration={10} end={164} />
              </p>
            </div>
            <div className="quantity-item">
              <p>
                <i className="fas fa-video"></i>
              </p>
              <p>사용중인 기업</p>
              <p>
                <CountUp delay={3} duration={10} end={82} />
              </p>
            </div>
          </div>
          <p>나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</p>
          <button> 시작하기</button>
        </div>
      </div>
    </div>
  );
}
