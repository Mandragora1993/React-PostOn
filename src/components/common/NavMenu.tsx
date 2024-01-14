import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { green, yellow } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import './../../style/navMenu.css'
import { baseTheme } from "../../style/baseTheme";


export function NavMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);
  const navigate = useNavigate();

  const generateAndNavigate = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setGeneratedNumber(randomNumber);
    navigate(`/profile/${randomNumber}`);
  };

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -40,
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 100,
    height: 100,
    '&:hover': {
      background: yellow[800],
    },
  });

  return (
      <AppBar className="navMenu">
        <Toolbar>
          <div onClick={generateAndNavigate} style={{ cursor: 'pointer' }}>
            <IconButton aria-label="profile"
              sx={{
                color: baseTheme.palette.primary.contrastText,
                '&:hover': {
                  background: baseTheme.palette.secondary.dark,
                },
              }}>
              <AccountCircleIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          </div>
          <Link to="/add-post">
            <StyledFab
              color="secondary" aria-label="add post">
              <PostAddIcon
                sx={{
                  fontSize: '60px',
                  color: baseTheme.palette.primary.contrastText,
                }} />
            </StyledFab>
          </Link>
        </Toolbar>
      </AppBar>
  );
}