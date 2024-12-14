import { useState, useCallback } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    show: openModal,
    hide: closeModal,
  };
};

export default useModal;
