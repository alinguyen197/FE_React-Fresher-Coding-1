import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Guide from "../components/Guide/Guide";
import Header from "../components/Header/Header";
import Line from "../components/Line/Line";
import Line2 from "../components/Line2/Line2";
import Quantity from "../components/Quantity/Quantity";
import Speaking from "../components/Speaking/Speak";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Guide />
      <Line />
      <Speaking />
      <Quantity />
      <Line2 />
      <About />
      <Footer />
    </>
  );
}
