import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Head from '../components/HeadComp'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section'
import { themeLight, themeDark } from '../util/darkLight'
import { fetchGraphQLProd as fetchCMSDataProd } from '../util/fetchGraphQL'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
    root: {
        '& label': {
            width: '60%',
            fontSize: '1.1rem'
        },
        '& input': {
            width: '60%',
            fontSize: '1rem',
            border: 'none',
            borderBottom: 'solid #888686 1px',
            margin: '0.5rem 0 1.5rem 0',

            '&::placeholder': {
                color: '#888686',
                fontSize: '0.95rem',
                letterSpacing: '18%'
            }
        }
    }
})

export default function Home({ allCards }) {
    const [light, setLight] = React.useState(true)
    const classes = useStyles()
    return (
        <>
            <Head />
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <CssBaseline />
                <Header mb={10} light={light} />
                <Grid container component="section">
                    <Section allCards={allCards} />
                </Grid>
                <Grid container xs={12} justify="center">
                    <Grid container xs={10} md={8} lg={6}>
                        <form
                            action="https://kwes.io/api/foreign/forms/be4vVabxv6v4WwS6X8Vw"
                            className={`kwes-form ${classes.root}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyItems: 'center',
                                width: '100%',
                                margin: '2rem auto',
                                border: 'solid #BFBFBF 1px',
                                borderRadius: '4px',
                                padding: '0.5rem'
                            }}
                        >
                            <label htmlFor="name">
                                Insira seu nome aqui, por favor.
                            </label>
                            <input
                                autoFocus
                                type="text"
                                name="name"
                                placeholder="Nome"
                            />
                            <label htmlFor="email">
                                Insira seu email aqui, por favor.
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <label htmlFor="tel">
                                Insira seu telefone aqui, por favor.(Opcional)
                            </label>
                            <input
                                type="tel"
                                // pattern="/^\(?([0-9]{2})\)?[ ]?([0-9]{5})[-]?([0-9]{4})$/"
                                name="tel"
                                placeholder="Telefone"
                            />
                            <label htmlFor="mensagem">
                                Insira seu mensagem aqui, por favor.
                            </label>
                            <input
                                type="text"
                                name="mensagem"
                                placeholder="Mensagem"
                            />
                            <Fab
                                variant="extended"
                                style={{ backgroundColor: '#2D5C80' }}
                                color="secondary"
                                aria-label="submit"
                                size="small"
                                type="submit"
                            >
                                Submit
                            </Fab>
                            {/* <button type="submit">Submit</button> */}
                        </form>
                    </Grid>
                </Grid>
                <footer>
                    Developed by{' '}
                    <Link
                        href="https://github.com/ThiagoIII?tab=repositories"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Thiago Terceiro
                    </Link>
                </footer>
            </MuiThemeProvider>
            <script src="https://kwes.io/v2/kwes-script.js" defer></script>
        </>
    )
}

export async function getStaticProps() {
    const allCards = await fetchCMSDataProd()
    return {
        props: { allCards }
    }
}
