import Tenis from "../assets/images/tenis.png";
function ProductCard(props) {
    return (
        <>
        <div className="card">
            <div className="h-[321px] relative w-[292px] bg-[white]">
            <div className="absolute w-[96px] top-[20px] left-[20px] rounded-[29px] bg-[yellow] text-center py-[4px] px-[8px]">30% OFF</div>
                <img  src={Tenis}  className=""/>
            </div>
            <div className="w-[292px] mt-[17px]">
                <div className="w-[292px] text-[14px]">Tênis</div>
                <span className="w-[292px] text-[28px]">K-Swiss V8 - Masculino</span>
                <div className="w-[292px] text-[22px]">
                    <span className="line-through text[]">$200</span>
                    <span className="ml-[5px]">$100</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCard