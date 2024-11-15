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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      console.log("Token from URL:", token);
      const verifyUser = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5001/user/student/verify",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Response data:", response.data);
        } catch (error) {
          console.error("Error verifying token:", error);
        }
      };

      verifyUser();
    }
  }, [location]);

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
