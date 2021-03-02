import React from 'react'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { fetchCMSDataLinkPage } from '../util/fetchGraphQL'
import SectionItem from '../components/SectionItem'

const Empresa = (
    { content: { data: { card = false } } = { data: 'nodata' } } = {
        content: 'nocontent'
    }
) => {
    if (!card)
        return (
            <>
                <a
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        margin: '2rem'
                    }}
                    href="/"
                    title="link to index"
                >
                    Voltar para a página principal
                </a>
                <h1
                    style={{
                        width: '70%',
                        textAlign: 'center',
                        margin: '1rem auto'
                    }}
                >
                    Oops, something went wrong, care to go back and try again,
                    please ? If this mistake happens again please contact the
                    page administrator.
                </h1>
            </>
        )

    return <SectionItem card={card} />
}

export async function getStaticProps() {
    const content = await fetchCMSDataLinkPage('1xzLwuv1NgsRHBglvUv9k4')
    return {
        props: { content }
    }
}

export default Empresa
