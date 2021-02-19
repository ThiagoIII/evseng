import React from 'react'
import Image from 'material-ui-image'

const Logo = () => (
    <Image
        src="/logoEVS.png"
        animationDuration={500}
        style={{
            height: 'auto',
            textAlign: 'center',
            paddingTop: '0'
        }}
        imageStyle={{
            position: 'relative',
            width: '220px',
            height: '140px',
            margin: '0 auto 0 auto'
        }}
    />
)

export default Logo
