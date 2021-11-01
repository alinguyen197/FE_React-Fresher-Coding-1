import React from "react";

export default function Header() {
  const handleOpen = () => {
    const mySideBar = document.getElementById("my-side-bar");
    mySideBar.style.visibility = "visible";
    mySideBar.style.width = "200px";
  };
  const handleClose = () => {
    const mySideBar = document.getElementById("my-side-bar");
    mySideBar.style.visibility = "hidden";
    mySideBar.style.width = "0";
    mySideBar.style.transition = "all 1s";
  };
  window.addEventListener("scroll", () => {
    const header = document.getElementById("myHeader");
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 50) {
      header.style.background = "#222222";
    } else {
      header.style.background = "transparent";
    }
  });
  return (
    <div className="header">
      {/* navbar-menu */}
      <div id="myHeader" className="header-nav">
        <div className="container d-flex justify-content-between">
          <p className="logo">videonly</p>
          <ul>
            <li>login</li>
            <li>join</li>
          </ul>
        </div>

        {/* toggle button for phone */}
        <div className="menu-toggle" onClick={handleOpen}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {/* side bar */}
      <div id="my-side-bar" className="side-panel">
        <button onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
        <ul className="my-side-bar-inner">
          <li>login</li>
          <li>join</li>
        </ul>
      </div>
      {/* content */}
      <div className="header-content">
        <p>
          비디온리는 <br /> 오직 당신의 브랜드만를 위해 <br /> 템플릿을 만듭니다
        </p>
        <p>나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요</p>
        <button>기작하기</button>
      </div>
    </div>
  );
}
