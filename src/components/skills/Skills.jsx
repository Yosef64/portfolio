import { Box } from "@mui/material";
import React from "react";

export default function Skills() {
  const skills = [
    {
      id: 1,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      alt:"csharp"
    },
    {
      id: 2,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt:"python"
    },
    {
      id: 3,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt:"react"
    },
    {
      id: 4,
      url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt:"git"
    },
    {
      id: 5,
      url: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      alt:"flutter"
    },
    {
      id: 6,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt:"html"
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf8f9",
        padding: 20,
        gap: 20,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Sora',sans-serif",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 700, color: "#457B9D" }}>
          Skills
        </span>
        <span style={{ fontSize: 25, fontWeight: 900 }}>
          What am I capable of?
        </span>
      </div>
      <div>
        {skills.map((item) => {
          return (
            <img
              src={item.url}
              alt={item.alt}
              style={{ width: 90, height: 90 }}
            />
          );
        })}
      </div>
    </div>
  );
}
