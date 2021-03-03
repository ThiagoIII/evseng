import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link as LinkMUI } from '@material-ui/core'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Links = ({ href, light, ...rest }) => {
    return (
        <LinkMUI
            href={href}
            target="_blank"
            style={{ color: light ? '#2D5C80' : '#ffffff' }}
        >
            <Grid container alignItems="center">
                <Grid item>
                    {rest.icon && rest.text ? (
                        <Box mr={1}>{rest.icon}</Box>
                    ) : (
                        <Box>{rest.icon}</Box>
                    )}
                </Grid>
                <Grid item style={{ height: '100%' }}>
                    <Typography style={{ height: '100%' }}>
                        {rest.text}
                    </Typography>
                </Grid>
            </Grid>
        </LinkMUI>
    )
}
export default Links
