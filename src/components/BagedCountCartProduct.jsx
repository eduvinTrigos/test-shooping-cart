
import React  from "react";
const BagedCountCartProduct =({initialCount})=>{
    return (
        <div className="absolute inline-flex items-center 
        justify-center w-7 h-7 z-10
        text-sm font-bold text-white bg-purple-700 border-2 
        border-white rounded-full -top-2 -left-2 
        dark:border-gray-900 cursor-pointer">
            {initialCount}
        </div>
    )

}
export default BagedCountCartProduct;