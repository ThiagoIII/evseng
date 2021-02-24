import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

const Links = ({ href, text, light }) => {
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            style={{ color: light ? '#2D5C80' : '#ffffff' }}
        >
            {text}
        </Link>
    )
}

const ContactLinks = ({ light }) => (
    <Grid container justify="center" spacing={2}>
        <Grid item>
            <Links
                href={process.env.wa}
                text={'(44) 98834-5099'}
                light={light}
            />
        </Grid>
        <Grid item>
            <Links
                href={process.env.mail}
                text={'evsengenharia@outlook.com'}
                light={light}
            />
        </Grid>
        <Grid item>
            <Links
                href={process.env.face}
                text={'Facebook Evs Engenharia'}
                light={light}
            />
        </Grid>
        <Grid item>
            <Links
                href={process.env.insta}
                text={'Instagram Evs Engenharia'}
                light={light}
            />
        </Grid>
        <Grid item>
            <Links
                href={process.env.linkedin}
                text={'LinkdIn Evs Engenharia'}
                light={light}
            />
        </Grid>
    </Grid>
)

export default ContactLinks
