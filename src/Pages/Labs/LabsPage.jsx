import React from "react";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";

const breadcrumbPath = [{ label: "Home", path: "/" }];

const LabsPage = () => {
  return (
    <div>
      <HeaderTwo title="Explore Labs" breadcrumbPath={breadcrumbPath} />
    </div>
  );
};

export default LabsPage;
