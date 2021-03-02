import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from '../components/Logo'
import HeaderContactSlogan from '../components/HeaderContactSlogan'
import SwitchLightDarkMode from '../components/SwitchLightDarkMode'
import HamburgerNavbar from './HamburgerNavbar'
import Navbar from './Navbar'

const Header = ({ light, setLight }) => {
    return (
        <Box pt={2} pb={4}>
            <Container component="header">
                <Grid container>
                    <Logo />
                    <HeaderContactSlogan light={light} />
                    <SwitchLightDarkMode light={light} setLight={setLight} />
                </Grid>
                <Navbar />
                <HamburgerNavbar />
            </Container>
        </Box>
    )
}

export default Header
