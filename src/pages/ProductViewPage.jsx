import React from "react";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Layout from "../components/Layout.jsx";

export default function ProductViewPage() {
    return (
        <Layout>
            <div className="flex mb-6">
            <Gallery className="h-96 overflow-hidden" />
            </div>
            <div className="mt-36">
            <Section 
            title="Produtos em Alta" titleAlign="Left"
            link={
                {
                    "text": "ver todos",
                    "href": "https://redirect.link"
                }
            }>
            <ProductListing maxNumber='4' />

            </Section>
                </div>
        </Layout>
    )
}