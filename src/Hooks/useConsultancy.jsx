import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConsultancyData } from "../Features/Slices/consultancySlice";

export const useConsultancy = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectConsultancyData);
 
  return {};
};
