import ProductListing from "../components/ProductListing.jsx";

import { useState } from "react";

export default function ProductCheckBox() {

    const [orderBy, setOrderBy] = useState('maior');

    return (
        <>
        <div>
            <div className="flex justify-between my-[30px]">
                <span className="self-center text-[18.7px]">
                    <b>Resultados para Tênis - </b>
                    </span>
                <form>
                <select className="flex text-dark_gray_2 text-[16px] bg-light_gray_3 border-solid border-2 rounded-[4px] border-black  w-[300px] h-[40px]" value={orderBy} onChange={event => setOrderBy(event.target.value)}>
                    <option value="menor">Ordenar por: Menor preço</option>
                    <option value="maior">Ordenar por: Maior preço</option>
                </select>
            </form>
            </div>
        <ProductListing orderBy={orderBy} />
        </div>
        </>
    )
}