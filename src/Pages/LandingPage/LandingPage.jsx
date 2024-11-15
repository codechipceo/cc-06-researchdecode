import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import "./LandingPage.scss";
import ConsultingServices from './Section/ConsultingServices';
import FAQSection from './Section/FAQSection';
import Footer from './Section/Footer';
import Hero from './Section/Hero';
import Labs from './Section/Labs';
import RecommendedCourses from './Section/RecommendedCourses';
import SearchResearch from "./Section/SearchResearch";
import WorkshopPromo from './Section/WorkshopPromo';
const LandingPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <SearchResearch />
      <RecommendedCourses />
      <WorkshopPromo />
      <ConsultingServices />
      {/* <Collaboration/> */}
      <Labs />
      <FAQSection />
      <Footer />
    </>
  );

};

export default LandingPage;
