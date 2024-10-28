import React from "react";
import { Button } from "rsuite";
import "./customButton.scss";
import classNames from "classnames";

const CustomButton = ({ children, variant }) => {
  const buttonClassnames = classNames({
    "primary-button": variant === "primary",
    "secondary-button": variant === "secondary",
  });
  console.log(buttonClassnames);

  return <Button className={buttonClassnames}>{children}</Button>;
};

export default CustomButton;
