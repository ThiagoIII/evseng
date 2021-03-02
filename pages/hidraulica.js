import React from 'react'
import SectionItem from '../components/SectionItem'
import { fetchCMSDataLinkPage } from '../util/fetchGraphQL'

const Hidraulica = (
    {
        content: { data: { card } = { card: 'no card' } } = { data: 'no data' }
    } = { content: 'no content' }
) => {
    // console.log('content', content, 'data', data, 'card', card)
    !card && (
        <h1>
            Oops, something went wrog, care to go back and try again, please ? I
            tis mistake happens again please contact the page administrator.
        </h1>
    )

    return <SectionItem card={card} />
}

export async function getStaticProps() {
    const content = await fetchCMSDataLinkPage('4Rq2zOhzBWvO11q4BcDEzp')
    return {
        props: { content }
    }
}

export default Hidraulica
