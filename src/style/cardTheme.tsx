import { createTheme } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface CardTheme {
  palette: {
    primary: {
      main: string;
      contrastText: string;
      light: string;
      dark: string
    };
    secondary: {
      main: string;
    };
  };
}

const cardTheme: CardTheme = createTheme({
  palette: {
    primary: {
      main: green[600],
      contrastText: grey[50],
      light: green[50],
      dark: green[800]
    },
    secondary: {
      main: yellow[600],
    },
  },
});

const cardStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: cardTheme.palette.primary.light,
  color: cardTheme.palette.primary.dark,
  borderRadius: "0"
};

export { cardTheme, cardStyles };
