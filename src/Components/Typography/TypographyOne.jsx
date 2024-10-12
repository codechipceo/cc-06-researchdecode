import { Typography } from "@mui/material";

const TypographyOne = ({ variant, children }) => {
  return (
    <Typography variant={variant} sx={{ color: "#49bbbd" }}>
      {children}
    </Typography>
  );
};

export default TypographyOne;
