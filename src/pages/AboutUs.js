import React, { useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import Lorenzo from "../images/aboutUs/lorenzo.png";
import Paul from "../images/aboutUs/paul1.jpg"

import { theme } from "../theme/overrideTheme";
import { useOutletContext } from "react-router-dom";

export default function AboutUs() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const navbarHeight = useOutletContext()

  const windowResize = () => {
    setWindowHeight(window.innerHeight);
  };

  window.addEventListener("resize", windowResize);

  const people = [
    {
      id: 1,
      photo: Lorenzo,
      name: "Lorenzo Verducci",
      description: "Ms in Computer Science at University of Camerino",
      email: "verduccii46@gmail.com",
      linkedInName: "lorenzo-verducci",
      linkedIn: "https://www.linkedin.com/in/lorenzo-verducci-982106239",
    },
    {
      id: 2,
      photo: Paul,
      name: "Paul Ragazzini",
      description: "Bs in Computer Science at University of Camerino",
      email: "paul.raga2001@gmail.com",
      linkedInName: "paul-ragazzini",
      linkedIn: "https://www.linkedin.com/in/paul-ragazzini-77b405214/",
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        zIndex={-1}
        bgcolor="#08091b"
        width="100%"
        height="100%"
      />

      {/* Large screen */}
      <Box
        position="relative"
        top={navbarHeight}
        paddingX={5}
        sx={{
          display: {
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Typography
          variant="h3"
          color="primary.contrast"
          sx={{ textDecoration: "underline" }}
        >
          The Developers
        </Typography>

        <Grid container marginTop={5}>
          {people.map((person) => (
            <Grid
              key={person.id}
              item
              height={windowHeight - 500}
              s={12}
              md={6}
              display="flex"
              gap={5}
            >
              <Box
                borderRadius="50%"
                width="auto"
                height="80%"
                component="img"
                src={person.photo}
              />
              <Box height="50%" display="flex" flexDirection="column" gap={2}>
                <Typography color="white" variant="h4">
                  {person.name}
                </Typography>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="info" color="#ffffff" />
                  <Typography color="white" variant="h5">
                    {person.description}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="mail" color="#ffffff" />
                  <Typography
                    color="white"
                    variant="h5"
                    component="a"
                    href={`mailto:${person.email}`}
                    sx={{ textDecoration: "none" }}
                  >
                    {person.email}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="linkedin" color="#ffffff" />
                  <Typography
                    color="white"
                    variant="h5"
                    component="a"
                    href={person.linkedIn}
                    sx={{ textDecoration: "none" }}
                  >
                    {person.linkedInName}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item s={12} md={12}>
            <Box display="flex" justifyContent="center" gap={1}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary.secondary"
                marginTop={1}
              >
                For any information{" "}
                <span>
                  {" "}
                  <IconButton href="mailto:rosalindveldyn@gmail.com">
                    <FeatherIcon
                      icon="mail"
                      color={theme.palette.primary.secondary}
                    />
                  </IconButton>
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Medium Screen */}
      <Box
        position="relative"
        top={navbarHeight}
        paddingX={5}
        sx={{
          display: {
            md: "none",
            sm: "block",
            xs: "none",
          },
        }}
      >
        <Typography
          variant="h3"
          color="primary.contrast"
          sx={{ textDecoration: "underline" }}
        >
          The Developers
        </Typography>

        <Grid container marginTop={5}>
          {people.map((person) => (
            <Grid
              key={person.id}
              item
              height={windowHeight - 800}
              s={12}
              md={6}
              display="flex"
              gap={5}
            >
              <Box
                borderRadius="50%"
                width="auto"
                height="80%"
                component="img"
                src={person.photo}
              />
              <Box height="50%" display="flex" flexDirection="column" gap={2}>
                <Typography color="white" variant="h4">
                  {person.name}
                </Typography>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="info" color="#ffffff" />
                  <Typography color="white" variant="h5">
                    {person.description}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="mail" color="#ffffff" />
                  <Typography
                    color="white"
                    variant="h5"
                    component="a"
                    href={`mailto:${person.email}`}
                    sx={{ textDecoration: "none" }}
                  >
                    {person.email}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <FeatherIcon icon="linkedin" color="#ffffff" />
                  <Typography
                    color="white"
                    variant="h5"
                    component="a"
                    href={person.linkedIn}
                    sx={{ textDecoration: "none" }}
                  >
                    {person.linkedInName}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item s={12} md={12} marginTop={5}>
            <Box display="flex" justifyContent="center" gap={1}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary.secondary"
                marginTop={1}
              >
                For any information{" "}
                <span>
                  {" "}
                  <IconButton href="mailto:rosalindveldyn@gmail.com">
                    <FeatherIcon
                      icon="mail"
                      color={theme.palette.primary.secondary}
                    />
                  </IconButton>
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Small Screen */}
      <Box
        position="relative"
        top={navbarHeight}
        paddingX={5}
        sx={{
          display: {
            md: "none",
            sm: "none",
            xs: "block",
          },
        }}
      >
        <Typography
          variant="h3"
          color="primary.contrast"
          sx={{ textDecoration: "underline" }}
          textAlign="center"
        >
          The Developers
        </Typography>

        <Grid container>
          {people.map((person) => (
            <Grid
              key={person.id}
              item
              height={windowHeight - 1000}
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              marginTop={10}
            >
              <Box
                borderRadius="50%"
                width="auto"
                height={400}
                component="img"
                src={person.photo}
              />
              <Box
                height="50%"
                display="flex"
                flexDirection="column"
                gap={2}
                marginTop={5}
              >
                <Typography color="white" variant="h4" textAlign="center">
                  {person.name}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  marginLeft="10%"
                  gap={2}
                >
                  <Box display="flex" gap={1}>
                    <FeatherIcon icon="info" width={40} height={40} color="#ffffff" />
                    <Typography color="white" variant="h5">
                      {person.description}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <FeatherIcon icon="mail" color="#ffffff" />
                    <Typography
                      color="white"
                      variant="h5"
                      component="a"
                      href={`mailto:${person.email}`}
                      sx={{ textDecoration: "none" }}
                    >
                      {person.email}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <FeatherIcon icon="linkedin" color="#ffffff" />
                    <Typography
                      color="white"
                      variant="h5"
                      component="a"
                      href={person.linkedIn}
                      sx={{ textDecoration: "none" }}
                    >
                      {person.linkedInName}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} marginTop={10} paddingBottom={5}>
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary.secondary"
                marginTop={1}
              >
                For any information{" "}
                <span>
                  {" "}
                  <IconButton href="mailto:rosalindveldyn@gmail.com">
                    <FeatherIcon
                      icon="mail"
                      color={theme.palette.primary.secondary}
                    />
                  </IconButton>
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
