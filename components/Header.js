import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Logo from '../components/Logo'
import ContactLinks from '../components/ContactLinks'

const Header = ({ light }) => {
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
                    >
                        <Hidden smDown>
                            <Typography align="center" fontWeight={500}>
                                Entre em contato conosco
                            </Typography>
                        </Hidden>
                        <Hidden mdUp>
                            <Typography
                                align="center"
                                fontWeight={500}
                                paragraph={true}
                            >
                                Qualidade e confiança
                            </Typography>
                        </Hidden>
                        <ContactLinks light={light} />
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

                    {/*  <Button onClick={() => setLight(prev => !prev)}>
                Mudar para o modo {light ? 'escuro' : 'claro'}
            </Button> */}
                </Grid>
            </Container>
        </Box>
    )
}

export default Header
