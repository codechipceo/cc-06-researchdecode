import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AboutOne } from "../../Components/About/AboutOne";
import { HeaderOne } from "../../Components/Headers/HeaderOne";
import { OurCourses } from "./OurCourses";
import { OurExperts } from "./OurExperts";
import { UpcomingEvents } from "./UpcomingEvents";

export const Home = () => {
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
    <div>
      <HeaderOne />
      <OurExperts />
      <AboutOne />
      <OurCourses />
      <UpcomingEvents />
    </div>
  );
};
