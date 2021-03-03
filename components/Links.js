import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link as LinkMUI } from '@material-ui/core'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    h100: {
        height: '100%'
    }
})
const Links = ({ href, light, ...rest }) => {
    const classes = useStyles()

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
                <Grid item className={classes.h100}>
                    <Typography className={classes.h100}>
                        {rest.text}
                    </Typography>
                </Grid>
            </Grid>
        </LinkMUI>
    )
}
export default Links
