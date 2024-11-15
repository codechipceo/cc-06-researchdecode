import React from 'react';
import { Panel, Button, Container, Row, Col } from 'rsuite';
import './WorkshopPromo.scss';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import img from './images/image.png';
import img2 from './images/image2.png';
import { useNavigate } from 'react-router-dom';
import RightArrowIcon from '../../../assets/Icons/RightArrowIcon.svg'

const WorkshopPromo = () => {

  const navigate = useNavigate()
  return (
    <Container className="workshop-promo">
      <div className='workshop-container'>
      <Row className="">
        <Col xs={24} md={12} className="image-section">
          <div className="participants-grid">
            <div className="participant main">
              <img src={img} alt="Main participant" className="avatar" />
              </div>
          </div>
        </Col>
        <Col xs={24} md={12} className="content-section">
          <h1>Engage, Learn, Grow</h1>
          <h3>Join Our Upcoming Workshops & Conferences</h3>
          <ul className="feature-list">
            <li>Teachers don't get lost in the grid view and have a dedicated Podium space.</li>
            <li>TAs and presenters can be moved to the front of the class.</li>
            <li>Teachers can easily see all students and class data at one time.</li>
          </ul>
          <CustomButton onClick={()=>{navigate('/consultancy')}} Icon={RightArrowIcon} variant="primary" fontWeight={"semibold"} className="btn-size-7">
            Know More
            {/* <span className="arrow">→</span> */}
          </CustomButton>
        </Col>
      </Row>
      <Row >
        <Col xs={24} md={12} className="content-section">
          <h1>Engage, Learn, Grow</h1>
          <h3>Join Our Upcoming Workshops & Conferences</h3>
          <ul className="feature-list">
            <li>Teachers don't get lost in the grid view and have a dedicated Podium space.</li>
            <li>TAs and presenters can be moved to the front of the class.</li>
            <li>Teachers can easily see all students and class data at one time.</li>
          </ul>
          <CustomButton onClick={()=>{navigate('/consultancy')}} Icon={RightArrowIcon} variant="primary" fontWeight={"semibold"} className="btn-size-7">
            Know More
            {/* <span className="arrow">→</span> */}
          </CustomButton>
        </Col>
        <Col xs={24} md={12} className="image-section">
          <div className="participants-grid">
            <div className="participant main">
              <img src={img2} alt="Main participant" className="avatar" />
              </div>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default WorkshopPromo;
