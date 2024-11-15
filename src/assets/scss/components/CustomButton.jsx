
import classNames from "classnames";
import React from "react";
import { Button } from "rsuite";
import "./customButton.scss";
import { Loader } from 'rsuite';

const CustomButton = ({
  children,
  variant,
  fontWeight,
  Icon,
  className,
  onClick,
  disabled,
  isLoading,
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
    <Button as={Button} appearance="default" disabled={disabled || isLoading} onClick={onClick} className={`${buttonClassnames}`}>
      {/* {children}{" "}
      {Icon && (
        <img
          src={Icon}
          alt="icon"
          style={{
            marginLeft: "8px",
            width: "14px",
          }}
        />
      )} */}
        {isLoading ? (
        <Loader size="sm" />
      ) : (
        <>
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
        </>
      )}
    </Button>
  );

};

export default CustomButton;
