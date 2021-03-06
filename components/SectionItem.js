import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as LinkMUI } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const SectionItem = ({ card, ...rest }) => {
    return (
        <Box p={6}>
            <Breadcrumbs ml={6} aria-label="breadcrumb">
                <Link href="/">
                    <LinkMUI color="inherit">Home</LinkMUI>
                </Link>
                <Link href={`${rest.linkBread}`}>
                    <LinkMUI color="inherit">{rest.bread}</LinkMUI>
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
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
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
