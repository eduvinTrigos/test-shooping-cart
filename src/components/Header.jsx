import { useContext } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import AppContext from "../context/AppContextProvider";


const Header = () => {
  const {
    setProductSelect,
    cartTotalPrice,
    setViewProductSelect,
    viewProductSelect,
    setViewCartSelect,
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
      <div className="flex">
        <div className="cursor-pointer px-3 py-1 my-auto mx-4 bg-purple-700 hover:bg-purple-500 text-white align-bottom flex  justify-end	gap-2">
          <FaShoppingCart className="my-auto" /> <span>${cartTotalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
