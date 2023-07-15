import { useEffect, useState } from "react";
export default function useCart() {
  const [cart, setCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const updatePriceCart = () =>{
    let totalPrice = cart.reduce(
      (total, item) => total + (item.price * item.quanty),
      0
    );
    totalPrice = totalPrice.toFixed(2); // Redondear a dos decimales
    setCartTotalPrice(totalPrice);
  }
  const deleteQuantyProductCart = (idProduct) =>{
    const quantyProduct = cart.find((item)=>item.id == idProduct)
    if (quantyProduct == undefined) {
      return; // Finalizar la función
    }
    let updatedCart=[];
    if (quantyProduct.quanty == 1) {
      updatedCart = cart.filter((item) => item.id != idProduct);
    } else {
      updatedCart = cart.map((item) => {
        if (item.id == idProduct) {
          return {
            ...item,
            quanty: item.quanty - 1,
          };
        }
        return item;
      });
    }
    setCart(updatedCart);
  }
  const addQuantyProductCart = (idProduct) => {
    const updatedCart = cart.map((item) => {
      if (item.id == idProduct) {
        return {
          ...item,
          quanty: item.quanty + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const saveProductCar = (product) => {
    const issetProductCart = cart.find((item) => item.id == product.id);
    if (issetProductCart == undefined) {
      let cartDuplicate = [...cart];
      cartDuplicate.push({ ...product, quanty: 1 });
      setCart(cartDuplicate);
    }else{
      addQuantyProductCart(product.id);
    }
  };
  useEffect(() => {
    updatePriceCart();
  }, [cart]);
  return {
    cart,
    cartTotalPrice,
    saveProductCar,
    deleteQuantyProductCart,
  };
}
