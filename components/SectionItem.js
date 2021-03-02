import React from 'react'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const SectionItem = ({ card, ...rest }) => {
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
                style={{ margin: '1rem auto' }}
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
                    <pre
                        style={{
                            whiteSpace: 'pre-wrap'
                        }}
                    >
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
