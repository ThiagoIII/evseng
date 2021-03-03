import React from 'react'
import Layout from '../layout/Layout'
import '../styles/globals.css'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { themeLight, themeDark } from '../util/darkLight'
function MyApp({ Component, pageProps }) {
    const [light, setLight] = React.useState(true)
    return (
        <MuiThemeProvider theme={light ? themeLight : themeDark}>
            <Layout setLight={setLight} light={light}>
                <Component {...pageProps} />
            </Layout>
        </MuiThemeProvider>
    )
}

export default MyApp
