import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="main-container">
      <Image
        style={{ zIndex: "-9999" }}
        src="/images/background/main_background.png"
        alt="메인 배경 이미지"
        fill
      />
      {/* <div className="custom-visi-float-sm-square">
            <Image src="/images/icons/vi_square_small_float.png" alt="small_square" fill />
          </div>
          <div className="custom-invi-float-sm-square">
            <Image src="/images/icons/invi_square_small_float.png" alt="small_invi_square" fill />
          </div>
          <div className="custom-visi-float-lg-square">
            <Image src="/images/icons/vi_square_large_float.png" alt="large_square" fill />
          </div>
          <div className="custom-invi-float-lg-square">
            <Image src="/images/icons/invi_square_large_float.png" alt="large_invi_square" fill />
          </div> */}

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/icons/play-store.png"
              alt="Modern building architecture"
              contain
              width={100}
              height={50}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
