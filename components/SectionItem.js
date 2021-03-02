import React from 'react'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const SectionItem = ({ card }) => {
    return (
        <Layout>
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
