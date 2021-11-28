/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom'

const MenuComponent = styled(MenuIcon)`
  border: 1px solid #4690ff;
  font-size: 2rem;
  color: #4690ff;
  border-radius: 3px;
  border-spacing: 12px;
  cursor: pointer;
`;

const NavbarComponent = styled(AppBar)({
  backgroundColor: "#ffffff",
  color: "#3b3b3b",
  padding: "0 2vw",
});

const LinkComponent = styled("li")({
  cursor: "pointer",
  listStyle: "none",
  padding: "2px 5px",
  color: "#3b3b3b",
  fontWeight: 500,
  fontSize: "0.9rem",
  position: "relative",
  letterSpacing: "1px",
  opacity: "0.8",
  ":hover": {
    opacity: "1",
  },
  ":before": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "3px",
    bottom: "0",
    left: "0",
    backgroundColor: "#4690FF",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  ":hover:before": {
    visibility: "visible",
    width: "100%",
  },
  "&.active": {
    opacity: "1",
    ":before": {
      visibility: "visible",
      width: "100%",
    },
  },
});

const Drawer = styled("div")`
  background-color: white;
  padding: 20px;
`;

const HideOnScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = (props) => {
  const [show, setShowDrawer] = useState(false);

  const smartphoneMin = useMediaQuery("(min-width:320px)");
  const smartphoneMax = useMediaQuery("(min-width:480px)");
  const tabletMin = useMediaQuery("(min-width:600px)");
  const tabletMax = useMediaQuery("(min-width:801px)");
  const desktopMin = useMediaQuery("(min-width:1025px)");
  const desktopMax = useMediaQuery("(min-width:1281px)");

  const showDrawer = () => {
    setShowDrawer(!show);
  };

  const onContentClick = (lokasi, nav) => {
    const allActiveClass = document.querySelector(".active");
    if (allActiveClass) {
      allActiveClass.classList.remove("active");
    }

    const element = document.getElementById(lokasi);
    const navElement = document.getElementById(nav);
    navElement.classList.add("active");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const onMobileNavClick = (lokasi, nav) => {
    const allActiveClass = document.querySelector(".active");
    if (allActiveClass) {
      allActiveClass.classList.remove("active");
    }

    const element = document.getElementById(lokasi);
    const navElement = document.getElementById(nav);
    navElement.classList.add("active");
    element.scrollIntoView({ behavior: "smooth" });
    setShowDrawer(!show);
  };

  const scrollOnTop = () => {
    const element = document.getElementById("top");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const Nav = () => {
    return (
      <>
        <LinkComponent
          id="nav-beranda"
          underline="none"
          onClick={() => onContentClick("beranda", "nav-beranda")}
        >
          Beranda
        </LinkComponent>
        <LinkComponent
          id="nav-lokasi"
          underline="none"
          onClick={() => onContentClick("lokasi", "nav-lokasi")}
        >
          Lokasi
        </LinkComponent>
        <LinkComponent
          id="nav-monitoring"
          underline="none"
          onClick={() => onContentClick("monitoring", "nav-monitoring")}
        >
          Monitoring
        </LinkComponent>
        {/* <LinkComponent
          id="nav-artikel"
          underline="none"
          onClick={() => onContentClick("artikel", "nav-artikel")}
        >
          Artikel
        </LinkComponent> */}
        <LinkComponent
          id="nav-donasi"
          underline="none"
          onClick={() => onContentClick("donasi", "nav-donasi")}
        >
          Donasi
        </LinkComponent>
        {/* <LinkComponent underline="none" onClick={console.log("login")}>
        <Link to={'/dashboard'} style={{textDecoration: "none"}}>Login</Link>
        </LinkComponent> */}
      </>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <NavbarComponent position="fixed">
          <Toolbar>
            <FlashOnOutlinedIcon sx={{ color: "#4690FF" }} />
            <Typography
              variant="h6"
              component="div"
              onClick={scrollOnTop}
              sx={{
                flexGrow: 1,
                fontWeight: "700",
                color: "#3b3b3b",
                opacity: "0.9",
                cursor: "pointer",
              }}
            >
              Sragi Energi
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 2,
                },
              }}
            >
              {desktopMin ? <Nav /> : <MenuComponent onClick={showDrawer} />}
            </Box>
          </Toolbar>
          {show ? (
            <Drawer>
              <LinkComponent
                id="nav-beranda"
                underline="none"
                onClick={() => onMobileNavClick("beranda", "nav-beranda")}
              >
                Beranda
              </LinkComponent>
              <LinkComponent
                id="nav-lokasi"
                underline="none"
                onClick={() => onMobileNavClick("lokasi", "nav-lokasi")}
              >
                Lokasi
              </LinkComponent>
              <LinkComponent
                id="nav-monitoring"
                underline="none"
                onClick={() => onMobileNavClick("monitoring", "nav-monitoring")}
              >
                Monitoring
              </LinkComponent>
              {/* <LinkComponent
                id="nav-artikel"
                underline="none"
                onClick={() => onMobileNavClick("artikel", "nav-artikel")}
              >
                Artikel
              </LinkComponent> */}
              <LinkComponent
                id="nav-donasi"
                underline="none"
                onClick={() => onMobileNavClick("donasi", "nav-donasi")}
              >
                Donasi
              </LinkComponent>
              {/* <LinkComponent underline="none" onClick={console.log("login")}>
              <Link to={'/dashboard'} style={{textDecoration: "none"}}>Login</Link>
              </LinkComponent> */}
            </Drawer>
          ) : (
            ""
          )}
        </NavbarComponent>
      </HideOnScroll>
    </Box>
  );
};

export default Header;
