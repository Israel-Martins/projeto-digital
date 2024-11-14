import CardSale from "../components/CardSale";
import Gallery from "../components/Gallery"
import Layout from "../components/Layout";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

export default function HomePage() {
    return (
        <Layout>
        <Gallery />
        <Section>
        <CardSale />
        </Section>
        <Section title ="Produtos em alta"
        titleAlign = "left"
        link ={{
            text: "ver todos",
            href: "https://redirect.link",
            color: "#C92071"
        }}>
            <ProductListing maxNumber='8' />
        </Section>

        
        </Layout>

    );
}