import React from "react";

import bgcl from "../../assets/Images/a1.jpeg";
import { HeaderThree } from "../../Components/Headers/HeaderThree";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getVideosByCourseId,
  selectVideosByCourseId,
} from "../../Features/Slices/videoSlice";

const CourseLecture = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const { courseId } = useParams();

  const dispatch = useDispatch();
  const videos = useSelector(selectVideosByCourseId);

  useEffect(() => {
    if (courseId) {
      dispatch(getVideosByCourseId({ courseId }));
    }
  }, [dispatch, courseId]);

  useEffect(() => {
    if (videos.length > 0) {
      setCurrentVideo(videos[0]);
    }
  }, [videos]);

  const handlePlaylistClick = (video) => {
    setCurrentVideo(video);
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
      <HeaderThree
        title="Course Lecture"
        breadcrumbPath={breadcrumbPath}
        backgroundImage="../../../images/banner/bgrp.png"
      />
      <div className="course-container">
        <div className="main-content">
          <div className="video-container">
            {currentVideo ? (
              <video
                key={currentVideo._id}
                controls
                autoPlay
                className="fullvideo"
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>No videos available for this course.</p>
            )}
          </div>
          {currentVideo && (
            <h1 className="course-title">{currentVideo.videoTitle}</h1>
          )}
        </div>

        <div className="playlist-container">
          <h2 className="playlist-title">Course Playlists</h2>
          {videos.length > 0 ? (
            videos.map((video) => (
              <div
                key={video._id}
                className="playlist-item"
                onClick={() => handlePlaylistClick(video)}
              >
                <img
                  src={
                    video.thumbnail ||
                    "https://via.placeholder.com/100x60?text=No+Thumbnail"
                  }
                  alt={video.videoTitle}
                  className="playlist-thumbnail"
                />

                <div className="item-details">
                  <div className="item-title">{video.videoTitle}</div>
                  <div className="item-duration">{video.duration}</div>
                </div>
              </div>
            ))
          ) : (
            <p>No videos found in the playlist.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseLecture;
