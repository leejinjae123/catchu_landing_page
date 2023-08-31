
const VideoComponent = ({ scrollToHeroSection }) => {
  
    const handleButtonClick = () => {
      scrollToHeroSection(); // 원하는 스크롤 동작 실행
    };
  
    return (
      <div className="video-background">
          <video src="/video/intro.mp4" loop autoPlay muted />
      </div>
    );
  };
  
  export default VideoComponent;