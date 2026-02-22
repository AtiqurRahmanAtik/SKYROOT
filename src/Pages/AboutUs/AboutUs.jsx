import AboutHero from "../../Components/AboutUs/AboutHero";
import CtaSection from "../../Components/AboutUs/CtaSection";
import Footer from "../../Components/AboutUs/Footer";
import Leadership from "../../Components/AboutUs/Leadership";
import LegacySection from "../../Components/AboutUs/LegacySection";
import MissionVision from "../../Components/AboutUs/MissionVision";
import WhyChooseUs from "../../Components/AboutUs/WhyChooseUs";


const AboutPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <AboutHero />
      <LegacySection />
      <MissionVision />
      <Leadership />
      <WhyChooseUs />
      <CtaSection/>
      <Footer/>
    </div>
  );
};

export default AboutPage;