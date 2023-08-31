/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

export default function CtaHomeOne() {
	return (
		<div className="fugu-hero-end">
			 <Image
           style={{zIndex:"-9999"}}
          src="/images/test/background_end.png"
          alt="메인 배경 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-5">
						<img src="/images/test/ending_phone.png" alt="title" />
					</div>
					<div className="col-xl-6 col-lg-7">
						<div className="fugu-hero-content">
							<h1 className="custom-white-title" data-wow-delay="0s">
								쇼핑도<br />게임처럼 재밌게
							</h1>
							<div className="divider"></div>
							<h3 className="custom-white-detail" data-wow-delay="0.25s">
								신개념 명품 플랫폼 캐치유!<br />
								가품걱정, 배송걱정, 시간낭비는 이제 그만! <br />
								이젠 캐치유에서 쉽고 편하고 재밌게 명품 쇼핑하자!
							</h3>
							<div className="fugu-app-btn-wrap wow fadeInUpX" data-wow-delay="0.40s">
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-app-btn">
										<img src="/images/all-img/app-store.png" alt="title" />
									</a>
								</Link>
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-app-btn">
										<img src="/images/all-img/play-store.png" alt="title" />
									</a>
								</Link>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
