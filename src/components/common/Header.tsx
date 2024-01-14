import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import CameraIcon from '@mui/icons-material/Camera';
import { baseTheme } from "../../style/baseTheme";


export function Header() {

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="static" color="primary">
      <Container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        component={Link}
        to="/"
        sx={{
          textDecoration: "none",
          color: baseTheme.palette.primary.contrastText,
          textAlign: "center",
        }}
      >
        Phot<CameraIcon sx={{ fontSize: 105,position:"relative",bottom:"10px", verticalAlign: "middle", color: baseTheme.palette.secondary.main }} />n
      </Typography>
    </Container>
      </AppBar>
    </Box>
  );
}
