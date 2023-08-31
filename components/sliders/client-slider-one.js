/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Slider from "react-slick";

export default function ClientSliderOne() {
  const slideList = [
    'DIOR',
    'CARTIER',
    'CARTIER',
    "BULGARI",
    'BOTTEGA VENETA',
    'LOUIS VUITTON',
    'BOTTEGA VENETA',
    'GUCCI',
    'CELINE',
    'LOUIS VUITTON',
    'FENDI',
    'GUCCI',
    'BALENCIAGA',
    'LOUIS VUITTON',
    'BUIGARI'
  ]

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    centerMode: false,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="fugu-client-section">
      <div className="container">
        <div className="fugu-client-slider">
          <Slider {...settings}>
            {Array.from({ length: 15 }, (_, index) => (
              <div className="row">
                <div className="col-12" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    src={`/images/products4/${index + 1}.PNG`}
                    width={260}
                    height={280}
                  />
                </div>
                <div className="col-12" style={{textAlign:"center", marginTop:"25px", color:"#1c1c1c"}}>
                 {slideList[index]}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
