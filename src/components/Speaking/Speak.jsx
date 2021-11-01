import React from "react";
import a from "../Speaking/thuyet-trinh-la-trinh-bay-bang-loi-truoc-nhieu-nguoi-ve-mot-van-de-nao-do.jpeg";
import a1 from "../Speaking/thuyet-trinh.png";
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
export default function Speaking() {
  return (
    <div className="speaking">
      <div className="speaking-inner">
        <div data-aos="fade-up" className="speaking-inner-left">
          <img src={a} alt="" />
        </div>
        <div data-aos="fade-up" className="speaking-inner-right">
          <p>what is the videonly</p>
          <p>비디온 리는 무엇인가요?</p>
          <p>
            세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직
            단 하나의 영상 템플릿을 만듭니다. 우리는 특정 회사에서 원하는
            템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들
            수 있도록 컨설팅을 해줄 수있습니다. 세계에서 하나 뿐인 템플릿, 직접
            경험해보세요.
          </p>
          <button>시작하기</button>
        </div>
      </div>

      <div className="speaking-inner2">
        <div data-aos="fade-up" className="speaking-inner-left">
          <img src={a} alt="" />
        </div>
        <div data-aos="fade-up" className="speaking-inner-right">
          <p>what is the videonly</p>
          <p>비디온 리는 무엇인가요?</p>
          <p>
            세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직
            단 하나의 영상 템플릿을 만듭니다. 우리는 특정 회사에서 원하는
            템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들
            수 있도록 컨설팅을 해줄 수있습니다. 세계에서 하나 뿐인 템플릿, 직접
            경험해보세요.
          </p>
          <button>시작하기</button>
        </div>
      </div>
    </div>
  );
}
