import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import { fetchGraphQL as fetchCMSData } from '../util/fetchGraphQL'

const Section = ({ allCards }) => {
    const [data, setData] = React.useState([])

    console.log('section receviend static props hopefully : ', allCards)

    React.useEffect(() => {
        async function getInfo() {
            let info = await fetchCMSData()
            setData(info?.data?.cardCollection?.items)
        }
        getInfo()
    }, [])

    if (data.lenght === 0) {
        return <h2>Fetching stuff</h2>
    }
    return (
        <>
            {data.map(section => (
                <Box clone pt={5} order={section.order} key={section.order}>
                    <Grid item xs={12}>
                        <Typography
                            xs={12}
                            align="center"
                            variant="h5"
                            paragraph={true}
                            gutterBottom={true}
                        >
                            {section.title}
                        </Typography>
                        <Grid container spacing={1} justify="center" xs={12}>
                            <Grid
                                xs={12}
                                md={5}
                                item
                                container
                                alignItems="center"
                            >
                                <pre
                                    style={{
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {' '}
                                    <Typography align="left" variant="body2">
                                        {section.text}
                                    </Typography>
                                </pre>
                            </Grid>
                            <Hidden smDown>
                                <Grid
                                    item
                                    container
                                    justify="center"
                                    alignItems="center"
                                    md={5}
                                >
                                    <img
                                        src={section.svgImage.url}
                                        style={{
                                            width: '80%',
                                            height: 'auto'
                                        }}
                                    />
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </>
    )
}

export default Section
