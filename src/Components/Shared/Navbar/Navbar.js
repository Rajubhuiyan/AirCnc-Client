import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
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
                            Air Cnc
                        </Typography>
                        <nav>
                            <Link
                                underline="none"
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ mx: 1 }}
                            >
                                Host Your Home
                            </Link>
                            <Link
                                underline="none"
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ mx: 1 }}
                            >
                                Host Your Experience
                            </Link>
                            <Link
                                underline="none"
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ mx: 1 }}
                            >
                                Help
                            </Link>
                            <Link
                                underline="none"
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ mx: 1 }}
                            >
                                Sign In
                            </Link>
                        </nav>
                        <Button href="#" variant="outlined" sx={{ px: 3, py: 1, my: 1,  mx: 1.5 }}>
                            Login
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;