import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios/axios";
import axios from "axios";
export const useResearchPaper = () => {
  const [doiNumber, setDoiNumber] = useState("");

  const doiApiPath =
    "https://api.crossref.org/works/10.1179/1942787514y.0000000039";
  const handleSearch = async (e, doiNumber) => {
    e.preventDefault();

    const { data, status } = await axios
      .get(`${doiApiPath}`)
      .then((res) => {
        const data = res.data;
        const status = res.status;
        return { data, status };
      });
  };

  return {
    doiNumber,
    setDoiNumber,
    handleSearch,
  };
};
