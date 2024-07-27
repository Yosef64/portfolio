import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Intro() {
  // console.log(pa);
  return (
    <Box sx={{ flexFlow: 1, bgcolor: "#daf8f9", padding: "0 40px"}}>
      <Grid container xs={12}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Container
            sx={{
              height: "89vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems:"center"
            }}
          >
            <Typography
              sx={{ color: "#457B9D", fontFamily: "'Sora',sans-serif", mb: 1 }}
            >
              Hi Everyone , I am
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 48,
                fontFamily: "'Sora', sans-serif",
                mb: 1,
              }}
            >
              Yoseph Alemu
            </Typography>
            <Typography
              sx={{
                opacity: 0.8,
                fontSize: 15,
                mb: 3,
                fontFamily: "'Sora',sans-serif",
              }}
            >
              Full stack, Mobile app , and Desktop app developer.<br></br>
              Easily Self thought software engineer.
            </Typography>
            <Box
              sx={{
                "& > :not(style) ~ :not(style)": {
                  ml: 5,
                },
              }}
            >
              <a href="/asset/mycv.pdf" download="Yoseph.pdf">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#457B9D",
                    color: "white",
                    fontFamily: "'Sora',sans-serif",
                    fontSize: 10,
                    fontWeight: 400,
                    gap: 1,
                    width: 150,
                    height: 40,
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
              </a>
              <a href="https://github.com/Yosef64">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "rgba(69, 123, 157, 0.1)",
                    color: "#457B9D",
                    fontFamily: "'Sora',sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    border: "1px #457B9D solid",
                    width: 150,
                    height: 40,
                    "&:hover": {
                      bgcolor: "rgba(69, 123, 157, 0.7)",
                      color: "white",
                    },
                  }}
                >
                  Explore more
                </Button>
              </a>
            </Box>
          </Container>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              bgcolor: "#daf8f9",
              height: "89vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#457B9D",
                width: "70%",
                height: "60%",
                borderRadius: "20px",
                justifyContent: "center",
              }}
            >
              <img
                src="/asset/mypoto.png"
                alt="img"
                style={{ width: "600", height: "600", marginTop: "-120px" }}
              />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
