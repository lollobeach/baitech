import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import TextAnimation from "../components/TextAnimation";

import BackgroundXXXL from "../images/backgroundXXXL.jpeg";
import BackgroundXXL from "../images/backgroundXXL.jpg";
import BackgroundXL from "../images/backgroundXL.jpg";
import BackgroundL from "../images/backgroundL.jpeg";
import BackgroundM from "../images/backgroundM.jpg";
import BackgroundSM from "../images/backgroundSM.jpg";
import BackgroundS from "../images/backgroundS.jpg";
import BackgroundXS from "../images/backgroundXS.jpg";
import { useOutletContext } from "react-router-dom";

export default function Home () {
  const [renderComponent, setRenderComponent] = useState(true);
  const [stackHeight, setStackHeight] = useState(0);

  const ref = useRef(null);

  const navbarHeight = useOutletContext()

  useEffect(() => {
    setStackHeight(ref.current.clientHeight);

    setTimeout(() => {
      setRenderComponent(true);
    }, 500);
  }, []);

  const scrollDown = () => {
    console.log(window.innerHeight);
    window.scrollTo({
      top: stackHeight + 225,
      behavior: "smooth",
    });
  };

  return (
    <>
        {/* XXXL screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "inline",
              xxlg: "none",
              xlg: "none",
              lg: "none",
              md: "none",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_xxxl" src={BackgroundXXXL} />
        </Box>

        {/* XXL screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "inline",
              xlg: "none",
              lg: "none",
              md: "none",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_xxl" src={BackgroundXXL} />
        </Box>

        {/* XL screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "inline",
              lg: "none",
              md: "none",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_xl" src={BackgroundXL} />
        </Box>

        {/* L screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "none",
              lg: "inline",
              md: "none",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_l" src={BackgroundL} />
        </Box>

        {/* M screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "none",
              lg: "none",
              md: "inline",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_m" src={BackgroundM} />
        </Box>

        {/* SM screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "none",
              lg: "none",
              md: "none",
              sm: "inline",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img alt="background_sm" src={BackgroundSM} />
        </Box>

        {/* S screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "none",
              lg: "none",
              md: "none",
              sm: "none",
              s: "inline",
              xs: "none",
            },
          }}
        >
          <img alt="background_s" src={BackgroundS} />
        </Box>

        {/* XS screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              xxxlg: "none",
              xxlg: "none",
              xlg: "none",
              lg: "none",
              md: "none",
              sm: "none",
              s: "none",
              xs: "inline",
            },
          }}
        >
          <img alt="background_xs" src={BackgroundXS} />
        </Box>

        <Box
          position="fixed"
          width="100%"
          height="100%"
          zIndex={-1}
          bgcolor="rgba(5, 59, 80, 0.7)"
        />

      {renderComponent && (
        <div>
          <TextAnimation topPosition={navbarHeight} />
            <Stack
              ref={ref}
              position="relative"
              top={320}
              padding={5}
              direction="column"
              alignItems="center"
            >
              <Typography
                color="white"
                fontWeight="bold"
                textAlign="center"
                variant="h3"
              >
                Our goal is to provide genetists with a tool capable of lowering
                experimentation costs and improving work productivity:
              </Typography>

              <IconButton onClick={scrollDown} sx={{ width: 140, height: 140 }}>
                <FeatherIcon icon="chevron-down" color="#00fbb4" size="100%" />
              </IconButton>

              <Box
                marginTop={25}
                display="flex"
                flexDirection="column"
                alignItems="center"
                paddingBottom={
                  window.innerWidth < 500 && window.innerHeight > 700 ? 18 : 10
                }
              >
                <Typography
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  variant="h3"
                >
                  this is why we designed{" "}
                  <span style={{ color: "#00fbb4" }}>Rosalind</span>, a software
                  that simulates genetic expression
                </Typography>
                <Button
                  variant="contained"
                  href="/rosalind"
                  sx={{
                    marginTop: 10,
                    color: (theme) => theme.palette.primary.light,
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    variant="h4"
                    textTransform="capitalize"
                  >
                    About Rosalind
                  </Typography>
                </Button>
              </Box>
            </Stack>
        </div>
      )}
    </>
  );
}