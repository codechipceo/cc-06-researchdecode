import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllConsultancyCard,
  selectConsultancyCardErrorStatus,
  selectConsultancyCardLoadingStatus,
  selectConsultancyCards,
  consultancyCardTotalCount,
} from "../Features/Slices/consultancyCardSlice";

export const useConsultancyCard = (limit = 9, skip = 0, search = "") => {
  const dispatch = useDispatch();

  const consultancyCardData = useSelector(selectConsultancyCards) ?? [];
  const consultancyCount = useSelector(consultancyCardTotalCount) ?? 0;
  const isLoading = useSelector(selectConsultancyCardLoadingStatus);
  const isError = useSelector(selectConsultancyCardErrorStatus);

  useEffect(() => {
    const payload = {
      skip,
      limit,
      search: search.trim(),
    };
    dispatch(getAllConsultancyCard(payload));
  }, [skip, limit, search, dispatch]);

  

  return {
    consultancyCardData: consultancyCardData,
    consultancyCount: consultancyCount,
    isLoading,
    isError,
  };
};
