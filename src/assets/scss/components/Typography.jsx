import classNames from "classnames";
import React from "react";

const Typography = ({ size, variant, children, className }) => {
  const typographyClasses = classNames(className, {
    [`font-${size}`]: size,
    [`font-${size}--${variant}`]: variant,
  });

  return <div className={typographyClasses}>{children}</div>;
};

export default Typography;
