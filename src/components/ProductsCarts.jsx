import AppContext from "../context/AppContextProvider";
import  React,{ useContext, useEffect } from "react";


const ProductsCarts = () => {

    const {
      cart,
      cartTotalPrice
    } = useContext(AppContext);

    const generateUniqueCode = () => {
      const characters = "0123456789abcdef";
      let uniqueCode = "";

      for (let i = 0; i < 64; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueCode += characters[randomIndex];
      }

      return uniqueCode;
    };
    const pub_key = "";
   
    useEffect(() => {
      
      const script = document.createElement("script");
      script.src = "https://checkout.wompi.co/widget.js";
      script.async = true;
      script.setAttribute("data-render", "button");
      script.setAttribute("data-public-key", pub_key);
      script.setAttribute("data-currency", "COP");
      script.setAttribute("data-amount-in-cents", parseInt(cartTotalPrice));
      script.setAttribute("data-reference", "4XMPGKWWPKWQ");
      script.setAttribute("data-signature:integrity", generateUniqueCode());

      document.getElementById("wompi-checkout").appendChild(script);

      return () => {
         const wompiCheckout = document.getElementById("wompi-checkout");
         if (wompiCheckout && wompiCheckout.contains(script)) {
           wompiCheckout.removeChild(script);
         }
      };
    }, [ ]);
    return (
      <div className="border-t-[1px] border-solid border-purple-200">
        <div className="pr-1 pl-1 overflow-y-auto lg:h-[25vw] md:h-[35vw] h-[50vw]">
          {cart &&
            cart.map((item, key) => (
              <div
                key={`product-cart-${key}`}
                className="mt-4 mb-4 pl-1 flex pb-2
              justify-start border-b-[1px] 
              border-solid 
              border-purple-200"
              >
                <div
                  className="inline-flex items-center my-auto
                    justify-center w-12 h-11 
                    text-sm font-bold text-white bg-purple-700 border-2 
                    border-white rounded-full 
                    dark:border-gray-900 cursor-pointer"
                >
                  {item.quanty}
                </div>
                <div className="w-[100%] pl-5 flex justify-start">
                  <img
                    src={item.src_img}
                    alt=""
                    width={40}
                    height={30}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="mt-2 pr-1 pl-1">
          <div className="flex justify-end">
            <div className="flex justify-between font-semibold">
              <span className="text-xl text-slate-300">Total:</span>
              <span className="text-xl text-purple-700 ml-1">
                ${cartTotalPrice}
              </span>
            </div>
          </div>
          <div id="wompi-checkout"></div>
        </div>
        
      </div>
    );

}

export default ProductsCarts;
