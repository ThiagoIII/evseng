import React from 'react'
import SectionItem from '../components/SectionItem'
import { fetchCMSDataLinkPage } from '../util/fetchGraphQL'
import MessageError from '../components/MessageError'
const Eletrica = ({
    content: {
        data: { card = false }
    }
}) => {
    if (!card) return <MessageError />

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
