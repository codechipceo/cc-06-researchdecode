import React from "react";
import "./CourseLecture.scss";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
const CourseLecture = () => {
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <>
      <HeaderThree
        breadcrumbPath={breadcrumbPath}
        backgroundImage={"../../../images/banner/bgrp.png"}
      />
    </>
  );
};

export default CourseLecture;
