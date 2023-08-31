/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="fugu--artwork-section">
		 <div id="fugu--counter2"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-8 col-sm-12 col-md-12"
          >
		   <div
              style={{
				position: "absolute",
				zIndex: "-9999",
              }}
            >
              <Image
                src="/images/test/circle_background.png"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="video-section-div">
              <video src="/video/a.webm" loop autoPlay muted />
            </div>
          </div>
          <div className="col-xl-6 col-lg- col-sm-12 col-md-12 col-12 d-flex align-items-center">
            <div className="fugu--default-content content-black">
              <h2>내가 원하는 제품은 모두 있는 마켓!</h2>
              <p>
                유저마켓, 할인전, 각종 특가를 통해 저렴하게 구입이 가능해요!
              </p>
              <div className="fugu--btn-wrap">
                <img src="/images/test/detail_icon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
