import { useDispatch, useSelector } from 'react-redux';
// import { supervisorSlice } from '../Features/indexSlice';
import { reduxStore } from '../Features/indexStates';

export const useSupervisor = () => {

  const {resetState , submitSupervisorForm} = reduxStore.sliceMethods;

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.supervisor);

  const submitForm = (formData) => dispatch(submitSupervisorForm(formData));
  const resetFormState = () => dispatch(resetState());

  return { loading, success, error, submitForm, resetFormState };
};
