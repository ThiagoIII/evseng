import React from 'react'
import Head from 'next/head'

const HeadComp = () => (
    <Head>
        {' '}
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://s.pageclip.co/v1/pageclip.css"
            media="screen"
        ></link>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>EVS Engenharia - Qualidade e Confiança</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default HeadComp
