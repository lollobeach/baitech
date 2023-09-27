import { Box, IconButton, Typography } from "@mui/material";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { theme } from "../theme/overrideTheme";

const TextAnimation = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [renderComponent, setRenderComponent] = useState(false);
  const [renderButton, setRenderButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderComponent(true);
      setRenderButton(true);
    }, 1000);
  }, []);

  const windowResize = () => {
    setWindowHeight(window.innerHeight);
  };

  window.addEventListener("resize", windowResize);

  const scrollDown = () => {
    window.scrollTo({
      top: windowHeight < 600 ? windowHeight - 25 : windowHeight - 30,
      behavior: "smooth",
    });
  };

  const firstText = "An AI assistant";
  const secondText = "for genomic research";

  return (
    <>
      <Box
        position="relative"
        top={135}
        height={windowHeight - 180}
        bgcolor="rgba(5, 59, 80, 0.7)"
        padding={3}
        sx={{
          boxShadow: "0px 5px 10px 10px white",
          display: { md: "flex", xs: "" },
        }}
      >
        <motion.div>
          <motion.div>
            {firstText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.01 }}
              >
                <Typography
                  variant="h1"
                  color="primary.contrast"
                  fontWeight="bold"
                  display="inline"
                >
                  {letter}
                </Typography>
              </motion.span>
            ))}
          </motion.div>
          {renderComponent && (
            <motion.div>
              {secondText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.08 }}
                >
                  <Typography
                    variant="h1"
                    color="primary.contrast"
                    fontWeight="bold"
                    display="inline"
                  >
                    {letter}
                  </Typography>
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        {renderButton && (
          <Box
            display="flex"
            sx={{
              flexDirection: { sm: "column", xs: "row" },
              justifyContent: { sm: "flex-end", xs: "center" },
              marginTop: { xs: 5 },
            }}
          >
            <IconButton size="large" onClick={scrollDown}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <FeatherIcon
                  icon="arrow-down"
                  size={
                    window.innerWidth < theme.breakpoints.values.s ? 50 : 100
                  }
                  color="#ffffff"
                />
              </motion.span>
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TextAnimation;
