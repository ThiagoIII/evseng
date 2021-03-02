import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'

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

const Form = () => {
    const classes = useStyles()
    return (
        <>
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
                        <input type="text" name="name" placeholder="Nome" />
                        <label htmlFor="email">
                            Insira seu email aqui, por favor.
                        </label>
                        <input type="email" name="email" placeholder="Email" />
                        <label htmlFor="tel">
                            Insira seu telefone aqui, por favor.(Opcional)
                        </label>
                        <input type="tel" name="tel" placeholder="Telefone" />
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
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default Form
