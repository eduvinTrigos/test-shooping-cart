import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import AppContext from "../context/AppContextProvider";
import { useContext } from "react";

const Product = () =>{
  const { viewProductSelect, viewCartSelect } = useContext(AppContext);
  const ProductNoFound =() =>{
    return (
       <div className=" mt-[27px] pt-7  border-t-[1px] border-solid border-purple-700 pb-4">
            <p> Please choose a product om the left.</p>
       </div>
    )
  }
    return (
      <div className="ml-4 mr-4">
        <div className="lg:flex md:flex md:gap-5 lg:gap-5 gap-0 ">
          <div
            className={`md:w-3/5 lg:w-3/5  w-[100%] h-auto  md:d-show lg:d-show ${
              viewProductSelect || viewCartSelect ? "d-none" : "d-show"
            }`}
          >
            <div className="text-start p-2">
              <h2 className="text-blue-900 text-xl font-bold">Store</h2>
            </div>
            <ProductList />
          </div>
          <div
            className={`md:w-2/5 lg:w-2/5  w-[100%] h-auto ${
              viewProductSelect || viewCartSelect ? "d-show" : "d-none"
            }`}
          >
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
              ""
            ) : (
              <ProductNoFound />
            )}
          </div>
        </div>
      </div>
    );
 }

export default Product;