"use client";

import { Box, Typography } from "@mui/material";
// import { url } from "inspector";
import React from "react";

export default function Invite() {
  return (
    <Box sx={{ bgcolor: "teal", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          // padding: 5,
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          // bgcolor: "maroon", // color of card
          maxWidth: "100%",
          margin: "auto",
          borderRadius: 2,
          boxShadow: 2,
          padding: 2,
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "visible",
          // background: `url('/bg/Gold And Black Birthday Party Invitation Portrait.png')`, 
          backgroundImage: `url('/bg/Gold And Black Birthday Party Invitation Portrait.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <svg
          width="100%"
          height="70"
          viewBox="0 65 400 10"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // backgroundColor: "red",
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
            fontSize="24"
            fontWeight="bold"
            fontFamily="Fresh Palm"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              Te invitamos a celebrar nuestro
            </textPath>
          </text>
        </svg>
        <svg
          width="100%"
          height="200"
          viewBox="0 110 400 10"
          style={{ position: "absolute", top: 0, left: 0 }}
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
              CUMPLEANOS
            </textPath>
          </text>
        </svg>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "Fresh Palm",
            // bgcolor: "red",
            fontSize: 65,
            width: "20%",
            margin: "auto",
            marginTop: 0,
            marginBottom: -3,
            color: "white",
          }}
        >
          15
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            // fontWeight: "bold",
            fontFamily: "Shine in Valentine",
            // bgcolor: "red",
            fontSize: 56,
          }}
        >
          Joseph
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "Shine in Valentine",
            // bgcolor: "red",
            fontSize: 20,
            height: "6%",
            marginBottom: -2,
          }}
        >
          Y
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            // fontWeight: "bold",
            fontFamily: "Shine in Valentine",
            // bgcolor: "red",
            fontSize: 56,
          }}
        >
          Jovanni
        </Typography>

        <svg
          width="100%"
          height="200"
          viewBox="0 100 400 10"
          style={{
            position: "absolute",
            top: 230,
            left: 0,
            // backgroundColor: "GREEN",
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
            // bgcolor: "red",
            marginTop: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.3,
          }}
        >
          <Box
            sx={{
              borderTop: "2px solid black",
              // paddingLeft: 2,
              // paddingRight: 3,
              borderBottom:"2px solid black"
            }}
          >
            {" "}
            SABADO{" "}
          </Box>{" "}
          <Box
            // component="span"
            sx={{
              width: 55, // Adjust size of circle
              height: 55,
              // borderRadius: "50%",
              fontSize: 60,
              fontWeight: "bold",
              lineHeight: ".8",
              // border: "2px solid black",
              // display: 'flex'
            }}
          >
            5
          </Box>{" "}
          <Box
            sx={{
              borderTop: "2px solid black",
              // paddingLeft: 2,
              // paddingRight: 3,
              borderBottom:"2px solid black"
            }}
          >
            {" "}
            5:00PM{" "}
          </Box>{" "}
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "Fresh Palm",
            // bgcolor: "red"
          }}
        >
          COL. CENTRO
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "Fresh Palm",
            // bgcolor: "red"
          }}
        >
          TEL. 1234567890
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontFamily: "Shine in Valentine",
            // bgcolor: "red"
          }}
        >
          lluvia de sobres
        </Typography>
      </Box>
    </Box>
  );
}
