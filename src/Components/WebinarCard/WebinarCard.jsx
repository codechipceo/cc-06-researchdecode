import React from "react";
import { Panel, FlexboxGrid } from "rsuite";
import Typography from "../../assets/scss/components/Typography";
import { BsClock, BsCalendar } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import '../../assets/scss/components/webinarCard.scss'
const WebinarCard = ({ webinar }) => {
  const navigate = useNavigate();

  const {
    webinarTitle,
    webinarDescription,
    webinarDate,
    webinarTime,
    webinarLocation,
    webinarMode,
    webinarSpeaker,
    webinarSponsor,
    WebinarBanner,
    _id
  } = webinar;

  // Truncate long descriptions
  const maxDescriptionLength = 80;
  const shortDescription =
    webinarDescription.length > maxDescriptionLength
      ? webinarDescription.slice(0, maxDescriptionLength) + "..."
      : webinarDescription;

  return (
    <div>
      <Panel
        className="webinar-card-one"
        bordered
        onClick={() => navigate(`/webinar/${_id}`)}
      >
        {/* Webinar Banner */}
        <div className="webinar-card-one__image">
          <img src={WebinarBanner} alt="Webinar Banner" />
        </div>

        {/* Webinar Content */}
        <div className="webinar-card-one__content">
          {/* Webinar Header */}
          <FlexboxGrid
            justify="space-between"
            align="middle"
            className="webinar-card-one__header"
          >
            <FlexboxGrid.Item className="webinar-card-one__date-container">
              <BsCalendar />
              <Typography
                size="2xs"
                variant="medium"
                className="webinar-card-one__date-text"
              >
                {webinarDate}
              </Typography>
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className="webinar-card-one__time-container">
              <BsClock />
              <Typography
                size="2xs"
                variant="medium"
                className="webinar-card-one__time-text"
              >
                {webinarTime}
              </Typography>
            </FlexboxGrid.Item>
          </FlexboxGrid>

          {/* Webinar Title */}
          <Typography
            size="md"
            variant="semibold"
            className="webinar-card-one__title"
          >
            {webinarTitle}
          </Typography>

          {/* Webinar Description */}
          <Typography
            size="sm"
            variant="regular"
            className="webinar-card-one__description"
          >
            {shortDescription}
          </Typography>

          {/* Webinar Footer */}
          <FlexboxGrid
            justify="space-between"
            align="middle"
            className="webinar-card-one__footer"
          >
            {/* Speaker Info */}
            <FlexboxGrid.Item className="webinar-card-one__speaker-container">
              <Typography
                size="sm"
                variant="medium"
                className="webinar-card-one__speaker-name"
              >
                Speaker: {webinarSpeaker}
              </Typography>
              <Typography
                size="sm"
                variant="medium"
                className="webinar-card-one__speaker-name"
              >
                Sponsor: {webinarSponsor}
              </Typography>
            </FlexboxGrid.Item>

            {/* Webinar Mode and Sponsor */}
            <FlexboxGrid.Item className="webinar-card-one__info-container">
              <Typography size="sm" className="webinar-card-one__mode">
                Mode: {webinarMode}
              </Typography>
              <Typography
                size="sm"
                className="webinar-card-one__sponsor"
              >
                Location: {webinarLocation}
              </Typography>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
      </Panel>
    </div>
  );
};

export default WebinarCard;
