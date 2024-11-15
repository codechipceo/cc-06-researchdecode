import React from 'react';
import { Avatar } from 'rsuite';
import Typography from '../../assets/scss/components/Typography';
import '../../assets/scss/components/CourseInstructor.scss';
const ExpertCard = ({course}) => {
  const {name,instructor,courseLanguage}=course;
  const description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.s"
  return (
    <div className="expert-card">
      <Typography size="xl" variant="bold" className="expert-card__title">
        About Experts
      </Typography>

      <div className="expert-card__container">
        {/* Left Column - Photo, Contact, and Stats */}
        <div className="expert-card__left-column">
          <Avatar 
            circle 
            size="lg" 
            className="expert-card__avatar"
        
          />
          
          <Typography size="2xl" variant="bold" className="expert-card__name">
            {name}
          </Typography>

          {/* Contact Info */}
          <div className="expert-card__contact">
            <Typography size="sm" variant="regular" className="expert-card__contact-item">
              <Typography className="expert-card__contact-item-label" variant="bold" size="md">
                Email:
              </Typography>
              <span className="expert-card__contact-item-value">{instructor.email}</span>
            </Typography>
            
          </div>

          {/* Stats */}
          <div className="expert-card__stats">
          

          

            <div className="expert-card__stats-item">
              <Typography size="sm" variant="regular" className="expert-card__stats-item-label">
                Language
              </Typography>
              <Typography size="sm" variant="medium">{courseLanguage}</Typography>
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="expert-card__right-column">
          <Typography size="md" variant="regular" className="expert-card__description">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;