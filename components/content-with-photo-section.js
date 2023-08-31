import Image from "next/image";

export default function ContentWithPhotoSection() {

	// const targetRef = useRef(null);

	// useEffect(() => {
	//   const targetElement = targetRef.current;

	//   const handleIntersect = (entries) => {
	// 	entries.forEach((entry) => {
	// 	  if (entry.isIntersecting) {
	// 		smoothScrollToCenter(targetElement);
	// 	  }
	// 	});
	//   };

	//   const observer = new IntersectionObserver(handleIntersect, {
	// 	threshold: 0.3, // 타겟 엘리먼트의 반 이상이 보일 때 작동
	//   });

	//   observer.observe(targetElement);

	//   return () => {
	// 	observer.disconnect();
	//   };
	// }, []);

	// const smoothScrollToCenter = (element) => {
	// 	const windowHeight = window.innerHeight;
	// 	const targetRect = element.getBoundingClientRect();
	// 	const targetOffsetTop = targetRect.top + window.scrollY;
	// 	const targetCenterOffset = targetOffsetTop - windowHeight / 4;

	// 	const scrollStep = (timestamp) => {
	// 	  const currentTime = Date.now();
	// 	  const timeElapsed = Math.min(1, (currentTime - timestamp) / 5000); // 500ms 동안 스크롤 애니메이션 진행
	// 	  const distance = targetCenterOffset - window.scrollY;
	// 	  const newPosition = window.scrollY + distance * timeElapsed;

	// 	  window.scrollTo(0, newPosition);

	// 	  if (timeElapsed < 1) {
	// 		requestAnimationFrame(scrollStep);
	// 	  }
	// 	};

	// 	requestAnimationFrame(scrollStep);
	//   };

	return (
		<div className="section fugu-section-padding2">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h3 className=".custom-black-semi-title">모든 당첨 내역 실시간 확인!</h3>
					<p className=".custom-black-detail">뽑기, 조합, 제작, 강화 등 모든 당첨은 바로바로 확인하자!</p>

				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-3 d-flex justify-content-center">
						<div className="fugu-apps-thumb">
							<div className="image-container">
								<div className="image-scroll image-scroll-up">
									<Image
										src="/images/left_prod.png"
										alt="Product Image"
										width={300}
										height={2000}
										responsive
									/>
									<div style={{ marginTop: "40px" }} />
									<Image
										src="/images/test/left_prod.png"
										alt="Product Image"
										width={300}
										height={2000}
										responsive
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						{/* <div ref={targetRef} className="center-target"/> */}
						<div className="custom-pick-div">
							<video
								className="custom-pick-turn-image"
								src="/video/second.webm"
								autoPlay loop muted
							/>
							<Image
								className="custom-linear-round-back"
								src="/images/test/linear_round.png"
								responsive
								width={400}
								height={400}
							/>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 d-flex justify-content-center">
						<div className="fugu-apps-thumb">
							<div className="image-container" >
								<div className="image-scroll image-scroll-down">
									<Image
										src="/images/test/right_prod.png"
										alt="Product Image"
										width={300}
										height={2000}
										responsive
									/>
									<div style={{ marginTop: "40px" }} />
									<Image
										src="/images/test/right_prod.png"
										alt="Product Image"
										width={300}
										height={2000}
										responsive
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
