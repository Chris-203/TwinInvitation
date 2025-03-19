"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

export default function Invite() {
  return (
    <Box
      sx={{
        bgcolor: "teal",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",

        "@media (orientation: landscape)": {
          width: "100vh", // Swap width and height in landscape mode
          height: "100vw",
          transform: "none", // Rotate the content
          transformOrigin: "center",
        },
      }}
    >
      <Box
        sx={{
          alignContent: "center",
          justifyContent: "center",
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
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{}}>
            <svg
              width="100%"
              style={{
                position: "relative",
                left: 0,
              }}
            >
              <defs>
                <path
                  id="curve"
                  d="M 50,150 A 150,100 0 0,1 350,150"
                  fill="transparent"
                />
              </defs>
              <text
                fill="white"
                fontSize="30"
                fontWeight="bold"
                fontFamily="Fresh Palm"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  Te invitamos a celebrar nuestro
                </textPath>
              </text>
            </svg>
          </Box>
          <svg
            width="100%"
            style={{ position: "relative", top: -100, left: 0 }}
          >
            <defs>
              <path
                id="curve"
                d="M 50,150 A 150,100 0 0,1 350,150"
                fill="transparent"
              />
            </defs>
            <text fill="white" fontSize="32" fontWeight="bold">
              <textPath
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
                fontFamily="Fresh Palm"
              >
                CUMPLEAÑOS
              </textPath>
            </text>
          </svg>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Fresh Palm",
              fontSize: 100,
              width: "20%",
              margin: "auto",
              marginTop: -25,
              color: "white",
            }}
          >
            15
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: 90,
            }}
          >
            Joseph
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: 40,
              height: "6%",
              marginBottom: -1,
            }}
          >
            Y
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              fontSize: 90,
            }}
          >
            Jovanni
          </Typography>

          <svg
            width="100%"
            style={{
              position: "relative",
              left: 0,
            }}
          >
            <defs>
              <path
                id="curve"
                d="M 50,150 A 150,100 0 0,1 350,150"
                fill="transparent"
              />
            </defs>
            <text fill="white" fontSize="32" fontWeight="bold">
              <textPath
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
                fontFamily="Fresh Palm"
              >
                ABRIL
              </textPath>
            </text>
          </svg>
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
              }}
            >
              {" "}
              SABADO{" "}
            </Box>{" "}
            <Box
              sx={{
                width: 55, // Adjust size of circle
                height: 55,
                fontSize: 60,
                fontWeight: "bold",
                lineHeight: ".8",
              }}
            >
              5
            </Box>{" "}
            <Box
              sx={{
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
              }}
            >
              {" "}
              5:00PM{" "}
            </Box>{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "Fresh Palm",
              }}
            >
              29 POPLAR STREET
            </Typography>
          </Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Shine in Valentine",
              marginTop: 8,
              marginBottom: 15,
            }}
          >
            lluvia de sobres
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
