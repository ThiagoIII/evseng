import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    whiteSpacePreWrap: {
        whiteSpace: 'pre-wrap'
    }
})
const SectionItem = ({ card, ...rest }) => {
    const classes = useStyles()
    return (
        <Box p={6}>
            <Breadcrumbs ml={6} aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href={`${rest.linkBread}`}>
                    {rest.bread}
                </Link>
            </Breadcrumbs>
            <Grid
                item
                xs={12}
                container
                spacing={4}
                alignItems="center"
                justify="center"
                direction="column"
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
        </Box>
    )
}

export default SectionItem
