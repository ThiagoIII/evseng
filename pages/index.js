import React from 'react'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section'
import { fetchGraphQLProd as fetchCMSDataProd } from '../util/fetchGraphQL'
import Layout from '../layout/Layout'

export default function Home({ content }) {
    return (
        <>
            <Layout>
                <Grid container component="section">
                    <Section allCards={content} />
                </Grid>
            </Layout>

            <script src="https://kwes.io/v2/kwes-script.js" defer></script>
        </>
    )
}

export async function getStaticProps() {
    const content = await fetchCMSDataProd()
    return {
        props: { content }
    }
}
