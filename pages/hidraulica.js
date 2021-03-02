import React from 'react'
import SectionItem from '../components/SectionItem'
import { fetchCMSDataLinkPage } from '../util/fetchGraphQL'

const Hidraulica = ({
    content: {
        data: { card = false }
    }
}) => {
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

    return (
        <SectionItem
            card={card}
            bread={'Serviços de Hidráulica'}
            linkBread={'hidraulica'}
        />
    )
}

export async function getStaticProps() {
    const content = await fetchCMSDataLinkPage('4Rq2zOhzBWvO11q4BcDEzp')
    return {
        props: { content }
    }
}

export default Hidraulica
