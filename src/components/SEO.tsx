import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description = 'SKYROOT - Providing premium services for our real estate clients with excellence and care.',
    name = 'SKYROOT',
    type = 'website',
    image = '/favicon.ico', // Default image, ideally a larger hero image
    url = 'https://skyroot.app',
}: SEOProps) {
    const pageTitle = title ? `${title} | ${name}` : name;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            {/* Open Graph tags for social media */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            {/* Twitter Card tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
