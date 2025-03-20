"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, {useState, useEffect} from "react";

export default function Invite() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [viewBoxHeight, setViewBoxHeight] = useState(105);

  useEffect(() => {
    const updateViewBox = () => {
      if (window.innerWidth < 600) {
        setViewBoxHeight(100); // Small screens
      } else {
        setViewBoxHeight(110); // Large screens
      }
    };
  
    updateViewBox(); // Run on initial load
    window.addEventListener("resize", updateViewBox);
  
    return () => window.removeEventListener("resize", updateViewBox);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "teal",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          margin: "auto",
          borderRadius: 2,
          boxShadow: 2,
          padding: 2,
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "visible",
          backgroundImage: `url('/bg/Gold And Black Birthday Party Invitation Portrait.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            // marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <svg
              width="100%"
              viewBox={`0 0 400 ${viewBoxHeight}`}
              // style={{ backgroundColor: "teal" }}
            >
              <defs>
                <path
                  id="curve1"
                  d="M 50,150 A 150,100 0 0,1 350,150"
                  fill="transparent"
                />
              </defs>
              <text
                fill="white"
                fontSize={isSmallScreen ? "32" : "32"}
                fontWeight="bold"
                fontFamily="Fresh Palm"
              >
                <textPath href="#curve1" startOffset="50%" textAnchor="middle">
                  Te invitamos a celebrar nuestro
                </textPath>
              </text>
            </svg>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // marginTop: -6,
            }}
          >
            <svg
              width="100%"
              viewBox="0 25 400 50"
              // style={{ backgroundColor: "maroon" }}
            >
              <defs>
                <path
                  id="curve2"
                  d="M 50,150 A 150,100 0 0,1 350,150"
                  fill="transparent"
                />
              </defs>
              <text
                fill="white"
                fontSize={isSmallScreen ? "32" : "32"}
                fontWeight="bold"
              >
                <textPath
                  href="#curve2"
                  startOffset="50%"
                  textAnchor="middle"
                  fontFamily="Fresh Palm"
                >
                  CUMPLEAÑOS
                </textPath>
              </text>
            </svg>
          </Box>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Fresh Palm",
              fontSize: isSmallScreen ? 90 : 100,
              // width: "100%",
              marginTop: -2,
              color: "white",
              backgroundColor: "teal",
            }}
          >
            15
          </Typography>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: isSmallScreen ? 90 : 90,
              color: "white",
              // backgroundColor: "maroon",
            }}
          >
            Joseph
          </Typography>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: isSmallScreen ? 50 : 50,
              height: "6%",
              marginBottom: -2,
              color: "white",
              // backgroundColor: "maroon",
            }}
          >
            Y
          </Typography>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: isSmallScreen ? 90 : 90,
              color: "white",
              // backgroundColor: "maroon",
            }}
          >
            Jovanni
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // width: "100%",
              backgroundColor: "maroon",
              // marginTop: -3,
            }}
          >
            <svg width="75%" viewBox="0 0 400 200">
              <defs>
                <path
                  id="curve3"
                  d="M 50,150 A 150,100 0 0,1 350,150"
                  fill="transparent"
                />
              </defs>
              <text
                fill="white"
                fontSize={isSmallScreen ? "40" : "40"}
                fontWeight="bold"
              >
                <textPath
                  href="#curve3"
                  startOffset="50%"
                  textAnchor="middle"
                  fontFamily="Fresh Palm"
                >
                  ABRIL
                </textPath>
              </text>
            </svg>
          </Box>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Fresh Palm",
              marginTop: -10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.3,
            }}
          >
            <Box
              sx={{
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
                color: "white",
              }}
            >
              SABADO
            </Box>
            <Box
              sx={{
                width: isSmallScreen ? 40 : 55,
                height: isSmallScreen ? 40 : 55,
                fontSize: isSmallScreen ? 60 : 60,
                fontWeight: "bold",
                lineHeight: ".7",
                color: "white",
              }}
            >
              5
            </Box>
            <Box
              sx={{
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
                color: "white",
              }}
            >
              5:00PM
            </Box>
          </Typography>

          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Fresh Palm",
              color: "white",
            }}
          >
            29 POPLAR STREET
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              // marginTop: isSmallScreen ? 0 : 4,
              marginBottom: 15,
              fontSize: isSmallScreen ? 25 : 30,
              color: "white",
            }}
          >
            lluvia de sobres
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
