import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllConsultancyCard,
  selectConsultancyCardErrorStatus,
  selectConsultancyCardLoadingStatus,
  selectConsultancyCards,
} from "../Features/Slices/consultancyCardSlice";

export const useConsultancyCard = (skip, limit) => {
  const dispatch = useDispatch();
  const consultancyCardData = useSelector(selectConsultancyCards) ?? [];
  const isLoading = useSelector(selectConsultancyCardLoadingStatus);
  const isError = useSelector(selectConsultancyCardErrorStatus);

  useEffect(() => {
    const payload = {
      skip: skip ?? 0,
      limit: limit ?? 0,
    };
    dispatch(getAllConsultancyCard(payload));
  }, [skip, limit, dispatch]);
  return {
    consultancyCardData,
    isError,
    isLoading,
  };
};
