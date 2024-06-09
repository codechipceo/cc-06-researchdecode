import ResponsiveAppBar from "../Navbar/Navbar";
import PropTypes from "prop-types";
export const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};
DefaultLayout.propTypes = { children: PropTypes.func };
