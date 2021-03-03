import '../styles/globals.css'
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import { themeLight, themeDark } from '../util/darkLight'
function MyApp({ Component, pageProps }) {
    const [light, setLight] = React.useState(true)
    return (
        <MuiThemeProvider theme={light ? themeLight : themeDark}>
            <Layout setLight={setLight}>
                <Component {...pageProps} light={light} />
            </Layout>
        </MuiThemeProvider>
    )
}

export default MyApp
