import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { Link as LinkMUI } from '@material-ui/core'
import Link from 'next/link'
import Logo from '../components/Logo'
import Switch from '@material-ui/core/Switch'
import ContactLinks from '../components/ContactLinks'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Header = ({ light, setLight }) => {
    const [anchorEl, setAnchorEl] = React.useState()

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box pt={2} pb={4}>
            <Container component="header">
                <Grid container>
                    <Grid
                        item
                        container
                        xs={12}
                        md={3}
                        justify="center"
                        alignItems="center"
                    >
                        <Logo />
                    </Grid>
                    <Grid
                        direction="column"
                        item
                        container
                        xs={12}
                        md={6}
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            {' '}
                            <Hidden smDown>
                                <Typography align="center" fontWeight={500}>
                                    Entre em contato conosco
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid item style={{ padding: '0' }}>
                            <Hidden mdUp>
                                <Typography
                                    align="center"
                                    fontWeight={500}
                                    paragraph={true}
                                >
                                    Qualidade e confiança
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid item>
                            <ContactLinks light={light} />
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid
                            item
                            container
                            md={3}
                            justify="center"
                            alignItems="center"
                        >
                            {' '}
                            <Typography align="center" fontWeight={500}>
                                Qualidade e confiança é EVS Engenharia
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Box
                        style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '1rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={() => setLight(prev => !prev)}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                        />
                        <Typography>
                            Mudar para o modo {light ? 'escuro' : 'claro'}
                        </Typography>
                    </Box>
                </Grid>
                <Hidden smDown>
                    <Grid container justify="center">
                        <Typography style={{ display: 'flex', gap: '1rem' }}>
                            <Link href="/">
                                <LinkMUI color="inherit"> Home |</LinkMUI>
                            </Link>
                            <Link href="empresa">
                                <LinkMUI color="inherit"> A Empresa | </LinkMUI>
                            </Link>
                            <Link href="eletrica">
                                <LinkMUI color="inherit">
                                    Serviços de Elétrica |{' '}
                                </LinkMUI>
                            </Link>
                            <Link href="hidraulica">
                                <LinkMUI color="inherit">
                                    Serviços de Hidráulica
                                </LinkMUI>
                            </Link>
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Box
                        style={{
                            position: 'absolute',
                            top: '2.5rem',
                            right: '1.5rem'
                        }}
                    >
                        <MenuIcon
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            fontSize="large"
                        >
                            Menu de navegação
                        </MenuIcon>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <a href="/">Home</a>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <a href="empresa">A Empresa</a>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <a href="eletrica">Eletrica</a>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <a href="hidraulica">Hidraulica</a>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Hidden>
            </Container>
        </Box>
    )
}

export default Header
