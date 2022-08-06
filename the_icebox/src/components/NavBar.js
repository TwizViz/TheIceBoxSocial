import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, Typography, Menu, MenuItem, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../helpers/pageItems';

const NavBar = () => {
    let nav = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(false);

    const handleLoginRequest = () => {
        nav('/login');
    }

    const handleRegisterRequest = () => {
        nav('/register');
    }

    const handleOpenNavMenu = (event) => {
        event.preventDefault();
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    }

    return(
        <AppBar position='static'>
            <Container maxWidth='xl' disableGutters>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            size='large'
                            aria-label='nav-menu'
                            aria-controls='navMenu'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='navMenu'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: 'block'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={() => {nav(page.path); setAnchorElNav(false)}}>
                                    <Typography textAlign='center'>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Typography component='h1' variant='h4' color='inherit'>
                            The Ice Box
                        </Typography>
                        <Box>
                            <Button variant='contained' type='button' onClick={handleLoginRequest} sx={{ mr: 2 }}>Sign In</Button>
                            <Button variant='contained' type='button' onClick={handleRegisterRequest} sx={{ ml: 'auto' }}>Sign Up</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;