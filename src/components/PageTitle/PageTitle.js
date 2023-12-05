import React from 'react'
import Head from 'next/head'
import { assetsPrefix } from '../../utills/constants'

const PageTitle = ({ name }) => {
    return (
        <Head>
            <title>{name || 'Home'} | PharmacyShop</title>
            <meta name="title" content="Pharmacy Shop for you" />
            <meta name="description" content="Wearart! powered by Pharmacyshop online" />
            <link rel="icon" href={`${assetsPrefix}/assets/images/pharmacyshoplogo96.png`} />
            <meta property="og:title" content="{name} - PharmacyShop" />
            {/* <meta property="og:type" content="video.movie" /> */}
            {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
            <meta property="og:image" content={`${assetsPrefix}/assets/images/pharmacyshoplogo96.png`} />
        </Head>
    )
}

export default PageTitle
