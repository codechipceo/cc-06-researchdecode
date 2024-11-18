import classNames from "classnames";
import React from "react";
import { Button } from "rsuite";
import { Loader } from "rsuite";
import { useNavigate } from "react-router-dom";

const CustomButton = ({
  children,
  variant,
  fontWeight,
  Icon,
  className,
  onClick,
  disabled,
  isLoading,
  to,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (to) {
      event.preventDefault(); 
      navigate(to);
    } else if (onClick) {
      onClick(event);
    }
  };

  const buttonClassnames = classNames(className, {
    "primary-button": variant === "primary",
    "font-weight-medium": fontWeight === "medium",
    "font-weight-semibold": fontWeight === "semibold",
    "font-weight-bold": fontWeight === "bold",
    "secondary-button": variant === "secondary",
    "preview-button": variant === "preview",
  });

  return (
    <Button
      as={Button}
      {...props}
      disabled={disabled || isLoading}
      onClick={handleClick}
      className={`${buttonClassnames}`}
    >
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
