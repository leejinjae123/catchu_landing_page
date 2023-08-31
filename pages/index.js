import ContentWithPhotoSection from "@/components/content-with-photo-section";
import CtaHomeOne from "@/components/cta-home-one";
import FaqHomeOne from "@/components/faq-home-one";
import FeatureSectionThree from "@/components/feature-section-three";
import FeatureSectionTwo from "@/components/feature-section-two";
import FloatingSection from "@/components/floation-section";
import AboutSection from "@/components/function_list/about-section";
import ArtWorkSection from "@/components/function_list/art-work-section";
import HeroSection from "@/components/hero-section";
import ShoppingGrid from "@/components/shopping-grid";
import ClientSliderOne from "@/components/sliders/client-slider-one";
import VideoComponent from "@/components/video-component";
import ViewPort from "@/components/view-port";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Element, Link, scroller } from "react-scroll";

const sections = [
	{ name: "section0", component: AboutSection },
	{ name: "section1", component: ArtWorkSection },
	{ name: "section2", component: AboutSection },
	{ name: "section3", component: ArtWorkSection },
	{ name: "section4", component: AboutSection },
	{ name: "section5", component: ArtWorkSection },
  ];

export default function Home() {

	const [showVideoComponent, setShowVideoComponent] = useState(true);

	useEffect(() => {
		function handleScroll(e) {
		  if (e.deltaY > 0 && showVideoComponent) {
			e.preventDefault();
			scrollToHeroSection();
		  }
		}
	  
		function handleTouchStart(e) {
		  if (showVideoComponent) {
			e.preventDefault();
			scrollToHeroSection();
		  }
		}
	  
		window.addEventListener('wheel', handleScroll, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, { passive: false });
	  
		return () => {
		  window.removeEventListener('wheel', handleScroll);
		  window.removeEventListener('touchstart', handleTouchStart);
		};
	  }, [showVideoComponent]);
	
	  const scrollToHeroSection = () => {
		scroller.scrollTo('heroSection', {
		  duration: 5,
		  smooth: 'easeInOutQuart',
		});
		setTimeout(() => {
			setShowVideoComponent(false);
		  }, 1000)
	  };

  return (
    <>
      <Head>
        <title>CatchU</title>
      </Head>
	  {showVideoComponent && <VideoComponent />}
      <Element name="heroSection">
        <HeroSection />
      </Element>
      <ContentWithPhotoSection />
      <FloatingSection />
      <FeatureSectionTwo />
      <FeatureSectionThree />
      <ShoppingGrid />
	  {sections.map((section, index) => (
        <Element key={section.name} name={section.name}>
          <ViewPort>
            <section.component />
          </ViewPort>
        </Element>
      ))}
      <Link to={sections[0].name} />
      <FaqHomeOne />
      <ClientSliderOne />
      <CtaHomeOne />
	  <Link to="heroSection" />
    </>
  );
}

export async function getStaticProps() {
  return { props: { header: "one", footer: "one" } };
}
