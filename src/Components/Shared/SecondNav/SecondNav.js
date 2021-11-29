import React from 'react';
import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SecondNav = () => {


    const { user, handleSignOut } = useAuth();

    return (
        <div>
            <div>
                <AppBar
                    style={{ background: 'white' }}
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Container>
                        <Toolbar sx={{ flexWrap: 'wrap' }}>
                            <Typography fontWeight='500' variant="h3" color="#2bde8c" noWrap sx={{ flexGrow: 1 }}>
                                <NavLink style={{ color: '#2bde8c', textDecoration: "none" }} to="/">Air Cnc</NavLink>
                            </Typography>
                            <nav>
                                <Link
                                    underline="none"
                                    variant="button"
                                    color="text.primary"
                                    href="#"
                                    sx={{ mx: 1 }}
                                >
                                    Help
                                </Link>
                            </nav>
                            {
                                user.email ?
                                    <Button onClick={handleSignOut} variant="outlined" sx={{ px: 3, py: 1, my: 1, mx: 1.5 }}>
                                        Log Out
                                    </Button> :
                                    <NavLink style={{textDecoration: "none" }} to="/login">
                                        <Button variant="outlined" sx={{ px: 3, py: 1, my: 1, mx: 1.5 }}>
                                            Login
                                        </Button>
                                    </NavLink>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        </div>
    );
};

export default SecondNav;