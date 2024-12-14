import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getAllWebinar, 
  selectAllWebinars, 
  selectWebinarById, 
  selectWebinarLoading, 
  selectWebinarError, 
  selectWebinarErrorMessage, 
  selectTotalCount 
} from "../Features/Slices/webinarSlice";

export const useWebinar = (limit, skip, search) => {
  // ###########################################
  //                 STATES
  // ###########################################
  const throttleTimeout = useRef(null);
  const dispatch = useDispatch();

  const webinars = useSelector(selectAllWebinars);
  const webinarById = useSelector(selectWebinarById);
  const isLoading = useSelector(selectWebinarLoading);
  const isError = useSelector(selectWebinarError);
  const errorMessage = useSelector(selectWebinarErrorMessage);
  const totalCount = useSelector(selectTotalCount);

  // ###########################################
  //                 GET ALL WEBINARS
  // ###########################################
  useEffect(() => {
    // Throttle API calls
    if (throttleTimeout.current) {
      clearTimeout(throttleTimeout.current);
    }

    throttleTimeout.current = setTimeout(() => {
      dispatch(getAllWebinar({ limit, skip, search }));
    }, 300); // Adjust delay as needed (e.g., 300ms)

    // Cleanup timeout on component unmount or dependency change
    return () => {
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [limit, skip, search, dispatch]);

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################
  return {
    webinars,
    webinarById,
    isLoading,
    isError,
    errorMessage,
    totalCount,
  };
};
