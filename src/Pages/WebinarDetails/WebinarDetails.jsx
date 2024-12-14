import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Nav, Panel, Placeholder } from "rsuite";

import { useDispatch, useSelector } from "react-redux";
import { getByIdWebinar, selectWebinarById } from "../../Features/Slices/webinarSlice";  // Assuming a webinar slice
import { FaAngleRight } from "react-icons/fa";
import { HeaderThree } from '../../Components/Headers/HeaderThree'

const WebinarDetail = () => {
  const { webinarId } = useParams();  // Changed courseId to webinarId
  const dispatch = useDispatch();
  const webinarDetail = useSelector(selectWebinarById);  // Select webinar data from the store

  const [tabValue, setTabValue] = useState("overview");

  if (!webinarId) {
    return <Placeholder.Paragraph rows={1} />;
  }

  const handleTabChange = (eventKey) => {
    setTabValue(eventKey);
  };

  const { webinarName, webinarBanner, presenter, videos } = webinarDetail ?? {};
  console.log(webinarDetail);  // Log the webinar data

  useEffect(() => {
    if (webinarId) {
      dispatch(getByIdWebinar({ webinarId }));  // Fetch webinar data instead of course
    }
  }, [dispatch, webinarId]);

  if (!webinarDetail?.webinarName) return <>Loading...</>;

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
      <HeaderThree title="Webinar Details" breadcrumbPath={breadcrumbPath} backgroundImage={'../../../images/banner/bgrp.png'} />
      <div>
        <div className="BannerWrapper">
          <img src={webinarDetail.webinarBanner} alt={webinarName} className="Banner" />

          <div className="firstbar">
            {/* Assuming you have a webinar-specific Sidebar component */}
            <WebinarSidebar webinar={webinarDetail} firstVideo={videos[0]?._id} />
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
                <Nav.Item eventKey="presenter" className="nav-item-style">
                  Presenter
                </Nav.Item>
              </Nav>

              <Panel bordered>
                {tabValue === "overview" && <WebinarOverview webinar={webinarDetail} />}
                {tabValue === "curriculum" && <WebinarCurriculum webinar={videos} />}
                {tabValue === "presenter" && <WebinarPresenter webinar={webinarDetail} />}
              </Panel>
            </Col>
          </Row>
        </Container>

        {/* Sidebar for small screens only */}
        <div className="sidebar-small" style={{ marginTop: '20px', width: '100%' }}>
          <WebinarSidebar webinar={webinarDetail} firstVideo={videos[0]?._id} />
        </div>
      </div>
    </>
  );
};

export default WebinarDetail;
