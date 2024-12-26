import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Panel, Placeholder } from "rsuite";
import CourseOverview from "../../Components/CourseCards/CourseOverview";
import CourseCurriculum from "../../Components/CourseCards/CourseCurriculum";
import CourseInstructor from "../../Components/CourseCards/CourseInstructor";
import CourseSidebar from "../../Components/CourseCards/CourseSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById, selectCourseById } from "../../Features/Slices/courseSlice";
import { FaAngleRight } from "react-icons/fa";
import { HeaderThree } from '../../Components/Headers/HeaderThree'


const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courseDetail = useSelector(selectCourseById);


  const [tabValue, setTabValue] = useState("overview");

  if (!courseId) {
    return <Placeholder.Paragraph rows={1} />;
  }

  const handleTabChange = (eventKey) => {
    setTabValue(eventKey);
  };

  const { courseName, courseBanner, instructor, videos } = courseDetail ?? {};

  useEffect(() => {
    if (courseId) {
      dispatch(getCourseById({ courseId }));
    }
  }, [dispatch, courseId]);

  if (!courseDetail?.courseName) return <>Loading...</>;
  const breadcrumbPath = [{ label: "Home", path: "/" }]

  return (
    <>  <HeaderThree title="Course Details" breadcrumbPath={breadcrumbPath} backgroundImage={'../../../images/banner/bgrp.png'} />
      <div>
        <div className="BannerWrapper">
          <img src={courseDetail.courseBanner
          } alt={courseName} className="Banner" />

          <div className="firstbar">
            <CourseSidebar course={courseDetail} firstVideo={videos[0]?._id} />
          </div>
        </div>
        <Container className="container">
          <Row>
            {/* Main Content */}
            <Col xs={24} md={16} style={{ position: 'relative', zIndex: 0 }}>

              <Nav appearance="tabs" activeKey={tabValue} onSelect={handleTabChange}>
                <Nav.Item eventKey="overview" className="nav-item-style">
                  Overview
                </Nav.Item>
                <Nav.Item eventKey="curriculum" className="nav-item-style">
                  Curriculum
                </Nav.Item>
                <Nav.Item eventKey="instructor" className="nav-item-style">
                  Instructor
                </Nav.Item>
              </Nav>


              <Panel bordered>
                {tabValue === "overview" && <CourseOverview course={courseDetail} />}
                {tabValue === "curriculum" && <CourseCurriculum course={videos} />}
                {tabValue === "instructor" && <CourseInstructor course={courseDetail} />}
              </Panel>
            </Col>
          </Row>
        </Container>

        {/* Sidebar for small screens only */}
        <div className="sidebar-small" style={{ marginTop: '20px', width: '100%' }}>
          <CourseSidebar course={courseDetail} firstVideo={videos[0]?._id} />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;