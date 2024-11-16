import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation
import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import ConsultingServices from './Section/ConsultingServices';
import FAQSection from './Section/FAQSection';
import Footer from './Section/Footer';
import Hero from './Section/Hero';
import Labs from './Section/Labs';
import RecommendedCourses from './Section/RecommendedCourses';
import SearchResearch from "./Section/SearchResearch";
import WorkshopPromo from './Section/WorkshopPromo';

const LandingPage = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Parse the URL to extract the token
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token"); // Get the 'token' parameter
        console.log(token);
        
        if (!token) {
          console.error("Authorization token is missing.");
          return;
        }

        const response = await axios.post(
          "http://localhost:5001/user/student/verify",
          {},
          {
            headers: {
              authToken: token, 
            },
          }
        );

        console.log("Verification Successful:", response.data);
      } catch (error) {
        console.error("Verification Failed:", error.response?.data || error.message);
      }
    };

    verifyUser();
  }, [location.search]); // Dependency ensures the effect runs when the URL changes

  return (
    <>
      {/* <ResponsiveAppBar />   */}
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
