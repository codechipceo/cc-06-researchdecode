import React from "react";
import ResponsiveAppBar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Typography from "../../assets/scss/components/Typography"; // Import your custom typography component
import "./HeaderThree.scss"; // Import SCSS for custom styles

export const HeaderThree = ({ title, breadcrumbPath ,backgroundImage}) => {

  const navigate = useNavigate();

  return (
   
    <div className="header-three">
      <ResponsiveAppBar />
      <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Typography size="5xl" variant={"semibold"} className="title">
          {title}
        </Typography>
      </div>
      <div className="breadcrumbs" aria-label="breadcrumb">
        {breadcrumbPath.map((crumb, index) => (
           <React.Fragment key={index}>
          <button
            key={index}
            className="breadcrumb-button"
            onClick={() => navigate(crumb.path)}
          >
            {crumb.label}
          </button>
           <span className="breadcrumb-separator">{">"}</span> 
          </React.Fragment>
          
        ))}
        
        <span className="breadcrumb-current">{title}</span>
      </div>
    </div>
   
  );
};
