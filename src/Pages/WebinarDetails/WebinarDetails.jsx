import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectWebinarById, getByIdWebinar } from "../../Features/Slices/webinarSlice";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaBuilding } from "react-icons/fa";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import "../../assets/scss/components/WebinarDetails.scss"; // Import SCSS file

const WebinarDetails = () => {
  const { webinarId } = useParams();
  const dispatch = useDispatch();
  const courseDetail = useSelector(selectWebinarById);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (webinarId) {
      dispatch(getByIdWebinar({ webinarId }));
    }
  }, [dispatch, webinarId]);

  if (!courseDetail) return <div>Loading...</div>;

  const {
    webinarTitle,
    webinarSpeaker,
    webinarSponsor,
    WebinarBanner,
    webinarLocation,
    webinarMode,
    webinarDate,
    webinarTime,
    webinarDescription,
  } = courseDetail;
console.log(webinarDate);

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const formattedDate = webinarDate.split("-").reverse().join("-");
  const webinarDateTime = new Date(`${formattedDate}T${webinarTime}`);

  const updateCountdown = () => {
    const now = new Date();
    const timeDifference = webinarDateTime - now;

    if (timeDifference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setTimeLeft({
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60),
    });
  };

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();

  return () => clearInterval(timer);
}, [webinarDate, webinarTime]);
  

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
      {/* Header */}
      <HeaderThree
        title="Webinar Details"
        breadcrumbPath={breadcrumbPath}
        backgroundImage={"../../../images/banner/bgrp.png"}
      />

      {/* Webinar Content */}
      <img src={WebinarBanner} alt="Webinar Banner" className="webinar-banner" />
      <div className="webinar-layout">
        {/* Webinar Content (70%) */}
        <div className="webinar-details">
          <h1 className="webinar-title">{webinarTitle}</h1>
          <div className="webinar-info">
            <p>
              <FaUser className="icon icon-blue" />
              Speaker: <strong>{webinarSpeaker}</strong>
            </p>
            <p>
              <FaBuilding className="icon icon-green" />
              Sponsored By: <strong>{webinarSponsor}</strong>
            </p>
            <p>
              <FaMapMarkerAlt className="icon icon-red" />
              Location: <strong>{webinarLocation}</strong>
            </p>
            <p>
              <FaCalendarAlt className="icon icon-yellow" />
              Date: <strong>{webinarDate}</strong>
            </p>
            <p>
              <FaClock className="icon icon-purple" />
              Time: <strong>{webinarTime}</strong>
            </p>
            <p>
              <strong>Mode:</strong> {webinarMode}
            </p>
          </div>

          {/* Description */}
          <div className="webinar-description">
            <h2>Abstract</h2>
            <div
              dangerouslySetInnerHTML={{ __html: webinarDescription }}
              className="description-content"
            />
          </div>
        </div>

        {/* Countdown Section (30%) */}
        <div className="webinar-countdown">
      <h2>WEBINAR COUNTDOWN</h2>
      <div className="countdown-container">
        <div className="countdown-item">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="countdown-item">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
      <button className="enroll-btn">Enroll</button>
    </div>
      </div>
    </>
  );
};

export default WebinarDetails;
