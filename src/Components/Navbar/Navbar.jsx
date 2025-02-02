import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Icons/Logo.svg";
import LogoBlackText from "../../assets/Icons/LogoBlackText.svg";

import {
  logout,
  selectStudentInfo,
  selectStudentToken,
} from "../../Features/Slices/studentSlice";
import { featureFlag, features } from "../../Utils/featureFlag";
const localPages = [
  {
    navLink: "Home",
    navPath: "/",
  },
  {
    navLink: "Research",
    navPath: "/searchPaper",
  },
  {
    navLink: "Consultancy",
    navPath: "/experts",
  },
    {
    navLink: "Courses",
    navPath: "/courses",
  },

  {
    navLink: "Collaboration",
    navPath: "/collaboration",
  },


];

const prodPages = [
    {
    navLink: "Home",
    navPath: "/",
  },
  {
    navLink: "Research",
    navPath: "/searchPaper",
  },
  {
    navLink: "Consultancy",
    navPath: "/experts",
  },
    {
    navLink: "Webinars",
    navPath: "/webinars",
  },
  {
    navLink: "Collaboration",
    navPath: "/collaboration",
  },

];

const pages = featureFlag(features.NAVBAR) ? localPages : prodPages;
const prodSettings = [
  { name: "Inbox", path: "inbox" },
  { name: "Paper Requests", path: "my-requests" },
  { name: "My Collaboration", path: "my-collaborations" },
  { name: "My Webinars", path: "my-webinars" },
];
const localSettings = [
  ...prodSettings,
  { name: "Active Consultancy", path: "my-consultancy" },
  { name: "My Courses", path: "my-courses" },
];

const settings = featureFlag(features.NAVBAR)
  ? [...localSettings]
  : [...prodSettings];
function ResponsiveAppBar() {
  const token = useSelector(selectStudentToken);
  const studentInfo = useSelector(selectStudentInfo);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentInfo");
    dispatch(logout());
    navigate("/");
  };
  const homePage = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 5,
      }}
    >
      <AppBar
        position=''
        sx={{ backgroundColor: "#f4f4f4", color: "black", boxShadow: "0" }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
           <Box 
  component="img" 
  src={LogoBlackText} 
  onClick={homePage} 
  sx={{ cursor: 'pointer', marginLeft: { xs: '0px', lg: '80px' } }} 
/>

            {/* <Typography
              variant='h6'
              noWrap
              component='a'
              onClick={homePage}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#40ba9b",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}

            <Box
              sx={{
                flexGrow: 1,
                color: "black",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='white'
              >
                <MenuIcon sx={{ color: "#49bbbd" }} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.navLink} onClick={handleCloseNavMenu}>
                    <Link
                      style={{ textDecoration: "none", color: "#484848" }}
                      to={page.navPath}
                    >
                      <Typography textAlign='center'>{page.navLink}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "#40ba9b",
              }}
            >
              {/* LOGO */}
            </Typography>
            <div style={{ display: "flex", flex: 1 }}></div>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  key={page.navLink}
                  onClick={handleCloseNavMenu}
                  style={{
                    textDecoration: "none",
                    color: "#484848",
                    marginRight: "20px",
                    fontWeight: "lighter",
                    padding: "1px 4px",
                  }}
                  to={page.navPath}
                >
                  {page.navLink}
                </Link>
              ))}
            </Box>
            {token ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/2.jpg'
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>
                      {studentInfo?.firstName + studentInfo?.lastName}{" "}
                      {studentInfo.points}
                    </Typography>
                  </MenuItem>
                  <hr />
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/${setting.path.toLowerCase()}`}
                      >
                        {setting.name}
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign='center'>Log Out</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to={"/signin"} style={{ textDecoration: "none" }}>
                <Button variant='contained'>Log In</Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
