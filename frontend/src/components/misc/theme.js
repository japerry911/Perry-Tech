import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const perryBlue = "#2f4454";
const perryRed = "#2e151b";
const perryPink = "#da7b93";
const perryLightGreen = "#376e6f";
const perryDarkGreen = "#1c3334";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: perryBlue,
      },
      secondary: {
        main: perryRed,
      },
      common: {
        blue: perryBlue,
        red: perryRed,
        pink: perryPink,
        lightGreen: perryLightGreen,
        darkGreen: perryDarkGreen,
      },
    },
  })
);

export default theme;
