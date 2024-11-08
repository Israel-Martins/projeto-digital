import Layout from "../components/Layout";
import Section from "../components/Section";

export default function ProductListingPage() {
    return (
        <Layout>

         <Section>
            <div className="border-current h-11 w-[320px] flex relative left-[70%] top-[20px] bg-white rounded border drop-shadow-[6px_16px_30px_#6962620D]">
                <span className="font-bold pl-2 ml-2.5 mt-2 tracking-wide">Ordenar por:</span>
                <select id="sort-products" class="absolute end-5 p-2 items-center tracking-wide">
                    <option value= "">Mais relevantes</option>
                    <option value="lower-price">Menor preço</option>
                    <option value="higher-price">Maior preço</option>
                </select>
            </div>
         </Section>


        </Layout>
    )

}