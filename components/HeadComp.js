import React from 'react'
import Head from 'next/head'

const HeadComp = () => (
    <Head>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta charSet="utf-8" />
        <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' https://kwes.io/ https://apis.google.com; font-src 'self' https://fonts.googleapis.com/"
        ></meta>
        <script src="https://kwes.io/v2/kwes-script.js" async />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="me" href="https://github.com/ThiagoIII" type="text/html" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#141414" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:url" content="https://evseng.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="EVS Engenharia - Qualidade e confiança"
        />
        <meta
            property="og:image"
            content="https://evseng.vercel.app/logoEVS.png"
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
