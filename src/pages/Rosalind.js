import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ComponentsAnimations from "../components/ComponentsAnimations";

import RosalindLargeScreen from "../images/rosalindLargeScreen.png";
import RosalindMediumScreen from "../images/rosalindMediumScreen.png";

import { theme } from "../theme/overrideTheme";

export default function Rosalind() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", windowResize);

  const Divider = ({ text }) => (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={1}
      width={windowWidth < 600 ? "auto" : "50%"}
    >
      <Box width={20} height={2} bgcolor="primary.contrast" />
      <Box>
        <Typography variant="h5" color="primary.contrast">
          {text}
        </Typography>
      </Box>
      <Box flex={5} height={2} bgcolor="primary.contrast" />
    </Box>
  );

  const BoxParagraph = ({ dividerText, paragraphText, ...other }) => (
    <Box
      position="relative"
      padding={5}
      width={windowWidth < 600 ? "auto" : "50%"}
      sx={{ ...other }}
    >
      <Divider text={dividerText} />
      <Typography
        color="#ffffff"
        fontWeight="bold"
        // fontSize={40}

        variant="h4"
      >
        {paragraphText}
      </Typography>
    </Box>
  );

  return (
    <ComponentsAnimations>
      <Box
        position="fixed"
        zIndex={-1}
        display="flex"
        justifyContent="flex-end"
        bgcolor="#08091b"
        width="100%"
        height="100%"
        // sx={{
        //   backgroundImage:
        //     "linear-gradient(180deg, rgba(5,59,80,1) 22%, rgba(0,181,249,1) 68%, rgba(16,249,243,1) 100%)",
        // }}
      >
        {windowWidth > 600 && (
          <img
            alt="dna"
            src={
              windowWidth < theme.breakpoints.values.md
                ? RosalindMediumScreen
                : RosalindLargeScreen
            }
            width="100%"
            style={{ position: "relative", top: 135, left: "40%" }}
          />
        )}
      </Box>

      <Stack
        position="relative"
        top={window.innerHeight / 5}
        height={window.innerHeight - 135}
        gap={2}
      >
        <BoxParagraph
          dividerText="What is all about"
          paragraphText={
            <div>
              <span style={{ color: "#00fbb4" }}>Rosalind </span>
              is a virtual genome editor, where you can freely edit the DNA of
              the organism you are currently operating on and visualize the
              modification consequences in terms of genetic expression.
            </div>
          }
        />

        <BoxParagraph
          dividerText="How it works"
          paragraphText="The predictions are provided by an AI model that is specifically trained to associate a certain alteration in the genetic code with its metabolic the consequences."
        />

        <BoxParagraph
          dividerText="First release"
          paragraphText="Rosalind will be an experimental prototype with specific use for Escherichia coli: we have chosen this organism due to the vast amount of data available and the wide utilization in biotechnology."
        />
      </Stack>
    </ComponentsAnimations>
  );
}
