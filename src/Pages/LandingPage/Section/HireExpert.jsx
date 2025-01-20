import React from 'react'
import { Panel } from 'rsuite';
import Typography from '../../../assets/scss/components/Typography';
import { useConsultancyCard } from '../../../Hooks/useConsultancyCard';
import Consultancy_card from '../../../Components/Consultant_card/Consultancy_card';
const HireExpert = () => {

  const {
    consultancyCardData: consultancyCards,
  } = useConsultancyCard(6);

  const image = "https://res.cloudinary.com/dsxrpa0ja/image/upload/v1732090327/imgae_eizrwi.png";
  const qualification = "Btech";

  return (
    <Panel className="recommended-courses">
      <div className="recommended-header">
        <Typography size={"2xl"} variant={"medium"} className={"recommended-text"}>Find Your Research eSupervisor</Typography>
        <a href="experts" className="see-all">
          See all
          <i className="rs-icon rs-icon-chevron-right"></i>
        </a>
      </div>

      <div className="courses-container">
        {consultancyCards.map((d) => {
          const { title, description, teacherId, _id } = d;
          return (
            <Consultancy_card
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
  )
}

export default HireExpert
