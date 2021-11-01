import React from "react";
import a1 from "../Guide/employees-happier-small-company-top-1288x724.jpeg";
import a2 from "../Guide/marketing-advice-people.jpeg";
import a3 from "../Guide/Zenjob_Founder_Management.jpeg";
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
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
export default function Guide() {
  return (
    <div className="guide">
      <div className="container">
        <div className="guide-title">
          <p>tutorial guide</p>
          <p>영상 만들기, 어렵지 않아요</p>
          <p>
            나에게 맞는 템플릿, <br />
            망설이지 말고 지금 직접 체험해보세요!
          </p>
        </div>
        <div className="guide-content">
          <div data-aos="zoom-in" className="guide-content-item">
            <img src={a1} alt="" />
            <div className="guide-overlay">
              <div className="guide-overlay-top">
                <p>두번째</p>
                <p>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </p>
              </div>
              <div className="guide-overlay-bottom">
                <h4>작업자들이 소통하며 템플릿 영상 작업</h4>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="guide-content-item">
            <img src={a2} alt="" />
            <div className="guide-overlay">
              <div className="guide-overlay-top">
                <p>두번째</p>
                <p>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </p>
              </div>
              <div className="guide-overlay-bottom">
                <h4>작업자들이 소통하며 템플릿 영상 작업</h4>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="guide-content-item">
            <img src={a3} alt="" />
            <div className="guide-overlay">
              <div className="guide-overlay-top">
                <p>두번째</p>
                <p>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </p>
              </div>
              <div className="guide-overlay-bottom">
                <h4>작업자들이 소통하며 템플릿 영상 작업</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
