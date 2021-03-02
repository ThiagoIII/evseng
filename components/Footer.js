import React from 'react'
import Link from '@material-ui/core/Link'
const Footer = () => {
    return (
        <footer>
            Developed by{' '}
            <Link
                href="https://github.com/ThiagoIII?tab=repositories"
                target="_blank"
                rel="noreferrer noopener"
            >
                Thiago Terceiro
            </Link>
        </footer>
    )
}

export default Footer
