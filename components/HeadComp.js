import React from 'react'
import Head from 'next/head'

const HeadComp = () => (
    <Head>
        {' '}
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>EVS Engenharia - Qualidade e Confianças</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default HeadComp
