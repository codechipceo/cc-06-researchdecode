import React from 'react';
import { Panel } from 'rsuite';
import Typography from '../../../assets/scss/components/Typography';
import Consultancy_card from '../../../Components/Consultant_card/Consultancy_card';
import { useConsultancyCard } from '../../../Hooks/useConsultancyCard';
import ConsultCard from '../../../Components/Consultant_card/ConsultCard';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const HireExpert = () => {

  const {
    consultancyCardData: consultancyCards,
  } = useConsultancyCard(4);

  const image = "https://res.cloudinary.com/dsxrpa0ja/image/upload/v1732090327/imgae_eizrwi.png";
  const qualification = "Btech";

  return (
    <Panel className='recommended-courses'>
<div className="recommended-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {/* Left aligned text */}
  <Typography size={"3xl"} variant={"bold"} className={"test-center-hire"} >
    Find Your Research eSupervisor
  </Typography>
  
  {/* Right aligned "View All" link */}
  <Link to="/experts" style={{ textDecoration: 'underline', color: '#49BBBD' }}>
    <Typography size={"lg"}   variant={"bold"} className={"text-center"}>
      View All
    </Typography>
  </Link>
</div>

      <div className='courses-container'>
        {consultancyCards.map((d) => {
          const { title, description, teacherId, _id } = d;
          return (
            <ConsultCard
              data={d}
              key={teacherId}
              image={image}
              title={title}
              description={description}
              name={teacherId?.name || "Unknown"}
              qualification={qualification}
            />
          );
        })}
      </div>
    </Panel>
  );
}

export default HireExpert
