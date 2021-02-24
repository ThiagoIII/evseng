import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Head from '../components/HeadComp'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section'
import { themeLight, themeDark } from '../util/darkLight'
import { fetchGraphQL as fetchCMSData } from '../util/fetchGraphQL'

export default function Home({ allCards }) {
    const [light, setLight] = React.useState(true)

    return (
        <>
            <Head />
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <CssBaseline />
                <Header light={light} />
                <Grid container component="section">
                    <Section allCards={allCards} />
                </Grid>
            </MuiThemeProvider>
        </>
    )
}

export async function getStaticProps() {
    const allCards = await fetchCMSData()
    console.log('inside getstaticprops', allCards)
    return {
        props: { allCards }
    }
}
