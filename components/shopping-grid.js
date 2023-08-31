/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./shopping-grid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShoppingGrid() {

  const [isVisible, setIsVisible] = useState(false);
  const [maxWidth, setMaxWidth] = useState(null);

  const initialProducts  = [
    {
      imageSrc: "/images-placeholder/products3/1.png",
      // title: "[병행수입정품] 구찌 443497 9SYWP 5966(GG 마몬트 시퀸 숄더백)",
      title: "구찌",
      price: "4,200,000",
      point: "23,929",
    },
    {
      imageSrc: "/images-placeholder/products3/2.png",
      // title: "[병행수입정품] 보테가베네타 591970 V2AH1 8472(메탈릭 패딩 카세트 백)",
      title: "보테가베네타",
      price: "5,555,000",
      point: "26,909",
    },
    {
      imageSrc: "/images-placeholder/products3/3.png",
      // title: "[병행수입정품] 버버리 23SS (8063135)(크리스털 모노그램 모티프 레더 미니 체인 TB 백)",
      title: "버버리",
      price: "3,690,000",
      point: "30,976",
    },
    {
      imageSrc: "/images-placeholder/products3/4.png",
      // title: "[병행수입정품] 톰브라운 도니골 모헤어 트위드 자수 니트 (MKA414E Y1502 055)",
      title: "톰브라운",
      price: "4,840,000",
      point: "14,311",
    },
    {
      imageSrc: "/images-placeholder/products3/5.png",
      // title: "[병행수입정품] 태그호이어 CAZ2012.BA0970 포뮬러1 칼리버 16 크로노그래프 남성 메탈시계",
      title: "태그호이어",
      price: "4,880,000",
      point: "39,900",
    },
    {
      imageSrc: "/images-placeholder/products3/6.png",
      // title: "[병행수입정품] 프라다 23SS 2DE129 3LMH F0I89(모놀리스 뉘앙스 브러시드 가죽 로퍼)",
      title: "프라다",
      price: "1,860,000",
      point: "12,545",
    },
  ];

  const [product, setProduct] = useState(initialProducts);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };

    handleResize(); // 초기화 시 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".custom-shoes-data3"); // 클래스 선택자 사용
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        // 각 제품의 price와 point를 랜덤으로 업데이트
        const newProducts = product.map(product => ({
          ...product,
          point: Math.floor(Math.random() * 100000).toLocaleString(),
        }));
        setProduct(newProducts);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        // 모든 제품의 price와 point를 원래대로 복원
        setProduct(initialProducts);
      }, 1500); 
      return () => clearInterval(interval);
    }
}, [isVisible]);

  const swiperParams = {
    pagination: {
      el: ".swiper-pagination",
      clickable: false, // 점 클릭 가능하게 설정
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  
  return (
    <div className="section fugu-section-padding3 shopping-back">
      <div className="container">
        <div className="fugu-section-title">
          <p>whoever easy fast reasonable</p>
          <h2>누구나 쉽고 빠르고 알뜰하게!</h2>
        </div>
        {maxWidth >= 770 ? (
          <div className="row">
            {product.map((product, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="fugu-iconbox-wrap3 wow fadeInUpX"
                  data-wow-delay="0.20s"
                >
                  <div className="fugu-iconbox-icon3">
                    <img
                      src={product.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="custom-shoes-data3">
                    <h4>{product.title}</h4>
                  </div>
                  <div
                    className={`custom-shoes-data3 horizon-left ${
                      isVisible ? styles.slotMachine : ""
                    }`}
                  >
                    <p>{product.price} 원</p>
                  </div>
                  <div
                    className={`custom-shoes-data4 horizon-right ${
                      isVisible ? styles.slotMachine : ""
                    }`}
                    style={{ marginLeft: "5px" }}
                  >
                    <p>{product.point}</p>
                  </div>
                  <div className="custom-shoes-data3 horizon-right">
                    <Image
                      src="/images/test/point.png"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="" style={{ textAlign: "center" }}>
            <Swiper {...swiperParams}>
              {product.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-pagination" />
                  <div
                    className="fugu-iconbox-wrap3 wow fadeInUpX"
                    data-wow-delay="0.20s"
                  >
                    <div className="fugu-iconbox-icon3">
                      <img
                        src={product.imageSrc}
                        alt=""
                      />
                    </div>
                    <div className="custom-shoes-data3">
                      <h4>{product.title}</h4>
                    </div>
                    <div
                      className={`custom-shoes-data3 horizon-left ${
                        isVisible ? styles.slotMachine : ""
                      }`}
                    >
                      <p>{product.price} 원</p>
                    </div>
                    <div
                      className={`custom-shoes-data4 horizon-right ${
                        isVisible ? styles.slotMachine : ""
                      }`}
                      style={{ marginLeft: "5px" }}
                    >
                      <p>{product.point}</p>
                    </div>
                    <div className="custom-shoes-data3 horizon-right">
                      <Image
                        src="/images/test/point.png"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
