import React from "react";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Layout from "../components/Layout.jsx";

export default function ProductViewPage() {
    
    return (
        <Layout>
            <div className="overflow-hidden">
                <div className="bg-[--light-gray-3] w-screen">
                    <div id="tagline" className="tracking-widest text-bold py-6 pl-6">
                    Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
                    </div>
                </div>
            <Gallery height="570px" width="900px" />
            </div>
            <div className="mt-10">
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