import { createTheme } from "@mui/material";

const pxToRem = (value) => {
  return `${value / 16}rem`;
};

const responsiveFontSize = ({ xs, s, sm, md, lg, xl, xxl }) => {
  return {
    "@media (min-width: 200px)": {
      fontSize: pxToRem(xs)
    },
    "@media (min-width: 360px)": {
      fontSize: pxToRem(s)
    },
    "@media (min-width:390px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:800px)": {
      fontSize: pxToRem(lg),
    },
    "@media (min-width:1100px)": {
      fontSize: pxToRem(xl),
    },
    "@media (min-width:1550px)": {
      fontSize: pxToRem(xxl),
    },
  };
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#053B50", // darkblue
      secondary: "#00b5f9", // lightblue
      contrast: "#10f9f3", // cyan
      light: "#00fbb4", // lightgreen
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      s: 430,
      sm: 740,
      md: 1100,
      lg: 1920,
    },
  },

  typography: {
    fontFamily: "Overpass",
    h1: {

      fontSize: pxToRem(40),
      ...responsiveFontSize({
        xs: 50,
        s: 65,
        sm: 70,
        md: 100,
        lg: 130,
        xl: 150,
        xxl: 200,
      }),
    },
    h3: {
      fontSize: pxToRem(40),
      ...responsiveFontSize({
        xs: 25,
        s: 27,
        sm: 35,
        md: 45,
        lg: 50,
        xl: 60,
        xxl: 100,
      }),
    },
    h4: {
      fontSize: pxToRem(40),
      ...responsiveFontSize({
        xs: 24, 
        s: 32,
        sm: 35,
        md: 40,
        lg: 50,
        xl: 55,
        xxl: 70
      })
    },
    h5: {
      fontSize: pxToRem(40),
      ...responsiveFontSize({
        xs: 17,
        s: 20
      })
    }
  },

  border: {
    borderRadius: 10,
  },
});
