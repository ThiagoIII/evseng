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
        <link rel="me" href="https://github.com/ThiagoIII" type="text/html" />
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        {/* Launch Icon (180x180px or larger) */}
        <link rel="apple-touch-startup-image" href="/path/to/launch.png" />{' '}
        {/* launch screen image */}
        <meta name="apple-mobile-web-app-title" content="App Title" />{' '}
        {/* Launch Icon Title */}
        <meta name="apple-mobile-web-app-capable" content="yes" />{' '}
        {/* Enable standalone (full-screen) mode */}
        <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black"
        />{' '}
        {/* Status bar appearance (has no effect unless standalone mode is enabled) */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta property="fb:app_id" content="123456789" />
        <meta property="og:url" content="https://example.com/page.html" />
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="EVS Engenharia - Qualidade e confiança"
        />
        <meta
            property="og:image"
            content="https://evseng.vercel.app/facebook.svg"
        />
        <meta
            property="og:image:alt"
            content="Logo da EVS Engenharia, dois telhados azuis se sobrepondo parcialmente"
        />
        <meta
            property="og:description"
            content="Empresa EVS Engenharia - Qualidade e confiança. Sede em Umuarama no Paraná"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:author" content="Thiago Terceiro" />
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
            name="description"
            content="Site da empresa de engenharia EVS Engenharia - Qualidade e confiança com sede em Umuarama - Paraná"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="subject" content="Engenharia" />
        <meta name="geo.region" content="BR-PR"></meta>
        <meta name="geo.placename" content="Umuarama"></meta>
        <title>EVS Engenharia - Qualidade e Confiança</title>
        <link rel="icon" href="/logoEVS.png" />
    </Head>
)

export default HeadComp
