import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function HideAppBar() {
  
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Typography>JosiAlex</Typography>
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
  );
}
