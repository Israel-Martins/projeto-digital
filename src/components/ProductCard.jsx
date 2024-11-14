import Tenis from "../assets/images/tenis.png";
function ProductCard(props) {
    return (
        <>
        <div className="bg-white-300 flex flex-col">
          <div className="w-[220px] bg-[#F9F8FE] rounded border drop-shadow-[6px_16px_30px_#6962620D] text-[#474747]">
          <div className="absolute w-[96px] h-[32px] bg-[#E7FF86] rounded-[29px] mt-3 ml-5 text-center text-sm font-bold leading-[31px]">30% OFF</div> 
                
                <img  src={Tenis}  className=""/>
                <div className="flex flex-col gap-1">
                
                <span className="text-xs text-[#8F8F8F] ">Tênis</span>
                <span className="text-2xl font-normal leading-[38px]">{props.name}</span>
                <div className="flex gap-2 ">
                  <span className="line-through">{props.price}</span>
                  <span className="font-bold">{props.priceDiscount}</span>
                  <p className="text-[20px] font-[400] leading-[38px]">K-Swiss V8 - Masculino</p>
                  <p className="text-[24px] font-[700] leading-[38px]"><s class="text-[#8f8f8f] text-[24px] font-[400] leading-[38px]">R$200</s> R$100</p>
                </div>
              </div>
            
            </div>
        </div>
        </>
    )
}
export default ProductCard