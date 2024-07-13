import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useVideo = () => {
  // ###########################################
  //                 STATES
  // ###########################################
  const dispatch = useDispatch();
  const { getAllVideos } = reduxStore.sliceMethods;
  const {
    selectVideos,
    selectVideoById,
    videoTotalCount,
    selectVideoLoadingStatus,
    selectVideoErrorStatus,
  } = reduxStore.states;
  const videoData = useSelector(selectVideos);
  const videoById = useSelector(selectVideoById);
  const videoCount = useSelector(videoTotalCount);
  const isVideoLoading = useSelector(selectVideoLoadingStatus);
  const isVideoError = useSelector(selectVideoErrorStatus);

  // ###########################################
  //                 GET ALL Videos
  // ###########################################

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch, getAllVideos ]);

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################

  return {
    videoData,
    videoById,
    videoCount,
    isVideoLoading,
    isVideoError,
  };
};
