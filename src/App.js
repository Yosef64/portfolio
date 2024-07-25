import * as React from "react";
import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import About from "./components/about/About";
import { Link } from "@mui/material";
function HideOnScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function App(props) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography,
    color: "black",
    fontWeight: "bold",
    fontSize: 19,
    fontFamily: "'Sora',sans-serif",
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{bgcolor:"#cce8ea",boxShadow:"none"}}>
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <Div>{"JosiAlex"}</Div>
            <Box
              sx={{
                typography: "body1",
                "& > :not(style) ~ :not(style)": {
                  ml: 7,
                },
                "& a": {
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "'Sora',sans-serif",
                },
                "& a:hover": {
                  color: "black",
                },
              }}
              // onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Skill</Link>
              <Link href="#">Project</Link>
              <Link href="#">Contact</Link>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <About />
    </React.Fragment>
  );
}
