import Layout from "../components/Layout";
import ProductCheckBox from "../components/ProductCheckBox";
import Section from "../components/Section";

import { useState } from "react";

export default function ProductListingPage() {


    return (
       <>
       <Layout className="flex min-h-screen">

         <Section>
            <ProductCheckBox />
         </Section>


        </Layout>
       
       </>
    )

}