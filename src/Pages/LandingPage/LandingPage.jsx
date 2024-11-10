import React from 'react';
import Hero from './Section/Hero';
import SearchResearch from "./Section/SearchResearch";
import "./LandingPage.scss";
import RecommendedCourses from './Section/RecommendedCourses';
import WorkshopPromo from './Section/WorkshopPromo';
import ConsultingServices from './Section/ConsultingServices';
import Collaboration from './Section/Collaboration';
import Labs from './Section/Labs';
import Footer from './Section/Footer';
import FAQSection  from './Section/FAQSection';
const LandingPage = () => {
  return (
    <>
    <Hero/>
    <SearchResearch/>
    <RecommendedCourses/>
    <WorkshopPromo/>
    <ConsultingServices/>
    {/* <Collaboration/> */}
    <Labs/>
    <FAQSection />
    <Footer/>
    </>
  );

};

export default LandingPage;
