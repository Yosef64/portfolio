import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutMe() {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <img
            src="/asset/coding.svg"
            alt="img"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
          p: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ width: { xs: "90%", sm: "80%", md: "100%" } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: "'Sora', sans-serif",
              color: "#457B9D",
              fontWeight: 600,
            }}
          >
            About
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontFamily: "'Sora', sans-serif",
              fontSize: { xs: 24, md: 27 },
              fontWeight: 900,
            }}
          >
            About Me?
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: { xs: 14, md: 15 },
              color: "#455A64",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Passionate about competitive programming, I am a self-taught
            software engineer who thrives on challenges and continuous learning.
            My journey in the tech world began with curiosity and has evolved
            into a deep-seated passion for coding and problem-solving. When I'm
            not immersed in code, I find solace in music, letting the melodies
            inspire my creativity and fuel my productivity. Driven by the desire
            to innovate, I constantly seek out new opportunities to enhance my
            skills and contribute to impactful projects. From debugging complex
            algorithms to crafting elegant software solutions, my commitment to
            excellence is unwavering. Embracing both the logical and the
            artistic aspects of life, I strive to strike a balance that keeps me
            motivated and forward-thinking.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
