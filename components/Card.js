import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'
import Hidden from '@material-ui/core/Hidden'
import UndrawIcon from './UndrawIcon'

const useStyles = makeStyles(() => ({
    padTop1rem: {
        paddingTop: '4rem'
    }
}))

const Card = ({ card }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.padTop1rem}>
            <Grid xs={12} sm={12} md={5} item>
                {card.map(item => {
                    // could be parent to the rest below <MainContent />
                    if (item[0] === 'titulo') {
                        return <Typography align="center">{item[1]}</Typography>
                    } else if (item[0] !== 'imagens') {
                        //could be return <ItemsList />
                        return (
                            <List component="ul">
                                {item.slice(1).map(itensLista => (
                                    <ListItem>
                                        <ListItemText align="center">
                                            {itensLista}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        )
                    } else {
                        return (
                            //could be <ImageGrid />
                            <Grid container spacing={3} justify="center">
                                {item.slice(1).map(itensLista => (
                                    <Grid item xs={5} sm={4} md={3} lg={2}>
                                        <Image
                                            border={1}
                                            src="https://picsum.photos/seed/picsum/200"
                                            alt={itensLista}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )
                    }
                })}
            </Grid>

            <Grid item md={5}>
                <Hidden smDown>
                    <UndrawIcon />
                </Hidden>
            </Grid>
        </Grid>
    )
}

export default Card
