import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Cartreducer";


const CartContext = createContext();

// Helper function to retrieve cart from local storage
const getLocalCart = () => {
  const localCartData = localStorage.getItem("localcart");
  return localCartData ? JSON.parse(localCartData) : [];
};

// Initial state
const initialState = {
  cart: getLocalCart(),
  total_amount: 0,
  total_items: 0,
};

// Provider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add item to cart
  const AddToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  // Remove item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Update item quantity
  const updateItemAmount = (id, amount) => {
    if (amount < 1) {
      removeItem(id);
    } else {
      dispatch({ type: "UPDATE_ITEM_AMOUNT", payload: { id, amount } });
    }
  };
  // Clear the cart
  const checkout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  // Recalculate totals and save cart to local storage whenever the cart changes
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEMS" }); 
    const timer = setTimeout(() => {
      localStorage.setItem("localcart", JSON.stringify(state.cart));
    }, 500); 

    return () => clearTimeout(timer); 
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, removeItem, updateItemAmount, checkout  }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
