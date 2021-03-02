import React from 'react'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    gridBase: {
        display: 'flex',
        gap: '1rem'
    },
    whiteSpacePreWrap: {
        whiteSpace: 'pre-wrap'
    }
})
const SectionItem = ({ card, ...rest }) => {
    const classes = useStyles()
    return (
        <Layout>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href={`${rest.linkBread}`}>
                    {rest.bread}
                </Link>
            </Breadcrumbs>
            <Grid
                xs={10}
                container
                alignItems="center"
                justify="center"
                direction="column"
                className={classes.gridBase}
            >
                <Grid item>
                    <Typography
                        xs={12}
                        align="center"
                        variant="h5"
                        paragraph={true}
                        gutterBottom={true}
                    >
                        {card.title}
                    </Typography>
                </Grid>
                <Grid item>
                    <pre className={classes.whiteSpacePreWrap}>
                        {' '}
                        <Typography align="left" variant="body2">
                            {card.text}
                        </Typography>
                    </pre>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default SectionItem
