import { createContext } from "react";
// start declare global variable methods
import useProducStore from "../hooks/useProducStore";
import useCart from "../hooks/useCart";

// end declare global variable methods
const AppContext = createContext();
// method declare global variable
export const AppContextProvider = ({ children }) => {
  const MyProducStore = useProducStore();
  const MyCart = useCart();

  return (
    <AppContext.Provider
      value={{
        ...MyProducStore,
        ...MyCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
