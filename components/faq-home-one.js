/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from "react";

export default function FaqHomeOne() {
	const videoRef = useRef(null);
	const [isVideoVisible, setIsVideoVisible] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		if (videoRef.current) {
		  const rect = videoRef.current.getBoundingClientRect();
		  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
			setIsVideoVisible(true);
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

  return (
    <div className="section fugu-section-padding2">
      <div className="container">
        <div className="fugu-default-content large-content">
          <h2>지금 갖고 싶은 상품이 있나요?</h2>
        </div>
        <div
          style={{
			height:"60vh",
			display: 'flex',
			justifyContent: 'center', /* 가로 정렬 */
			alignItems: 'center', /* 세로 정렬 */
          }}
        >
          <video
		  	ref={videoRef}
            style={{
			position:"absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="/video/ios_button.webm"
            muted
          />
        </div>
      </div>
    </div>
  );
}
