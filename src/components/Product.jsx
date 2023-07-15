import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ProductsCarts from './ProductsCarts'
import AppContext from "../context/AppContextProvider";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import React,{ useContext } from "react";

const Product = () =>{
    const { viewProductSelect,setViewProductSelect, viewCartSelect,setViewCartSelect } = useContext(AppContext);
    const ProductNoFound =() =>{
      return (
        <div className=" mt-[27px] pt-7  border-t-[1px] border-solid border-purple-700 pb-4">
              <p> Please choose a product om the left.</p>
        </div>
      )
    }
    const closeView = () =>{
      setViewProductSelect(false)
      setViewCartSelect(false)
    }

    return (
      <div className="ml-4 mr-4">
        <div className="lg:flex md:flex md:gap-5 lg:gap-5 gap-0 ">
          <div
            className={`md:w-3/5 lg:w-3/5  w-[100%] h-auto  md:block lg:block  ${
              viewProductSelect || viewCartSelect ? "hidden" : "block"
            }`}
          >
            <div className="text-start p-2">
              <h2 className="text-blue-900 text-xl font-bold">Store</h2>
            </div>
            <ProductList />
          </div>
          <div
            className={`md:w-2/5 lg:w-2/5  w-[100%] h-auto md:block lg:block ${
              viewProductSelect || viewCartSelect ? "block" : "hidden"
            }`}
          >
            <div
              className={`flex justify-start   md:hidden lg:hidden ${
                viewProductSelect || viewCartSelect ? "block" : "hidden"
              }`}
            >
              <a onClick={() => closeView()} className=" text-purple-700 text-2xl">
                <BsArrowLeftCircleFill/>
              </a>
            </div>
            <div className="text-start p-2">
              <h2 className="text-blue-900 text-xl font-bold">
                {viewProductSelect
                  ? "Product"
                  : viewCartSelect
                  ? "Shopping cart"
                  : ""}
              </h2>
            </div>
            {viewProductSelect ? (
              <ProductDetail />
            ) : viewCartSelect ? (
              <ProductsCarts />
            ) : (
              <ProductNoFound />
            )}
          </div>
        </div>
      </div>
    );
 }

export default Product;