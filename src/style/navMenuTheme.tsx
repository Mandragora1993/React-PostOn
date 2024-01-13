import { createTheme } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface navMenuTheme {
  palette: {
    primary: {
      main: string;
      contrastText: string;
    };
    secondary: {
      main: string;
    };
  };
}

const navMenuTheme = createTheme({
  palette: {
    primary: {
      main: green[600],
      contrastText: grey[100],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

export { navMenuTheme };
