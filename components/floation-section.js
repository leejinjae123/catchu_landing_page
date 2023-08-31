import ClientSliderOne from "./sliders/client-slider-one";


export default function FloatingSection() {

    const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

  return (
    <div className="section fugu-section-padding3">
      <div className="container">
        <div className="fugu-section-title title-large">
          <h3 className=".custom-black-semi-title2">캐치유에서
실제 배송된 상품이에요</h3>
          <p className="custom-black-detail2">캐치유에서는 정품 1,000%만 배송돼요</p>
        </div>
        <ClientSliderOne/>
      </div>
    </div>

  );
}
