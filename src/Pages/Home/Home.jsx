import { AboutOne } from "../../Components/About/AboutOne";
import { HeaderOne } from "../../Components/Headers/HeaderOne";
import { OurCourses } from "./OurCourses";
import { OurExperts } from "./OurExperts";
import { UpcomingEvents } from "./UpcomingEvents";

export const Home = () => {
  return (
    <div>
      <HeaderOne />
      <OurExperts />
      <AboutOne />
      <OurCourses />
      <UpcomingEvents/>

    </div>
  );
};
