import React from 'react';
import { Button } from 'rsuite';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import RightArrowIcon from '../../../assets/Icons/RightArrowIcon.svg'
import { useNavigate } from 'react-router-dom';
const ConsultingServices= () => {
  const navigate = useNavigate();
  return (
    <div className="consulting-section">
      <div className="overlay">
        <div className="content">
          <h1>IT Consulting services</h1>
          <p>
            Current state of IT does not align with your business strategy? Request our IT consulting services now.
          </p>
          <CustomButton onClick={()=>{navigate("/consultancy")}} Icon={RightArrowIcon} variant="primary" className={"btn-size-7 "} >
            Talk to Us
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;