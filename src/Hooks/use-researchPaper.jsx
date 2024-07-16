import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios/axios";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingRequests,
  getRequestById,
  selectPendingRequests,
  selectRequestDetail,
} from "../Features/Slices/requestResearchPaper";
// export const useResearchPaper = () => {
//   const [doiNumber, setDoiNumber] = useState("");

//   const doiApiPath =
//     "https://api.crossref.org/works/10.1179/1942787514y.0000000039";

//   const handleSearch = async (e, doiNumber) => {
//     e.preventDefault();

//     const { data, status } = await axios
//       .get(`${doiApiPath}`)
//       .then((res) => {
//         const data = res.data;
//         const status = res.status;
//         return { data, status };
//       });
//   };

//   return {
//     doiNumber,
//     setDoiNumber,
//     handleSearch,
//   };
// };

export const useResearchPaper = () => {
  const [doiNumber, setDoiNumber] = useState("");
  const [researchPaper, setResearchPaper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const doiApiPath =
    "https://api.crossref.org/works/10.1179/1942787514y.0000000039";

  const handleSearch = async (e, doiNumber) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const { data, status } = await axios.get(`${doiApiPath}`).then((res) => {
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
    isError,
    handleSearch,
  };
};

export const usePendingRequests = () => {
  const dispatch = useDispatch();
  const pendingRequests = useSelector(selectPendingRequests);



  useEffect(() => {
    dispatch(getPendingRequests());
  }, [dispatch]);

  return {
    pendingRequests,


  };
};
