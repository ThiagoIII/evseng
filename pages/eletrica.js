import React from 'react'
import SectionItem from '../components/SectionItem'
import { fetchCMSDataLinkPage } from '../util/fetchGraphQL'

const Eletrica = ({
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
            bread={'Serviços de Elétrica'}
            linkBread={'eletrica'}
        />
    )
}

export async function getStaticProps() {
    const content = await fetchCMSDataLinkPage('3pvtofhrQ6tDE3M5d6J1JR')
    return {
        props: { content }
    }
}

export default Eletrica
