import React from 'react'
import a from '../../../assets/Images/a3.png'
import Typography from '../../../assets/scss/components/Typography';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import dulingo from '../../../assets/Icons/duolingo.svg';
import codecov from '../../../assets/Icons/codecov.svg';
import usertesting from '../../../assets/Icons/usertesting.svg';
import magicleap from '../../../assets/Icons/magicleap.svg';
import publicicon from '../../../assets/Icons/publicicon.svg';
import career from '../../../assets/Icons/career.svg';
import creative from '../../../assets/Icons/creative.svg';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="content">
        {/* Left Section */}
        <div className="text-section">
          <Typography size={"4xl"} variant={"bold"} className="heading">
            Up Your <span className="highlight">Skills</span> <br /> To <span className="highlight">Advance</span> Your <span className="highlight">Career</span> & Research Path
          </Typography>
          <Typography size={"sm"} variant={"regular"} className="primary-text content-1">Lorem Ipsum is simply simply dummy text of the printing and typesetting industry.</Typography>

          {/* Buttons */}
          <div className="button-group">
            <CustomButton onClick={() => navigate(`/signin`)} variant={"primary"} fontWeight={"semibold"} className="get-started btn-size-11">Get Started</CustomButton>
            <CustomButton onClick={()=> navigate('/supervisorform')} variant={"secondary"} fontWeight={"semibold"} className="free-trial btn-size-14"> Become an expert</CustomButton>
          </div>

          {/* Features */}
          <div className="features">
            <span>
              <img src={publicicon} alt="" />
              <span> Public Speaking</span>
            </span>

            <span>
              <img src={career} alt="" />
              <span> Career-Oriented</span>
            </span>

            <span>
              <img src={creative} alt="" />
              <span>  Creative Thinking</span>
            </span>


          </div>



          {/* Collaboration Info */}
          <div className="collaboration">

            <div className="partners">
              <div className="collaboration-stat">
                <span className="collaboration-stat__number">250+</span>
                <span className="collaboration-stat__label">Collaboration</span>
              </div>
              <img src={dulingo} alt="" />
              <img src={codecov} alt="" />
              <img src={usertesting} alt="" />
              <img src={magicleap} alt="" />

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="image-section">
          <img src={a} alt="Placeholder" />
          {/* Positioned Stats */}
          <div className="stats">
            <div className="stat-item webinars">
              <div className="stat-content">
                <span className="number">2K+</span>
                <span className="label">Webinars</span>
              </div>
            </div>
            <div className="stat-item consultancy">
              <div className="stat-content">
                <span className="number">250+</span>
                <span className="label">Consultancy</span>
              </div>
            </div>
            <div className="stat-item courses">
              <div className="stat-content">
                <span className="number">5K+</span>
                <span className="label">Online Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
