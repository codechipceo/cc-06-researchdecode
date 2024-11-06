import React from "react";
import { Panel, Avatar } from "rsuite";
import { BsClock } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Typography from "../../assets/scss/components/Typography";
import "../../assets/scss/components/CourseCard.scss";
import PlayIcon from "../../assets/Images/Play.png";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
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
    <Panel
      shaded
      bordered
      bodyFill
      className="course-card test "
      onClick={() => navigate(`/course/${_id}`)}
    >
      <div className="course-card__content">
        <div className="course-card__thumbnail">
          <img src={thumbnailUrl} alt={title} />
          <div className="play-button">
            <img src={PlayIcon} alt="" />
          </div>
        </div>

        <div className="course-card__details">
          <div className="course-card__meta">
            <div className="meta-item">
              <HiOutlineSquares2X2 size={16} />
              {/* <span>{category}</span> */}
              <Typography size="2xs" variant="medium">
                {category}
              </Typography>
            </div>
            <div className="meta-item">
              <BsClock size={16} />
              <Typography size="2xs" variant="medium">
                {" "}
                {duration}
              </Typography>
            </div>
          </div>

          <Typography
            size="24px"
            variant="semibold"
            className="course-card__title"
          >
            {title}
          </Typography>
          <Typography
            size="sm"
            variant="regular"
            className="course-card__description"
          >
            {description}
          </Typography>

          <div className="course-card__footer">
            <div className="instructor">
              <Avatar circle src={avatar} alt={name} size="sm" />
              <Typography
                size="sm"
                variant="medium"
                className="instructor-name"
              >
                {name}
              </Typography>
            </div>
            <div className="price">
              <Typography size="sm" className="original-price">
                ₹{originalPrice}
              </Typography>
              <Typography
                size="24px"
                variant="bold"
                className="discounted-price"
              >
                ₹{discountedPrice}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default CourseCard;
