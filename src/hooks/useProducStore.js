import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useProducStore() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [viewProductSelect,setViewProductSelect] = useState(false);
  const [viewCartSelect,setViewCartSelect] = useState(false)
  const [productSelect, setProductSelect] = useState({})

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);
  
  return {
    products,
    productSelect,
    setProductSelect,
    viewProductSelect,
    setViewProductSelect,
    viewCartSelect,
    setViewCartSelect,
  };
}
