import React from 'react'
import Grid from '@material-ui/core/Grid'
import Links from '../components/Links'
import linkSources from '../util/linksSource'

const ContactLinks = ({ light }) => (
    <Grid container alignItems="center" justify="center" spacing={2}>
        {linkSources.map(link => {
            return Array.isArray(link) === false ? (
                <Grid item>
                    <Links
                        href={link.href}
                        text={link.text}
                        light={light}
                        icon={link.icon}
                    />
                </Grid>
            ) : (
                <Grid item>
                    <Grid container direction="row">
                        {link.map(linkTogether => (
                            <Links
                                href={linkTogether.href}
                                text={linkTogether.text}
                                light={light}
                                icon={linkTogether.icon}
                            />
                        ))}
                    </Grid>
                </Grid>
            )
        })}
    </Grid>
)

export default ContactLinks
