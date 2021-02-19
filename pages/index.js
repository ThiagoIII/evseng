import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Head from '../components/HeadComp'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
//import Link from '@material-ui/core/Link'
//import Grid from '@material-ui/core/Grid'
import ContactLinks from '../components/ContactLinks'
//import Image from 'material-ui-image'
import Logo from '../components/Logo'
import Button from '@material-ui/core/Button'
import Card from '../components/Card'
import { themeLight, themeDark } from '../util/darkLight'

export default function Home() {
    const [light, setLight] = React.useState(true)
    let cards = [
        [
            ['titulo', 'Serviços Elétrica'],
            ['lista', 'te1e', 'te2e', 'te3e', 'te4e', 'te5e']
        ],

        [
            ['titulo', 'Serviços Hidráulica'],
            ['lista', 'te1h', 'te2h', 'te3h', 'te4h', 'te5h']
        ],
        [
            ['titulo', 'Empresa'],
            ['texto', 'te1em']
        ],

        [
            ['titulo', 'Missâo'],
            ['texto', 'te1mi'],
            ['titulo', 'Visão'],
            ['texto', 'te2mi'],
            ['titulo', 'Valores'],
            ['texto', 'te3mi']
        ],
        [
            ['titulo', 'Parceiros'],
            [
                'imagens',
                'img1',
                'img2',
                'img3',
                'img4',
                'img5',
                'img6',
                'img7',
                'img8',
                'img9'
            ]
        ]
    ] //will be retrieved from graphql

    return (
        <>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <CssBaseline />
                <Head />
                {/*  <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head> */}

                <Container component="header" style={{ paddingTop: '1rem' }}>
                    <Typography align="center" style={{ fontWeight: '500' }}>
                        Qualidade e confiança
                    </Typography>
                    <Logo />

                    <Button onClick={() => setLight(prev => !prev)}>
                        Mudar para o modo {light ? 'escuro' : 'claro'}
                    </Button>
                    <ContactLinks light={light} />
                </Container>
                {cards.map(card => (
                    <Card card={card} />
                ))}
            </MuiThemeProvider>
        </>
    )
}
