import { createTheme } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';

interface BaseTheme {
  palette: {
    primary: {
      main: string;
      contrastText: string;
      light: string;
      dark: string
    };
    secondary: {
      main: string;
      dark: string;
    };
  };
}

const baseTheme: BaseTheme = createTheme({
  palette: {
    primary: {
      main: green[600],
      contrastText: grey[50],
      light: green[50],
      dark: green[800]
    },
    secondary: {
      main: yellow[600],
      dark: yellow[800]
    },
  },
});

export { baseTheme };
