import React from 'react'
import { HeaderThree } from '../../Components/Headers/HeaderThree';

const Collaboration = () => {
    const breadcrumbPath = [
      {
        label: "Home",
        path: "/",
      },
   
    ];
    return (
      <div>
        <HeaderThree breadcrumbPath={breadcrumbPath} title={"Collaboration"} />
      </div>
    );
}

export default Collaboration