import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector }  from 'react-redux'
import { collabState, getAllCollaborations } from '../Features/Slices/collaborationSlice'
export const useCollaboration = ( limit,skip, search) => {
  const collaborationState = useSelector(collabState);

  const dispatch = useDispatch();

  // Throttle timeout reference
  const throttleTimeout = useRef(null);

  useEffect(() => {
    // Clear any existing timeout to throttle requests
    if (throttleTimeout.current) {
      clearTimeout(throttleTimeout.current);
    }

    // Set a new timeout to dispatch the action
    throttleTimeout.current = setTimeout(() => {
      dispatch(getAllCollaborations({ limit, skip, search }));
    }, 300); // Adjust delay as needed (300ms is a common throttle time)

    // Cleanup timeout on unmount or when dependencies change
    return () => {
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [limit, skip, search, dispatch]);

  return {
    data: collaborationState,
  };
}
