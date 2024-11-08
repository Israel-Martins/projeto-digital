import CardSale from "../components/CardSale";
import Gallery from "../components/Gallery"
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
    return (
        <Layout>

        <Gallery />
        <CardSale />
        <ProductCard />
        
        </Layout>

    );
}