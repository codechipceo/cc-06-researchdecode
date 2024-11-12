import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios/axios";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingRequests,
  getRequestById,
  selectPendingRequests,
  selectPendingRequestCount,
  selectRequestDetail,
} from "../Features/Slices/requestResearchPaper";

export const useResearchPaper = () => {
  const [doiNumber, setDoiNumber] = useState("");
  const [researchPaper, setResearchPaper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const doiApiPath = `https://api.crossref.org/works/${doiNumber}`;

  const handleSearch = async (e) => {
    if (!doiNumber?.trim()) return;
    // console.log(doiNumber);
    
    // e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    await axios.get(`${doiApiPath}`).then((res) => {
      const data = res.data;
      setResearchPaper(data.message);
      const status = res.status;
      return { data, status };
    });

    setIsLoading(false);
  };

  return {
    doiNumber,
    setDoiNumber,
    researchPaper,
    isLoading,
    isError,setResearchPaper,
    handleSearch,
  };
};

export const usePendingRequests = () => {
  const dispatch = useDispatch();
  const pendingRequests = useSelector(selectPendingRequests);
  const pendingRequestCount = useSelector(selectPendingRequestCount); // Access the total count
  console.log(pendingRequests);
  // console.log(pendingRequestCount);
  
  // Pagination state
  const [activePage, setActivePage] = useState(1);
  
  const limit = 4; // Number of items per page
  const skip = (activePage - 1) * limit;

  const fetchPendingRequests = () => {
    dispatch(getPendingRequests({ limit, skip }));
  };

  useEffect(() => {
    fetchPendingRequests();
  }, [dispatch, activePage]);

  return {
    pendingRequestCount,
    pendingRequests,
    activePage,
    setActivePage,
    limit,
  };
};