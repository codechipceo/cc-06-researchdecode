import React from 'react';
import { Panel, PanelGroup } from 'rsuite';
import { FaFolderOpen } from 'react-icons/fa';
import '../../assets/scss/components/CourseCurriculum.scss';

const CourseCurriculum = ({ course }) => {

  return (
    <div className="course-curriculum-container">
<<<<<<< HEAD
      <h4>Curriculum</h4>
=======
>>>>>>> daffc8cb5e27f4917e80e5e7ebd2df581a91e72f
      <PanelGroup accordion bordered>
        {course.map((lesson, index) => (
          <Panel
            key={lesson._id}
            header={
              <div className="course-section-header">
                <span className="section-title">{lesson.videoTitle}</span>
              </div>
            }
          >
            <div className="lesson-item">
              <FaFolderOpen size={20} className="icon" />
              <span className="lesson-title">
                {lesson.videoTitle}
              </span>
     
            </div>
          </Panel>
        ))}
      </PanelGroup>
    </div>
  );
};

export default CourseCurriculum;
