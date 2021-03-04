import React from 'react'
import Grid from '@material-ui/core/Grid'
import Links from '../components/Links'
import linkSources from '../util/linksSource'
import Typography from '@material-ui/core/Typography'

const ContactLinks = ({ light }) => (
    <Grid
        container
        alignItems="center"
        justify="center"
        spacing={2}
        direction="row"
    >
        {linkSources.map(link => {
            return Array.isArray(link) === false ? (
                <Grid item key="abc">
                    <Links
                        href={link.href}
                        text={link.text}
                        light={light}
                        icon={link.icon}
                        key={link.id}
                    />
                </Grid>
            ) : (
                <Grid item key="def">
                    <Grid container direction="row">
                        {link.map(linkTogether => (
                            <Links
                                href={linkTogether.href}
                                text={linkTogether.text}
                                light={light}
                                icon={linkTogether.icon}
                                key={linkTogether.id}
                            />
                        ))}
                    </Grid>
                </Grid>
            )
        })}
        <Grid item key="ghi">
            <Typography>evsengenharia@outlook.com</Typography>
        </Grid>
    </Grid>
)

export default ContactLinks
