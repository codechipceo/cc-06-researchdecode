import React from "react";
import { Panel, FlexboxGrid } from "rsuite";
import Typography from "../../assets/scss/components/Typography";
import { BsClock } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { MdSend } from "react-icons/md";

const ConsultCard = ({image, title, description, name, qualification, data }) => {
  // console.log(course);

  const navigate = useNavigate();
   const { _id , teacherId } = data
  

  const maxDescriptionLength = 80;
  const shortDescription = description.length > maxDescriptionLength
    ? description.slice(0, maxDescriptionLength) + "..."
    : description;

  return (
    <Panel
      className="course-card-one"
      bordered
    >
      <div className="course-card-one__image">
        <img src={image} alt="Course Thumbnail" />
      </div>

      <div className="course-card-one__content">
        {/* <FlexboxGrid
          justify="space-between"
          align="middle"
          className="course-card-one__header"
        >
          <FlexboxGrid.Item className="course-card-one__category-container">
            <div className="course-card-one__category-icon">
              <HiOutlineSquares2X2 />
            </div>
            <Typography
              size="2xs"
              variant="medium"
              className="course-card-one__category-text"
            >
              {category}
              Editing
            </Typography>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item className="course-card-one__duration-container">
            <BsClock />
            <Typography
              size="2xs"
              variant="medium"
              className="course-card-one__duration-text"
            >
              
            </Typography>
          </FlexboxGrid.Item> 
        </FlexboxGrid> */}

        <Typography
          size="md"
          variant="semibold"
          className="course-card-one__title"
        >
          {title}
        
        </Typography>

        <Typography
          size="sm"
          variant="regular"
          className="course-card-one__description"
        >
          {shortDescription}
        </Typography>

        <FlexboxGrid
          justify="space-between"
          align="middle"
          className="course-card-one__footer"
        >
          <FlexboxGrid.Item className="course-card-one__instructor-container">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt="Instructor"
              className="course-card-one__instructor-image"
            />
            <Typography
              size="sm"
              variant="medium"
              className="course-card-one__instructor-name"
            >
              {name}
              
            </Typography>
          </FlexboxGrid.Item>

        </FlexboxGrid>
          <Typography
              size="14px"
              variant="bold"
              className="card-right-low"
            >
             Qualification :  {qualification}
            </Typography>
        <CustomButton 
          variant="primary" 
          fontWeight="semibold" 
          onClick={() =>navigate(`/supervisor/${_id}`)}
          style={{ marginTop: "16px" }} // Adjust as needed
        >
              Hire Me <MdSend style={{ color: "white", marginLeft: "10px" }} />
        </CustomButton>
      </div>
    </Panel>
  );
};

export default ConsultCard;
