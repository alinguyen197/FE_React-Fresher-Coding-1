import React from "react";
import a from "../About/370-3706703_video-editing-logo-design-png-download-logo-logo.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 10, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="about-infor">
          <p>한 눈에 보는 템플릿 절차</p>
          <p>
            비디온리가 아직 고민되시나요? <br />
            비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.
          </p>
          <div className="about-inner">
            <div data-aos="flip-left" className="about-item">
              <img src={a} alt="" />
              <p>이미지 찾기</p>
              <p>내 회사에 맞는 이미지를 찾아 정합니다</p>
            </div>
            <div data-aos="flip-left" className="about-item">
              <img src={a} alt="" />
              <p>이미지 찾기</p>
              <p>내 회사에 맞는 이미지를 찾아 정합니다</p>
            </div>
            <div data-aos="flip-left" className="about-item">
              <img src={a} alt="" />
              <p>이미지 찾기</p>
              <p>내 회사에 맞는 이미지를 찾아 정합니다</p>
            </div>
            <div data-aos="flip-left" className="about-item">
              <img src={a} alt="" />
              <p>이미지 찾기</p>
              <p>내 회사에 맞는 이미지를 찾아 정합니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
