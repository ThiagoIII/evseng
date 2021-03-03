import React from 'react'
import Head from '../components/HeadComp'
import CssBaseline from '@material-ui/core/CssBaseline'

import { themeLight, themeDark } from '../util/darkLight'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Layout = ({ children, setLight, light }) => {
    //const [light, setLight] = React.useState(true)

    return (
        <>
            <Head />
            <CssBaseline />
            <Header mb={10} light={light} setLight={setLight} />
            {children}
            <Form />
            <Footer />
        </>
    )
}

export default Layout
