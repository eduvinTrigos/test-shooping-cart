
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContextProvider";
import BagedCountCartProduct from "./BagedCountCartProduct"

const ProductList = () => {
    const {
      products,
      setProductSelect,
      cart,
      setViewProductSelect,
      viewCartSelect,
      setViewCartSelect,
    } = useContext(AppContext);
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        if (products) {
        setProductsData([...products]);
        }
    }, [products]);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const viewProductDetail = ({dataProduct})=>{
        viewCartSelect ? setViewCartSelect(false) : null;
        setViewProductSelect(true);
        setProductSelect(dataProduct);
    }

    return (
         <div className="columns-3 pt-5  border-t-[1px] border-solid border-purple-700">
            {productsData ? (
                productsData.map((data, key) => {
                const dataProductCart = cart.find(
                  (item) => item.id === data.id
                );
                
                return (
                  <button
                    key={`key_li_${key}`}
                    onClick={() => viewProductDetail({ dataProduct: data })}
                    className={`w-full aspect-video p-2 border-[2.5px] hover:border-purple-500 
                    focus:border-purple-500 border-solid
                     border-slate-300 gap-2 mt-2 hover:drop-shadow-xl`}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      onClick={() => viewProductDetail({ dataProduct: data })}
                      className=" justify-center relative inline-flex items-center"
                    >
                      {dataProductCart !== undefined && (
                        <BagedCountCartProduct
                          initialCount={dataProductCart.quanty}
                        />
                      )}

                      <img
                        onClick={() => viewProductDetail({ dataProduct: data })}
                        src={data.src_img}
                        alt=""
                        width={100}
                        height={100}
                        className={`transition-transform duration-300 transform ${
                          hoveredIndex === key ? "scale-110" : ""
                        }`}
                      />
                    </div>
                  </button>
                );
                })
            ) : (
                <p>products not found</p>
            )}
            </div>
    );
};

export default ProductList;
