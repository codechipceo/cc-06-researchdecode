import React from "react";
import { Button } from "rsuite";
import "./customButton.scss";
import classNames from "classnames";

const CustomButton = ({
  children,
  variant,
  fontWeight,
  Icon,
  className,
  onClick,
}) => {
  const buttonClassnames = classNames(className, {
    "primary-button": variant === "primary",
    "font-weight-medium": fontWeight === "medium",
    "font-weight-semibold": fontWeight === "semibold",
    "font-weight-bold": fontWeight === "bold",
    "secondary-button": variant === "secondary",
    "preview-button": variant === "preview",
  });

  return (
    <Button onClick={onClick} className={buttonClassnames}>
      {children}{" "}
      {Icon && (
        <img
          src={Icon}
          alt="icon"
          style={{
            marginLeft: "8px",
            width: "14px",
          }}
        />
      )}
    </Button>
  );
};

export default CustomButton;
