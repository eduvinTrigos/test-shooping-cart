import React, { useContext } from "react";
import AppContext from "../context/AppContextProvider";
import BagedCountCartProduct from "./BagedCountCartProduct";
const ProductDetail = () =>{ 
    const { productSelect, cart, saveProductCar, deleteQuantyProductCart } =
      useContext(AppContext);
    const dataProductCart = cart.find((item) => item.id === productSelect.id);

    return (
      <div className="pt-5  border-t-[1px] pb-4 border-b-[1px] border-solid border-purple-200">
        <div className="w-100  justify-center relative inline-flex items-center">
          {dataProductCart !== undefined && (
            <BagedCountCartProduct initialCount={dataProductCart.quanty} />
          )}
        </div>

        <div className="flex justify-center">
          <img src={productSelect.src_img} alt="" width={100} />
        </div>
        <div className="container-load-data-cart flex justify-between">
          <div className="my-auto">
            <span>
              <strong>{productSelect.category}</strong>{" "}
              <strong className="text-purple-900">
                ${productSelect.price}
              </strong>
            </span>
          </div>
          <div className="my-auto">
            <button
              onClick={() => deleteQuantyProductCart(productSelect.id)}
              className="px-3 bg-gray-200 focus:bg-red-400 focus:text-white hover:bg-red-400 hover:text-white text-black text-sm p-1"
            >
              -
            </button>
            <button
              onClick={() => saveProductCar(productSelect)}
              className="px-3 bg-gray-200  hover:bg-purple-700 focus:text-white  hover:text-white text-black text-sm p-1"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <p>{productSelect.description}</p>
        </div>
      </div>
    );
}
 export default ProductDetail;