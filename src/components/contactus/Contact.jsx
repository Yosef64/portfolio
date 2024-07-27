import { Instagram, LinkedIn, GitHub, Telegram } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "rgba(218, 248, 249, 0.8)", p: "10px 50px" }}>
      <Typography
        sx={{
          fontSize: 17,
          fontWeight: 700,
          color: "#457B9D",
          fontFamily: "'Sora',sans-serif",
        }}
      >
        Contacts
      </Typography>
      <Typography
        sx={{ fontSize: 25, fontWeight: 900, fontFamily: "'Sora',sans-serif" }}
      >
        Get in touch
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Sora',sans-serif",
          fontSize: 12,
          fontWeight: 600,
          mb: "10px",
        }}
      >
        yoseph.alemu@a2sv.org
      </Typography>
      <Box sx={{ mb: 3 }}>
        <a href="https://www.linkedin.com/in/yoseph-alemu-b92758230/">
          <LinkedIn
            sx={{
              color: "#457B9D",
              width: 30,
              height: 30,
              transition: "ease 1s all",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </a>

        <a href="https://github.com/Yosef64">
          <GitHub
            sx={{
              color: "#457B9D",
              width: 30,
              height: 30,
              transition: "ease 1s all",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </a>
        <a href="https://www.instagram.com/josi_qlex/">
          <Instagram
            sx={{
              color: "#457B9D",
              width: 30,
              height: 30,
              transition: "ease 1s all",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </a>

        <a href="https://t.me/Yosi64">
          <Telegram
            sx={{
              color: "#457B9D",
              width: 30,
              height: 30,
              transition: "ease 1s all",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </a>
      </Box>
      <Typography sx={{ fontFamily: "'Sora',sans-serif", fontSize: 12 }}>
        Copyright © 2023. Develop & Designed by yoseph alemu
      </Typography>
    </Box>
  );
}
