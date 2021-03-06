import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import ContactLinks from '../components/ContactLinks'

const HeaderContactSlogan = ({ light }) => {
    return (
        <>
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
        </>
    )
}

export default HeaderContactSlogan
