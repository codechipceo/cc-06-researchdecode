import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const determineDeviceType = () => {
      if (window.innerWidth <= 600) {
        setDeviceType("MOBILE");
      } else if (window.innerWidth <= 1024) {
        setDeviceType("TABLET");
      } else {
        setDeviceType("PC");
      }
    };

    determineDeviceType();

    window.addEventListener("resize", determineDeviceType);

    return () => {
      window.removeEventListener("resize", determineDeviceType);
    };
  }, [deviceType]);
  return deviceType;
};
