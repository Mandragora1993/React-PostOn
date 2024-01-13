import { createTheme } from '@mui/material/styles';
import { green, grey, yellow } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface ListTheme {
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

const listTheme: ListTheme = createTheme({
  palette: {
    primary: {
      main: green[600],
      contrastText: grey[50],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

const listStyles: SxProps<Theme> = {
  textDecoration: "none",
  display: {
    xs: "flex",
    md: "flex",
    color: "#fafafa"
  },
};

export { listTheme, listStyles };
