import React, { useState } from "react";
import LockheedMartinLogo from "../assets/lockheed.jpg";

// Grouping all MUI component imports together
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// Grouping all MUI icon imports together
import AccountCircleTwoTone from "@mui/icons-material/AccountCircleTwoTone";
import ApiTwoTone from "@mui/icons-material/ApiTwoTone";
import BuildCircleTwoTone from "@mui/icons-material/BuildCircleTwoTone";
import DashboardTwoTone from "@mui/icons-material/DashboardTwoTone";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import HomeTwoTone from "@mui/icons-material/HomeTwoTone";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
const drawerWidth = 240;
const collapsedDrawerWidth = 72;

function Header({ title }) {
  // State to keep track of whether the drawer is open or not
  const [open, setOpen] = useState(true);

  // Function to open the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Function to close the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Array of objects representing the buttons in the drawer
  const buttons = [
    {
      icon: <HomeTwoTone />, // MUI icon for the button
      href: "/", // URL to navigate to when the button is clicked
      text: "Home", // Text to display on the button
    },
    {
      icon: <EditTwoTone />,
      href: "/edit-selection",
      text: "Edit Shortages",
    },
  ];

  return (
    <div className="md:self-start top-0 sticky z-10 drop-shadow-lg">
      {/**DESKTOP Sidebar with Custom Div */}
      <div
        className={`hidden md:flex top-0 left-0 h-[100vh] z-10 transition-all duration-300 ${
          open ? `w-${drawerWidth}` : `w-${collapsedDrawerWidth}`
        }`}
      >
        <div className="flex flex-col h-full bg-gray-100 p-4 items-center justify-between">
          <div className="space-y-5">
            <div
              className={`${open ? "justify-center" : "justify-center"} flex`}
            >
              <IconButton
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                size={open ? "medium" : "small"}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              {open ? (
                <a href={"/"}>
                  <img
                    src={LockheedMartinLogo}
                    className="bg-blue-500 w-[100px] rounded-lg"
                  />
                </a>
              ) : (
                <a href={"/"}>
                  <img
                    src={LockheedMartinLogo}
                    className="bg-blue-500 w-[50px] rounded-lg"
                  />
                </a>
              )}
              {open ? (
                <h1 className="text-2xl text-gray-500">LM Daily Shortages</h1>
              ) : (
                <></>
              )}
            </div>
            {open ? (
              <div className="flex flex-col space-y-2">
                {buttons.map((button, i) => (
                  <Button
                    startIcon={button.icon}
                    className="flex flex-row items-center justify-start w-full"
                    key={i}
                    href={button.href}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {buttons.map((button, i) => (
                  <Tooltip title={button.text} key={i}>
                    <IconButton
                      href={button.href}
                      className="hover:text-secondary"
                    >
                      {button.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/**MOBILE header with App Bar */}
      <div className="md:hidden">
        <AppBar className="md:hidden w-full " position="relative">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="body" style={{ fontWeight: "600" }}>
              {title}
            </Typography>
          </Toolbar>
          <Drawer
            open={window.innerWidth >= 768 ? false : open}
            onClose={handleDrawerClose}
            className="md:hidden"
          >
            <div className="flex flex-col h-full bg-gray-100 p-4 items-center justify-between">
              <div className="space-y-5">
                <div
                  className={`${
                    open ? "justify-center" : "justify-center"
                  } flex`}
                >
                  <IconButton
                    onClick={open ? handleDrawerClose : handleDrawerOpen}
                    size={open ? "medium" : "small"}
                  >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                  {/*<img src={LockheedMartinLogo} className='bg-blue-500 w-full'/>*/}
                  {open ? (
                    <a href={"/"}>
                      <img
                        src={LockheedMartinLogo}
                        className="bg-blue-500 w-[100px] rounded-lg"
                      />
                    </a>
                  ) : (
                    <a href={"/"}>
                      <img
                        src={LockheedMartinLogo}
                        className="bg-blue-500 w-[50px] rounded-lg"
                      />
                    </a>
                  )}
                  {open ? (
                    <h1 className="text-2xl text-gray-500">Checklist App</h1>
                  ) : (
                    <></>
                  )}
                </div>
                {open ? (
                  <div className="flex flex-col space-y-2">
                    {buttons.map((button, i) => (
                      <Button
                        startIcon={button.icon}
                        className="flex flex-row items-center justify-start w-full"
                        key={i}
                      >
                        <a
                          href={button.href}
                          target={
                            button.href.startsWith("http") ? "_blank" : "_self"
                          }
                        >
                          {button.text}
                        </a>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {buttons.map((button, i) => (
                      <Tooltip title={button.text} key={i}>
                        <IconButton href={button.href}>
                          {button.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Drawer>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
