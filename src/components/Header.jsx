import React, { useContext } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import AppContext from "../context/AppContextProvider";


const Header = () => {
  const {
    setProductSelect,
    cartTotalPrice,
    setViewProductSelect,
    viewProductSelect,
    setViewCartSelect,
    viewCartSelect,
    deleteProductCart,
  } = useContext(AppContext);
  const viewCart = ()=>{
    viewProductSelect?setViewProductSelect(false):null;
    setViewCartSelect(true);
    setProductSelect({});
  }

  return (
    <div className="flex justify-between h-[20vw] md:h-[10vw] lg:h-[10vw]">
      <div className=" mx-4 my-auto ">
        <button
          onClick={() => viewCart()}
          className="w-full hover:bg-purple-500  text-3xl inline-flex items-center px-4 py-2 bg-purple-700  text-white font-medium rounded-md"
        >
          <FaShoppingBag />
        </button>
      </div>
      <div className="flex justify-between   ">
        <div
          className={` py-1 px-3 my-auto border-purple-700 border-[1px] border-solid  
          align-bottom flex 
         justify-end	gap-2 ${
           viewCartSelect
             ? " bg-slate-300 text-purple-700"
             : "bg-purple-700 text-white"
         }`}
        >
          <FaShoppingCart className="my-auto " /> <span>${cartTotalPrice}</span>
        </div>
        <div
          onClick={deleteProductCart}
          className={`cursor-pointer py-1 my-auto  pr-3 pl-3 bg-purple-700 hover:bg-purple-500
         text-white align-bottom flex  justify-end	gap-2 ${
           viewCartSelect ? "block" : "hidden"
         }`}
        >
          <a className="w-ful h-full" onClick={deleteProductCart}>
           
            x
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
