import React from 'react';
import { Button } from 'rsuite';
import "./Labs.scss"
import Labsimg from './images/2dd71d5ea1975b594bbce4a62c879754.png'
import { useNavigate } from 'react-router-dom';
const Labs = () => {
  const navigate = useNavigate()
  return (
 <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Engage Highly<br />
          Qualified Experts<br />
          & Reputed Labs.
        </h1>
        <p className="hero-text">
          Serving Millions of physicians and biomedical scientists<br />
          in Industry and academia.
        </p>
        <Button onClick={()=>{navigate("/labs")}} appearance="ghost" className="request-button">
          Request a Service
        </Button>
      </div>
      <div className="hero-image">
        <img src={Labsimg} alt="Laboratory Equipment" />
      </div>
    </div>
  )
}

export default Labs
