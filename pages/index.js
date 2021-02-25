import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
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
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSc5IojflPJPmZPpWxK2pnc-SvupWNjzgZzUuBQ235E_eGTYiw/viewform?embedded=true"
                    width="640"
                    height="820"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
                <form
                    action="https://kwes.io/api/foreign/forms/be4vVabxv6v4WwS6X8Vw"
                    className="kwes-form"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%'
                    }}
                >
                    <label htmlFor="name" defaultValue="name">
                        name
                    </label>
                    <input type="text" name="name" />
                    <label htmlFor="email" defaultValue="email" />
                    <input type="email" name="email" />
                    <label htmlFor="tel" defaultValue="tel" />
                    <input type="number" name="tel" />
                    <label htmlFor="mensagem" defaultValue="msg" />
                    <input type="text" name="mensagem" />

                    <button type="submit">Submit</button>
                </form>
            </MuiThemeProvider>
            <script src="https://kwes.io/v2/kwes-script.js" defer></script>
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
