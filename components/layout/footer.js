import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FooterHomeOne() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-3">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									<img src="/images/test/catchu_logo.png" alt="" className="light-version-logo" />
								</div>
								<p>
									명품 플랫폼 No.1 캐치유<br />
									지금 바로 원하시는 명품을 얻어보세요!
								</p>
								<div className="fugu--social-icon fugu--social-icon3">
									<ul>
										<li>
											<Link href="#">
												<img src="/images/social2/twitter.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/facebook.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/instagram.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/github.svg" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
							<div className="fugu--footer-menu">
								<span>서비스 이용약관</span>
							</div>
							<div className="fugu--footer-menu">
								<ul>
									<li>
										<a href="/terms/1_20230222.html">이용약관</a>
									</li>
									<li>
										<a href="terms/2_20230804.html">개인정보처리방침</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1 col-md-6 col-sm-6">
							<div className="fugu--footer-menu">
								<span>(주)케이엘피</span>
							</div>
							<div className="fugu--info">
								<ul>
									<li>
										<Link href="#">
											<img src="/images/test/email_icon.png" alt="" />
											master@catchu.kr
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/test/phone_icon.png" alt="" />
											1522-7618
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/test/locale_icon.png" alt="" />
											서울특별시 강남구 강남대로114길 17, 정진빌딩
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/test/seller_icon.png" alt="" />
											사업자 등록번호 : 827-88-01095 ㅣ대표 : 고  원
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/test/tell_icon.png" alt="" />
											통신판매업 신고번호 : 
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--footer-bottom fugu--footer-bottom3">
					<div className="row">
						<div className="col-lg-6">
							<p>&copy; Copyright 2022, All Rights Reserved by Mthemeus</p>
						</div>
						<div className="col-lg-6">
							<div className="fugu--footer-menu">
								<ul>
									<li className="custom-copyright-style">
									 Copyright 2023, CATCH U. All right reserved
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
