import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box sx={{ flexFlow: 1, bgcolor: "#daf8f9", padding: "0 30px" }}>
      <Grid container xs={12}>
        <Grid xs={6}>
          <Container
            sx={{
              "& > :not(style) ~ :not(style)": {
                mb: 2,
                fontFamily: "'Sora',sans-serif",
              },
              bgcolor: "",
              height: "89vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#457B9D" }}>
              Hi Everyone , I am
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 48 }}>
              Yoseph Alemu
            </Typography>
            <Typography sx={{ opacity: 0.8, fontSize: 15 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              fugit nulla incidunt sed ipsam culpa. Iusto velit sit quae
              asperiores alias aliquid esse ullam voluptate, voluptatibus quo ab
              facere. Aliquam?
            </Typography>
            <Box
              sx={{
                "& > :not(style) ~ :not(style)": {
                  ml: 7,
                },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#457B9D",
                  color: "white",
                  fontFamily: "'Sora',sans-serif",
                  fontSize: 9,
                  fontWeight: 400,
                  gap: 2,
                  "&:hover": {
                    bgcolor: "#457B9D",
                  },
                }}
              >
                Download cv{" "}
                <img
                  src="/asset/cloude.svg"
                  alt="img"
                  style={{ height: 20, width: 20 }}
                />
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgba(69, 123, 157, 0.1)",
                  color: "#457B9D",
                  fontFamily: "'Sora',sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  border:"1px #457B9D solid",
                
                  "&:hover": {
                    bgcolor: "rgba(69, 123, 157, 0.7)",
                    color:"white"
                  },
                }}
              >
                Explore more
              </Button>
            </Box>
          </Container>
        </Grid>
        <Grid xs={6}>
          <Box sx={{ bgcolor: "red", height: "89vh" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
