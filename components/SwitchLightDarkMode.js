import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const SwitchLightDarkMode = ({ light, setLight }) => {
    return (
        <>
            <Box
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '1rem',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <FormControlLabel
                    control={
                        <Switch
                            onChange={() => setLight(prev => !prev)}
                            name="checkedB"
                            color="primary"
                        />
                    }
                />
                <Typography>
                    Mudar para o modo {light ? 'escuro' : 'claro'}
                </Typography>
            </Box>
        </>
    )
}

export default SwitchLightDarkMode
