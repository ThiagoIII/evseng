import React from 'react'
import Image from 'material-ui-image'
import Grid from '@material-ui/core/Grid'

const Logo = () => (
    <Grid item container xs={12} md={3} justify="center" alignItems="center">
        <Image
            src="/logoEVS.png"
            animationDuration={500}
            style={{
                height: 'auto',
                textAlign: 'center',
                paddingTop: '0',
                backgroundColor: 'none'
            }}
            imageStyle={{
                position: 'relative',
                width: '220px',
                height: '140px',
                margin: '0 auto -1rem auto'
            }}
        />
    </Grid>
)

export default Logo
