import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Cartreducer";

const CartContext = createContext();

const getLocalCart = () => {
  const localCartData = localStorage.getItem("localcart");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCart(),
  total_amount: 0,
  total_items: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  // Remove item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // local storage
  useEffect(() => {
    localStorage.setItem("localcart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Update item quantity (increase or decrease)
  const updateItemAmount = (id, amount) => {
    if (amount < 1) {
      removeItem(id); // Remove the item if the amount becomes less than 1
    } else {
      dispatch({ type: "UPDATE_ITEM_AMOUNT", payload: { id, amount } });
    }
  };

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, removeItem, updateItemAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
