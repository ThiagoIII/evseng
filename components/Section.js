import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import MessageError from '../components/MessageError'
import checkSupportForWebP from '../util/promiseTestImage'

const Section = ({
    allCards: {
        data: {
            cardCollection: { items = [] }
        }
    },
    light
}) => {
    if (!items) return <MessageError />

    let matches = useMediaQuery('(min-width:960px)')
    return (
        <>
            {items.map((section, index) => {
                let i = index % 2 === 0
                let matche = !matches && i
                return (
                    <Box
                        clone
                        pt={5}
                        order={section.order}
                        key={section.id}
                        px={3}
                        style={
                            light
                                ? matche
                                    ? {
                                          backgroundColor: '#2D5C80',
                                          color: '#ffffff',
                                          position: 'relative'
                                      }
                                    : {
                                          backgroundColor: '#ffffff',
                                          color: '#2D5C80',
                                          position: 'relative'
                                      }
                                : { position: 'relative' }
                        }
                        key={section.id}
                    >
                        <Grid item xs={12}>
                            {section.title.includes('Elétrica') ? (
                                <Hidden mdUp>
                                    <Container
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: '/wire.jpg',
                                            backgroundPosition: 'center',
                                            backgroundOrigin: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            opacity: '0.1'
                                        }}
                                    />
                                </Hidden>
                            ) : section.title.includes('Hidráulica') ? (
                                <Hidden mdUp>
                                    <Container
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: '/pipe.jpg',
                                            backgroundPosition: 'center',
                                            backgroundOrigin: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            opacity: '0.1'
                                        }}
                                    />
                                </Hidden>
                            ) : null}

                            <Typography
                                xs={12}
                                align="center"
                                variant="h5"
                                paragraph={true}
                                gutterBottom={true}
                            >
                                {section.title}
                            </Typography>
                            <Grid
                                item
                                container
                                spacing={1}
                                justify="center"
                                direction={
                                    section.order % 2 === 0
                                        ? 'row'
                                        : 'row-reverse'
                                }
                                xs={12}
                            >
                                <Grid
                                    xs={9}
                                    md={5}
                                    item
                                    container
                                    alignItems="center"
                                    justify="center"
                                >
                                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                                        {' '}
                                        <Typography
                                            align="left"
                                            variant="body2"
                                        >
                                            {section.landing}
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
                )
            })}
        </>
    )
}

export default Section
