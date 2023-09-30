import { createTheme } from "@mui/material";

const pxToRem = (value) => {
  return `${value / 16}rem`;
};

const responsiveFontSize = ({ sRotated, xxs, xs, s, sm, md, lg, xl, xxl, xxxl }) => {
  return {
    "@media screen and (orientation: landscape)": {
      fontSize: pxToRem(sRotated)
    },
    "@media (min-width: 300px)": {
      fontSize: pxToRem(xxs)
    },
    "@media (min-width: 360px)": {
      fontSize: pxToRem(xs)
    },
    "@media (min-width: 700px)": {
      fontSize: pxToRem(s)
    },
    "@media (min-width:1024px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1920px)": {
      fontSize: pxToRem(lg),
    },
    "@media (min-width:2200px)": {
      fontSize: pxToRem(xl),
    },
    "@media (min-width:3200px)": {
      fontSize: pxToRem(xxl),
    },
    "@media (min-width:3600px)": {
      fontSize: pxToRem(xxxl),
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
      s: 480,
      sm: 1024,
      md: 1200,
      lg: 1920,
      xlg: 2200,
      xxlg: 3200,
      xxxlg: 3600
    },
  },

  typography: {
    fontFamily: "Overpass",
    h1: {
      fontSize: pxToRem(40),
      ...responsiveFontSize({
        sRotated: 50,
        xxs: 45,
        xs: 64,
        s: 130,
        sm: 180,
        md: 150,
        lg: 230,
        xl: 300,
        xxl: 360,
        xxxl: 200
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
