
export default function FeatureSectionTwo() {
	return (
		<div className="section review-backg fugu-section-padding4">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h3 className=".custom-black-semi-title">다운로드 고객 100% 실제 후기!</h3>
					<p className=".custom-black-detail">실제로 캐치유 받아보신 회원님이 남겨주신 소중한 댓글이에요!</p>
				</div>
					<div className="row" style={{position:"relative", height:"30vh", marginTop:"20vh"}}>
					<video
					className="video-style"
					src="/video/third.webm"
					loop
					autoPlay
					muted
					/>
					</div>
				</div>
		</div>
	);
}
