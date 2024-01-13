import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import CameraIcon from '@mui/icons-material/Camera';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { headerTheme, headerStyles } from "../../style/headerTheme"


export function Header() {

  return (
    <ThemeProvider theme={headerTheme}>
      <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
        <AppBar position="static" color="primary">
          <Container>
            <Typography
              variant="h1"
              component={Link}
              to="/"
              sx={{ ...headerStyles }}
            >
              Phot<CameraIcon sx={{ fontSize: 105 }} color="secondary" />n
            </Typography>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
