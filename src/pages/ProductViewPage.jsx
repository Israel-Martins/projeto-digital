import React from "react";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";
import ProductListing from "../components/ProductListing.jsx";
import BuyBox from "../components/BuyBox.jsx";
import ProductOptions from "../components/ProductOptions.jsx";
import Layout from "../components/Layout.jsx";
import { useState, useEffect } from "react";

export default function ProductViewPage() {
    const sizes = ['39', '40', '41', '42', '43'];
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => {
            const formattedImages = data.images.map((img) => ({ src: img.url }));
            setProductImages(formattedImages);      
        })
        .catch(error => console.error("Erro ao carregar imagens:", error));
    }, []);

    return (
        <Layout>
            <div className="overflow-hidden mb-12">
                <div className="bg-[--light-gray-3] w-screen">
                    <div id="tagline" className="tracking-widest text-bold py-6 pl-6">
                        Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
                    </div>
                </div>
            </div>

            <div className="flex gap-6 px-6">
                <Gallery images={productImages} height="570px" width="800px" />
                
                <div className="flex-1">
                    <BuyBox
                        name="Tênis Nike Revolution 6 Next Nature Masculino"
                        reference="REF:38416711"
                        stars={4.7}
                        rating={90}
                        price="R$219,00"
                        priceDiscount={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                    >
                        <ProductOptions sizes={sizes} colors={colors} shape="square" />
                        <button className="mt-2 bg-primary text-white py-2 px-4 rounded">COMPRAR</button>
                    </BuyBox>
                </div>
            </div>

            <Section 
                title="Produtos em Alta" 
                titleAlign="Left"
                link={{
                    text: "ver todos",
                    href: "https://redirect.link"
                }}
            >
                <ProductListing maxNumber="4" />
            </Section>
        </Layout>
    );
}