

import { useEffect, useRef, useState } from "react";
import styles from "./feature.module.css";
import MultipleItems from "./sliders/multiple-items";

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionThree() {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVideoVisible(true);
        } else {
          setIsVideoVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVideoVisible) {
      videoRef.current.play();
    } else if (!isVideoVisible && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVideoVisible]);

  const products = [
    {
      imageSrc: "/images-placeholder/products2/1.png",
      // tag:"[병행수입정품]",
      // name: " 구찌 713996 XJETL 2066(GG 자카드 하프집업 자켓)",
      name: "구찌",
      price: "3,402,960",
      sales: "20%",
    },
    {
      imageSrc: '/images-placeholder/products2/2.png',
      // tag:"[병행수입정품]",
      // name: "프라다 23SS 1BA896 EOO NZV F0002(스몰 프라다 갤러리아 사피아노 가죽 백)",
      name: "프라다",
      price: "4,343,900",
      sales: "10%",
    },
    {
      imageSrc: '/images-placeholder/products2/3.png',
      // tag:"[병행수입정품]",
      // name: "메종 마르지엘라 23SS 5AC 토트백 미니/스몰(S56WG0082 P4455 H9677)",
      name: "메종마르지엘라",
      price: "2,087,250",
      sales: "37%",
    },
    {
      imageSrc: '/images-placeholder/products2/4.png',
      // tag:"[병행수입정품]",
      // name: "버버리 Quilting Leather Small Lola Bag (8059517)(퀼팅 레더 스몰 롤라 백)",
      name: "버버리",
      price: "2,188,670",
      sales: "26%",
    },
    {
      imageSrc: '/images-placeholder/products2/5.png',
      // tag:"[병행수입정품]",
      // name: "미우미우 5BA243 N88 F0002(마테라쎄 체인 토트백)",
      name: "미우미우",
      price: "2,110,900",
      sales: "42%",
    },
    {
      imageSrc: '/images-placeholder/products2/6.png',
      // tag:"[병행수입정품]",
      // name: "프라다 23SS P3I96 1627 F0002(비스코스 롱 드레스)",
      name: "프라다",
      price: "3,438,500",
      sales: "35%",
    },
    {
      imageSrc: '/images-placeholder/products2/7.png',
      // tag:"[병행수입정품]",
      // name: "오메가 215.30.44.21.01.001 씨마스터 플래닛 오션 코엑시얼 마스터 크로노미터 남성 메탈시계",
      name: "오메가",
      price: "8,789,000",
      sales: "13%",
    },
    {
      imageSrc: '/images-placeholder/products2/8.png',
      // tag:"[병행수입정품]",
      // name: "지방시 BB50GZB00D 001(컷 아웃 라지 체인 숄더백)",
      name: "지방시",
      price: "2,099,460",
      sales: "38%",
    },
    {
      imageSrc: '/images-placeholder/products2/9.png',
      // tag:"[병행수입정품]",
      // name: "생로랑 23SS 711039 0SX0E 1000 - B(솔페리노 모노그램 미디엄 사첼백)",
      name: "생로랑",
      price: "3,542,253",
      sales: "19%",
    },
  ];

  return (
    <div className="section fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title title-large">
          <h3 className=".custom-black-semi-title">
            구하기 쉽고 흔한 명품? No~
          </h3>
          <p className="custom-black-detail">
            캐치유에서는 각종 명품 브랜드 런칭을 통하여 다양하고 폭 넓은 환경을
            제공합니다.
          </p>
        </div>
        <MultipleItems products={products} />
        <div className="custom-padding-middle-title">
          <h2 className=".custom-black-semi-title">
            그렇다면, 대체
            <br />
            캐치유는 어떤 어플리케이션 인가요?
          </h2>
        </div>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12">
      <div className="custom-push-div">
        <video
          ref={videoRef}
          className={`custom-push-image ${isVideoVisible ? "push" : ""}`}
          src="/video/four.webm"
          muted
        />
      </div>
    </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="custom-section-title">
              <h3
                className={`custom-black-semi-content ${
                  isVideoVisible ? styles.fadeIn : styles.notVisible
                }`}
              >
                캐치유에서는 모든 상품을
                <br /> 명품으로 바꿀 수 있어요
              </h3>
              <p
                className={`custom-black-detail ${
                  isVideoVisible ? styles.fadeIn : styles.notVisible
                }`}
              >
                쉽고, 빠르게, 최저가로 다양한 명품을 가져가세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
