import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import TextAnimation from "../components/TextAnimation";
import ComponentsAnimations from "../components/ComponentsAnimations";

import BackgroundLarge from "../images/backgroundLarge.jpeg";
import BackgroundMedium from "../images/backgroundTablet.jpg";
import BackgroundSmall from "../images/backgroundMobile.jpg";
import BackgroundExtraSmall from "../images/backgroundExtraSmall.jpg"

export default function Home() {
  const [renderComponent, setRenderComponent] = useState(true);
  const [stackHeight, setStackHeight] = useState(0);

  const ref = useRef(null);

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
      <ComponentsAnimations>
        {/* Large screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              md: "inline",
              sm: "none",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img
            alt="background_large"
            src={BackgroundLarge}
            // style={{ transform: "scaleX(-1)" }}
          />
        </Box>

        {/* Medium screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              md: "none",
              sm: "inline",
              s: "none",
              xs: "none",
            },
          }}
        >
          <img
            alt="background_medium"
            src={BackgroundMedium}
            // style={{ transform: "scaleX(-1)" }}
          />
        </Box>

        {/* Small screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              md: "none",
              sm: "none",
              s: "inline",
              xs: "none",
            },
          }}
        >
          <img
            alt="background_small"
            src={BackgroundSmall}
            // style={{ transform: "scaleX(-1)" }}
          />
        </Box>

        {/* Extra small screen */}
        <Box
          position="fixed"
          zIndex={-2}
          sx={{
            display: {
              md: "none",
              sm: "none",
              s: "none",
              xs: "inline",
            },
          }}
        >
          <img
            alt="background_extrasmall"
            src={BackgroundExtraSmall}
            // style={{ transform: "scaleX(-1)" }}
          />
        </Box>

        <Box
          position="fixed"
          width="100%"
          height="100%"
          zIndex={-1}
          bgcolor="rgba(5, 59, 80, 0.7)"
        />
      </ComponentsAnimations>

      {renderComponent && (
        <>
          <TextAnimation />
          <ComponentsAnimations>
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
          </ComponentsAnimations>
        </>
      )}
    </>
  );
}
