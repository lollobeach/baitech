import React, { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

// material components
import {
  Box,
  Typography,
  ButtonGroup,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import Logo from "../logo.png";
import ComponentsAnimations from "./ComponentsAnimations";
import { useEffect } from "react";

export default function Layout() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [colorChange, setcolorChange] = useState(false);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setNavbarHeight(ref.current.clientHeight);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 40) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { page: "Rosalind", link: "rosalind" },
    { page: "About us", link: "about-us" },
  ];

  return (
    <>
      {/* <div>
        <Helmet>
          <meta
            name="description"
            content="What if it was possible to simulate gene editing?"
          />
        </Helmet>
      </div> */}
      <ComponentsAnimations>
        <AppBar
          ref={ref}
          sx={{
            // minHeight: 10,
            boxShadow: colorChange ? "0px 10px 50px 25px #053B50" : 0,
            backgroundColor: colorChange ? "primary.main" : "transparent",
            transition: "background .1s ease-out, box-shadow .1s ease-out",
            borderBottom: "none",
          }}
        >
          <Toolbar sx={{ padding: 3 }} disableGutters>
            {/* XXXL screens */}
            <Typography
              fontSize={120}
              color="transparent"
              fontWeight="bold"
              fontFamily="monaco, monospace"
              marginLeft={5}
              sx={{
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "inline",
                },
                textShadow: "0 0 1px #ffffff, 0 0 15px #00fbb4",
                transition: "text-shadow .5s ease-in",
                textDecoration: "none",
              }}
              component="a"
              href="/"
            >
              veldyn
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "flex",
                },
              }}
              justifyContent="flex-end"
              alignItems="center"
              marginRight={5}
              gap={5}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={200} height={200} />
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                size="large"
                sx={{
                  // height: 50,
                  marginRight: 5,
                  boxShadow: colorChange ? 0 : "",
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  href="/rosalind"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={45}>
                      Rosalind
                    </Typography>
                    <FeatherIcon icon="slack" width="40" height="40" />
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="/about-us"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={45}>
                      About us
                    </Typography>
                    <FeatherIcon icon="users" width="40" height="40" />
                  </Box>
                </Button>
              </ButtonGroup>
            </Box>

            {/* XXL screens */}
            <Typography
              fontSize={120}
              color="transparent"
              fontWeight="bold"
              fontFamily="monaco, monospace"
              marginLeft={5}
              sx={{
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "inline",
                  xxxlg: "none",
                },
                textShadow: "0 0 1px #ffffff, 0 0 15px #00fbb4",
                transition: "text-shadow .5s ease-in",
                textDecoration: "none",
              }}
              component="a"
              href="/"
            >
              veldyn
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "flex",
                  xxxlg: "none",
                },
              }}
              justifyContent="flex-end"
              alignItems="center"
              marginRight={5}
              gap={5}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={200} height={200} />
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                size="large"
                sx={{
                  // height: 50,
                  marginRight: 5,
                  boxShadow: colorChange ? 0 : "",
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  href="/rosalind"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={45}>
                      Rosalind
                    </Typography>
                    <FeatherIcon icon="slack" width="40" height="40" />
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="/about-us"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={45}>
                      About us
                    </Typography>
                    <FeatherIcon icon="users" width="40" height="40" />
                  </Box>
                </Button>
              </ButtonGroup>
            </Box>

            {/* XL screens */}
            <Typography
              variant="h2"
              color="transparent"
              fontWeight="bold"
              fontFamily="monaco, monospace"
              marginLeft={5}
              sx={{
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "inline",
                  xxlg: "none",
                  xxxlg: "none",
                },
                textShadow: "0 0 1px #ffffff, 0 0 5px #00fbb4",
                transition: "text-shadow .5s ease-in",
                textDecoration: "none",
              }}
              component="a"
              href="/"
            >
              veldyn
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "flex",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              justifyContent="flex-end"
              alignItems="center"
              marginRight={5}
              gap={5}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={150} height={150} />
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                size="large"
                sx={{
                  // height: 80,
                  marginRight: 5,
                  boxShadow: colorChange ? 0 : "",
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  href="/rosalind"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={30}>
                      Rosalind
                    </Typography>
                    <FeatherIcon icon="slack" width="30" height="30" />
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="/about-us"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography marginTop={0.5} fontSize={30}>
                      About us
                    </Typography>
                    <FeatherIcon icon="users" width="30" height="30" />
                  </Box>
                </Button>
              </ButtonGroup>
            </Box>

            {/* L screens */}
            <Typography
              variant="h2"
              color="transparent"
              fontWeight="bold"
              fontFamily="monaco, monospace"
              marginLeft={5}
              sx={{
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
                textShadow: "0 0 1px #ffffff, 0 0 5px #00fbb4",
                transition: "text-shadow .5s ease-in",
                textDecoration: "none",
              }}
              component="a"
              href="/"
            >
              veldyn
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              justifyContent="flex-end"
              alignItems="center"
              marginRight={5}
              gap={5}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={100} height={100} />
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                size="large"
                sx={{
                  height: 50,
                  marginRight: 5,
                  boxShadow: colorChange ? 0 : "",
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  href="/rosalind"
                >
                  <Box display="flex" alignItems="baseline" gap={1}>
                    <Typography variant="h6">Rosalind</Typography>
                    <FeatherIcon icon="slack" width="15" height="15" />
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="/about-us"
                >
                  <Box display="flex" alignItems="baseline" gap={1}>
                    <Typography variant="h6">About us</Typography>
                    <FeatherIcon icon="users" width="15" height="15" />
                  </Box>
                </Button>
              </ButtonGroup>
            </Box>

            {/* M screens */}
            <Typography
              variant="h2"
              color="transparent"
              fontWeight="bold"
              fontFamily="monaco, monospace"
              marginLeft={5}
              sx={{
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "inline",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
                textShadow: "0 0 1px #ffffff, 0 0 5px #00fbb4",
                transition: "text-shadow .5s ease-in",
                textDecoration: "none",
              }}
              component="a"
              href="/"
            >
              veldyn
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "none",
                  md: "flex",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              justifyContent="flex-end"
              alignItems="center"
              marginRight={5}
              gap={5}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={100} height={100} />
              </Box>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                size="large"
                sx={{
                  height: 50,
                  marginRight: 5,
                  boxShadow: colorChange ? 0 : "",
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  href="/rosalind"
                >
                  <Box display="flex" alignItems="baseline" gap={1}>
                    <Typography variant="h6">Rosalind</Typography>
                    <FeatherIcon icon="slack" width="15" height="15" />
                  </Box>
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.primary.contrast,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  href="/about-us"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="h6">About us</Typography>
                    <FeatherIcon icon="users" width="15" height="15" />
                  </Box>
                </Button>
              </ButtonGroup>
            </Box>

            {/* SM screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "none",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              alignItems="center"
            >
              <Typography
                variant="h2"
                color="transparent"
                fontWeight="bold"
                fontFamily="monaco, monospace"
                sx={{
                  textShadow: colorChange
                    ? "0 0 1px #ffffff, 0 0 5px #00fbb4"
                    : "0 0 1px #ffffff, 0 0 5px #00fbb4",
                  transition: "text-shadow .5s ease-in",
                  textDecoration: "none",
                }}
                component="a"
                href="/"
              >
                veldyn
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    s: "none",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xlg: "none",
                    xxlg: "none",
                    xxxlg: "none",
                  },
                }}
                justifyContent="flex-end"
                alignItems="center"
                gap={5}
              >
                <Box component="a" href="/">
                  <Box component="img" src={Logo} width={100} height={100} />
                </Box>
                <ButtonGroup
                  variant="contained"
                  aria-label="text button group"
                  size="large"
                  sx={{
                    height: 50,
                    boxShadow: colorChange ? 0 : "",
                  }}
                >
                  <Button
                    sx={{ color: (theme) => theme.palette.primary.contrast }}
                    href="/rosalind"
                  >
                    <Box display="flex" alignItems="baseline" gap={1}>
                      <Typography variant="h6">Rosalind</Typography>
                      <FeatherIcon icon="slack" width="15" height="15" />
                    </Box>
                  </Button>
                  <Button
                    sx={{
                      color: (theme) => theme.palette.primary.contrast,
                      gap: 1,
                    }}
                    href="/about-us"
                  >
                    <Box display="flex" alignItems="baseline" gap={1}>
                      <Typography variant="h6">About us</Typography>
                      <FeatherIcon icon="users" width="15" height="15" />
                    </Box>
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>

            {/* S screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "flex",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              gap={5}
              alignItems="center"
            >
              <Typography
                variant="h2"
                color="transparent"
                fontWeight="bold"
                fontFamily="monaco, monospace"
                sx={{
                  textShadow: "0 0 1px #ffffff, 0 0 5px #00fbb4",
                  transition: "text-shadow .5s ease-in",
                  textDecoration: "none",
                }}
                component="a"
                href="/"
              >
                veldyn
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  s: "flex",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              justifyContent="flex-end"
              gap={3}
            >
              <Box component="a" href="/">
                <Box component="img" src={Logo} width={60} height={60} />
              </Box>
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <FeatherIcon
                  icon="menu"
                  width="40"
                  height="40"
                  color={colorChange ? "#ffffff" : "#ffffff"}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index}>
                    <Link
                      to={`/${page.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography color="primary.main" fontWeight="bold">
                        {page.page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* XS screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  s: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xlg: "none",
                  xxlg: "none",
                  xxxlg: "none",
                },
              }}
              alignItems="center"
            >
              <Box>
                <Typography
                  fontSize={25}
                  color="transparent"
                  fontWeight="bold"
                  fontFamily="monaco, monospace"
                  sx={{
                    textShadow: "0 0 1px #ffffff, 0 0 5px #00fbb4",
                    transition: "text-shadow .5s ease-in",
                    textDecoration: "none",
                  }}
                  component="a"
                  href="/"
                >
                  veldyn
                </Typography>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    sm: "none",
                    s: "none",
                    md: "none",
                    lg: "none",
                    xlg: "none",
                    xxlg: "none",
                    xxxlg: "none",
                  },
                }}
                justifyContent="flex-end"
                alignItems="center"
                gap={3}
              >
                <Box component="a" href="/">
                  <Box component="img" src={Logo} width={45} height={45} />
                </Box>
                <IconButton size="large" onClick={handleOpenNavMenu}>
                  <FeatherIcon
                    icon="menu"
                    width="35"
                    height="35"
                    color={colorChange ? "#ffffff" : "#ffffff"}
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page, index) => (
                    <MenuItem key={index}>
                      <Link
                        to={`/${page.link}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography color="primary.main" fontWeight="bold">
                          {page.page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>{<Outlet context={navbarHeight} />}</Box>
      </ComponentsAnimations>
    </>
  );
}
