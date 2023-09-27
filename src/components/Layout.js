import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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

export default function Layout() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [colorChange, setcolorChange] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
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
    { page: "About us", link: "about-us" },
    { page: "Rosalind", link: "rosalind" },
  ];

  return (
    <ComponentsAnimations>
      <AppBar
        sx={{
          height: 135,
          boxShadow: colorChange ? "0px 10px 50px 25px #053B50" : 0,
          backgroundColor: colorChange ? "primary.main" : "transparent",
          transition: "background .1s ease-out, box-shadow .1s ease-out",
          borderBottom: "none",
        }}
      >
        <Toolbar sx={{ padding: 3 }} disableGutters>
          {/* Large screens */}
          <Typography
            variant="h2"
            color="transparent"
            fontWeight="bold"
            fontFamily="monaco, monospace"
            marginLeft={5}
            sx={{
              display: { sm: "none", md: "inline", s: "none", xs: "none" },
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
              display: { xs: "none", md: "flex", s: "none", sm: "none" },
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
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                href="/about-us"
              >
                <Typography variant="h6">About us</Typography>
                <FeatherIcon icon="chevrons-down" width="15" height="15" />
              </Button>
              <Button
                sx={{
                  color: (theme) => theme.palette.primary.contrast,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                href="/rosalind"
              >
                <Typography variant="h6">Rosalind</Typography>
                <FeatherIcon icon="chevrons-down" width="15" height="15" />
              </Button>
            </ButtonGroup>
          </Box>

          {/* Medium screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { sm: "flex", md: "none", s: "none", xs: "none" },
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
                display: { xs: "none", s: "none", md: "none", sm: "flex" },
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
                  href="/about-us"
                >
                  <Typography variant="h6">About us</Typography>
                  <FeatherIcon icon="chevrons-down" width="15" height="15" />
                </Button>
                <Button
                  sx={{ color: (theme) => theme.palette.primary.contrast }}
                  href="/rosalind"
                >
                  <Typography variant="h6">Rosalind</Typography>
                  <FeatherIcon icon="chevrons-down" width="15" height="15" />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>

          {/* Small screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", s: "flex", sm: "none", md: "none" },
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
              display: { xs: "none", s: "flex", sm: "none", md: "none" },
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
                  <Link to={`/${page.link}`} style={{ textDecoration: "none" }}>
                    <Typography color="primary.main" fontWeight="bold">
                      {page.page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Extra small screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", s: "none", sm: "none", md: "none" },
            }}
            alignItems="center"
          >
            <Typography
              fontSize={30}
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
              display: { xs: "flex", sm: "none", s: "none", md: "none" },
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
                  <Link to={`/${page.link}`} style={{ textDecoration: "none" }}>
                    <Typography color="primary.main" fontWeight="bold">
                      {page.page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box position="relative">{<Outlet />}</Box>
    </ComponentsAnimations>
  );
}
