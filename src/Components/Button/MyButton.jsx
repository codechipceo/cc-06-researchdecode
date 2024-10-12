import { Button } from "@mui/material";

const MyButton = ({
  onClick,
  variant,
  children,
  icon,
  styles,
  iconPosition = "endIcon",
  ...otherProps
}) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "#49bbbd",
      color: "#fff",
      px: 2,
      "&:hover": {
        backgroundColor: "#49bbaa",
      },
      ...styles,
    },
    secondary: {
      backgroundColor: "#EAFFF9",
      color: "#49bbbd",
      px: 2,
      border: "1px solid rgba(234, 255, 249, 1)",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      "&:hover": {
        backgroundColor: "#EAFFF5",
      },
      ...styles,
    },
    light: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "#49bbbd",
      px: 2,
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      ...styles,
    },
  };

  const props = {
    onClick,
    [iconPosition]: icon,
    sx: buttonStyles[variant],
    ...otherProps,
  };

  if (icon) {
    return <Button {...props}>{children}</Button>;
  }
  return (
    <Button onClick={onClick} {...otherProps} sx={buttonStyles[variant]}>
      {children}
    </Button>
  );
};

export default MyButton;
