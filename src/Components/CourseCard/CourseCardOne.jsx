import React from "react";
import { Panel, FlexboxGrid } from "rsuite";
import Typography from "../../assets/scss/components/Typography";
import { BsClock } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import "../../assets/scss/components/CourseCardOne.scss";
import { useNavigate } from "react-router-dom";

const CourseCardOne = ({ course }) => {
  console.log(course);

  const navigate = useNavigate();

  const {
    _id,
    title,
    description,
    category,
    duration,
    instructor: { name, avatar },
    originalPrice,
    discountedPrice,
    thumbnailUrl,
  } = course;

  return (
    <div>
      <Panel
        className="course-card-one"
        bordered
        onClick={() => navigate(`/course/${_id}`)}
      >
        <div className="course-card-one__image">
          <img src={thumbnailUrl} alt="Course Thumbnail" />
        </div>

        <div className="course-card-one__content">
          <FlexboxGrid
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
              </Typography>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className="course-card-one__duration-container">
              <BsClock />
              <Typography
                size="2xs"
                variant="medium"
                className="course-card-one__duration-text"
              >
                {duration}
              </Typography>
            </FlexboxGrid.Item>
          </FlexboxGrid>

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
            {description}
          </Typography>

          <FlexboxGrid
            justify="space-between"
            align="middle"
            className="course-card-one__footer"
          >
            <FlexboxGrid.Item className="course-card-one__instructor-container">
              <img
                src={avatar}
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

            <FlexboxGrid.Item className="course-card-one__price-container">
              <Typography size="sm" className="course-card-one__original-price">
                ₹{originalPrice}
              </Typography>
              <Typography
                size="24px"
                variant="bold"
                className="course-card-one__discounted-price"
              >
                ₹{discountedPrice}
              </Typography>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
      </Panel>
    </div>
  );
};

export default CourseCardOne;