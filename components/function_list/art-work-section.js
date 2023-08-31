import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ArtWorkSection() {
  const [screenSize, setScreenSize] = useState("md"); // Default size

  useEffect(() => {
    const getCurrentScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        return "xl";
      } else if (screenWidth >= 992) {
        return "lg";
      } else if (screenWidth >= 768) {
        return "md";
      } else {
        return "sm";
      }
    };

    const handleResize = () => {
      const currentSize = getCurrentScreenSize();
      setScreenSize(currentSize);
    };

    handleResize(); // Initial sizing
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fugu--artwork-section">
      <div id="fugu--counter2"></div>
      <div className="container">
        <div className="row">
          <div
            className={`col-xl-6 col-lg-4 col-sm-12 col-md-12 col-12 d-flex align-items-center ${
              (screenSize === "xl" || screenSize === "lg") ? "order-first" : ""
            } ${(screenSize === "md" || screenSize === "sm") ? "order-last" : ""}`}
          >
            <div className="fugu--default-content content-black">
              <h2>두근두근 긴장되는 뽑기 기능!</h2>
              <p>각종 명품 상품들을 랜덤하게 얻을 수 있어요</p>
              <div className="fugu--btn-wrap">
                <img src="/images/test/detail_icon.png" alt="Detail Icon" />
              </div>
            </div>
          </div>
          <div
            className={`col-xl-6 col-lg-8 col-sm-12 col-md-12 ${
              (screenSize === "xl" || screenSize === "lg") ? "" : "order-first"
            } ${(screenSize === "md" || screenSize === "sm") ? "order-first" : ""} align-content-center`}
          >
              <div
                style={{
                  position: "absolute",
                  zIndex: "-9999",
				  width: "100%",
				  height: "auto"
                }}
              >
                <Image
                  src="/images/test/circle_background.png"
                  alt="Circle Background"
				  width={500}
				  height={500}
				  cover
                />
              </div>
              <div className="video-section-div-right">
                <video src="/video/b.webm" loop autoPlay muted />
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
