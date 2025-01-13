import React from 'react'
import { HeaderTwo } from '../../Components/Headers/HeaderTwo'
import Subscribed_courses from './Subscribed_courses';

function Mycourse() {
    const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
        <HeaderTwo title="MY COURSES" breadcrumbPath={breadcrumbPath} />
        <Subscribed_courses/>
    </div>
  )
}

export default Mycourse
