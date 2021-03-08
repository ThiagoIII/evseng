import React from 'react'
import Image from 'material-ui-image'
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'

const Logo = () => (
    <Grid item container xs={12} md={3} justify="center" alignItems="center">
        <motion.div
            initial={{ x: '-300%' }}
            animate={{ x: '0' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
        >
            <Image
                srcSet="/logoEVS_webp.webp  213w"
                src="/logoevs_small.png"
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
        </motion.div>
    </Grid>
)

export default Logo
