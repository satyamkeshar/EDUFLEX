import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-footer="true" data-placement="vertical" data-behaviour="pinned" data-layout="boxed" data-radius="standard" data-color="light-blue" data-navcolor="dark" data-show="true" data-dimension="Desktop" >
            <Head >
                <link rel="preconnect" href="https://fonts.gstatic.com/" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/font/CS-Interface/style.css" />
                <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/OverlayScrollbars.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/glide.core.min.css" />
                <link rel="stylesheet" href="/assets/css/styles.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}