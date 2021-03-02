import React from 'react'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    boxStyle: {
        position: 'absolute',
        top: '2.5rem',
        right: '1.5rem'
    }
})
const HamburgerNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState()
    const classes = useStyles()
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Hidden mdUp>
            <Box className={classes.boxStyle}>
                <MenuIcon
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    fontSize="large"
                >
                    Menu de navegação
                </MenuIcon>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <a href="/">Home</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href="empresa">A Empresa</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href="eletrica">Eletrica</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href="hidraulica">Hidraulica</a>
                    </MenuItem>
                </Menu>
            </Box>
        </Hidden>
    )
}

export default HamburgerNavbar
