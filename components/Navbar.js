import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { Link as LinkMUI } from '@material-ui/core'
import Link from 'next/link'

const Navbar = () => {
    return (
        <Hidden smDown>
            <Grid container justify="center">
                <Typography style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/">
                        <LinkMUI color="inherit"> Home |</LinkMUI>
                    </Link>
                    <Link href="empresa">
                        <LinkMUI color="inherit"> A Empresa | </LinkMUI>
                    </Link>
                    <Link href="eletrica">
                        <LinkMUI color="inherit">
                            Serviços de Elétrica |
                        </LinkMUI>
                    </Link>
                    <Link href="hidraulica">
                        <LinkMUI color="inherit">
                            Serviços de Hidráulica
                        </LinkMUI>
                    </Link>
                </Typography>
            </Grid>
        </Hidden>
    )
}

export default Navbar
