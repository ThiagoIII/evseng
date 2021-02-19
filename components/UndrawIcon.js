import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import UndrawIconSVG from '../public/undraw_connected_world_wuay.svg'

const UndrawIcon = () => {
    let viewBox = UndrawIconSVG().props.viewBox
    return (
        <>
            <SvgIcon
                viewBox={viewBox}
                component={UndrawIconSVG}
                style={{ width: '90%', height: 'auto' }}
            />
        </>
    )
}

export default UndrawIcon
