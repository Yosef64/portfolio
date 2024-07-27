import * as React from "react";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Intro from "./components/intro/Intro";
import { Link } from "@mui/material";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Projects from "./components/project/Projects";
import Contact from "./components/contactus/Contact";
import MenuIcon from "@mui/icons-material/Menu";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const pages = [
  {
    href: "#intro",
    page: "Home",
  },
  {
    href: "#about",
    page: "About",
  },
  {
    href: "#skills",
    page: "Skill",
  },
  {
    href: "#project",
    page: "Project",
  },
  {
    href: "#contact",
    page: "Contact",
  },
];

const Div = styled("div")(({ theme }) => ({
  ...theme.typography,
  color: "black",
  fontWeight: "bold",
  fontSize: 19,
  fontFamily: "'Sora',sans-serif",
}));

export default function App(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [curId, setCurId] = React.useState("#intro");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            bgcolor: "rgba(218, 248, 249, 0.8)", // Semi-transparent background
            backdropFilter: "blur(5px)", // Backdrop filter
            boxShadow: "none",
            padding: "0 50px",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Div>{"JosiAlex"}</Div>
            </Box>

            <Box
              sx={{
                typography: "body1",
                "& > :not(style) ~ :not(style)": {
                  ml: 7,
                },
                "& a": {
                  textDecoration: "none",
                  fontFamily: "'Sora',sans-serif",
                },
                "& a:hover": {
                  color: "black",
                },
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              {pages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  sx={{
                    color:
                      item.href === curId ? "#457B9D" : "rgba(0, 0, 0, 0.7)",
                    fontWeight: item.href === curId ? 700 : "normal",
                  }}
                  onClick={() => setCurId(item.href)}
                >
                  {item.page}
                </Link>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                  <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                    <Link
                      href={page.href}
                      sx={{
                        textDecoration: "none",
                        color:
                          page.page === curId ? "black" : "rgba(0, 0, 0, 0.7)",
                      }}
                    >
                      {page.page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box sx={{ overflowX: "hidden" }}>
        <div id="intro">
          <Intro />
        </div>
        <div id="about">
          <Aboutme />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Box>
    </React.Fragment>
  );
}
