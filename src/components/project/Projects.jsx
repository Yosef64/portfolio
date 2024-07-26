import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination,
  Card,
  CardMedia,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";

const projects = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/download.png?alt=media&token=61c1d0f8-4818-4566-9298-2d2d79d45a08",
    title: "Rental Website",
    desc: "a rental wesite that help house owner to find a tenant to his house. It was an amazing experience to work this.",
    git: "https://github.com/Yosef64/Rental_Website",
    isLive: true,
    live: "https://jorent.vercel.app/",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/06.jpg?alt=media&token=e164cb79-3f12-498d-b6f0-d3cc35d1bdae",
    title: "Rental Mobile",
    desc: "A rental mobile that help also house owner to find a tenant to his house. It's an ongoing project that I'm currently working on.",
    git: "https://github.com/Yosef64/RentApp",
    isLive: false,
    live: "jorent.vercel.app",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/photo_2024-07-09_22-43-24.jpg?alt=media&token=deaf3ae5-b6ab-45f9-bf01-295f0300c306",
    title: "Wallpaper Mobile",
    desc: "It's a react-native Wallpaper project that shows impressive habeshan images.",
    git: "https://github.com/Yosef64/wallpaper",
    isLive: false,
    live: "jorent.vercel.app",
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/Screenshot%202024-07-26%20195138.png?alt=media&token=286b1761-b443-41e7-8240-bd4e7e6dcc69",
    title: "Portfolio",
    desc: "It's a react project that shows a description about me.",
    git: "https://github.com/Yosef64/portfolio",
    isLive: true,
    live: "josialex.vercel.app",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(1);
  const lastIndex = current * 6;
  const firstIndex = lastIndex - 6;
  const records = projects.slice(firstIndex, lastIndex);
  const pages = Math.ceil(projects.length / 6);
  const handleChange = (event, value) => {
    setCurrent(value);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 7,
      }}
    >
      <Typography
        sx={{
          fontSize: 17,
          fontWeight: 700,
          color: "#457B9D",
          fontFamily: "'Sora',sans-serif",
        }}
      >
        Projects
      </Typography>
      <Typography
        sx={{ fontSize: 25, fontWeight: 900, fontFamily: "'Sora',sans-serif" }}
      >
        What I have Made?
      </Typography>
      <Grid2 container spacing={3} sx={{ m: 2 }}>
        {records.map((item) => {
          return (
            <Grid2 key={item.id} xs={12} sm={6} md={6} lg={4} xl={4}>
              <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={item.img}
                  title={item.title}
                />
                <CardContent sx={{ maxHeight: 100, overflow: "auto" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "'Sora',sans-serif", fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "'Sora',sans-serif",
                      textAlign: "justify",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    "& a": {
                      textDecoration: "none",
                      fontFamily: "'Sora',sans-serif",
                      color: "blue",
                    },
                  }}
                >
                  {item.isLive && (
                    <Button size="small">
                      <a href={item.live}>Live</a>
                    </Button>
                  )}
                  <Button size="small">
                    <a href={item.git}>Github</a>
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
      <Pagination
        count={pages}
        shape="rounded"
        color="primary"
        onChange={handleChange}
        siblingCount={6}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "black",
            fontFamily: "'Sora',sans,serif", // Default color
          },
          "& .Mui-selected": {
            backgroundColor: "#457B9D", // Custom active color
            color: "white", // Custom active text color
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#5e97bb", // Hover effect
          },
          mt: 3,
        }}
        page={current}
      />
    </Box>
  );
}
