import React from 'react'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section'
import { fetchGraphQLProd as fetchCMSDataProd } from '../util/fetchGraphQL'
import Layout from '../layout/Layout'
import Link from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

export default function Home({ content, light }) {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
            </Breadcrumbs>
            <Grid container component="section">
                <Section allCards={content} light={light} />
            </Grid>
        </>
    )
}

export async function getStaticProps() {
    const content = await fetchCMSDataProd()
    return {
        props: { content }
    }
}
