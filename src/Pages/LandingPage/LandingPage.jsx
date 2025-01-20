import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import ConsultingServices from './Section/ConsultingServices';
import FAQSection from './Section/FAQSection';
import Footer from './Section/Footer';
import Hero from './Section/Hero';
import HireExpert from './Section/HireExpert';
import HomeCollaboration from './Section/HomeCollaboration';
import Labs from './Section/Labs';
import RecommendedCourses from './Section/RecommendedCourses';
import SearchResearch from "./Section/SearchResearch";
import WorkshopPromo from './Section/WorkshopPromo';
const LandingPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <HireExpert/>
      <HomeCollaboration />
      {/* <SearchResearch /> */}
      <WorkshopPromo />
      <RecommendedCourses />
      {/* <ConsultingServices /> */}
      {/* <Labs /> */}
      {/* <FAQSection /> */}
      <Footer />
    </>
  );

};

export default LandingPage;
