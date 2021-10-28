import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/system';

const NavbarComponent = styled(AppBar)({
    backgroundColor: '#ffffff',
    color: '#3b3b3b',
    padding: '0 2vw'
});

const LinkComponent = styled(Link)({
    padding: '2px 5px',
    color: '#3b3b3b',
    fontWeight: 500,
    fontSize: '0.9rem',
    position: 'relative',
    letterSpacing: '1px',
    opacity: '0.8',
    ":hover": {
        opacity: '1'
    },
    ':before': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '3px',
        bottom: "0",
        left: "0",
        backgroundColor: '#4690FF',
        visibility: "hidden",
        transition: 'all 0.3s ease-in-out',
    },
    ':hover:before': {
        visibility: 'visible',
        width: '100%'
    }
});

const HideOnScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <NavbarComponent position="fixed">
                    <Toolbar>
                        <FlashOnOutlinedIcon sx={{ color: '#4690FF' }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: '700',
                                color: '#3b3b3b',
                                opacity: '0.9'
                            }}>
                            Turbin Listrik
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                typography: 'body1',
                                '& > :not(style) + :not(style)': {
                                    ml: 2,
                                },
                            }}
                        >
                            <LinkComponent href="#" underline="none">
                                {'Beranda'}
                            </LinkComponent>
                            <LinkComponent href="#" underline="none">
                                {'Lokasi'}
                            </LinkComponent>
                            <LinkComponent href="#" underline="none">
                                {'Monitoring'}
                            </LinkComponent>
                            <LinkComponent href="#" underline="none">
                                {'Artikel'}
                            </LinkComponent>
                            <LinkComponent href="#" underline="none">
                                {'Donasi'}
                            </LinkComponent>
                        </Box>
                    </Toolbar>
                </NavbarComponent>
            </HideOnScroll>
        </Box>
    )
}

export default Header
