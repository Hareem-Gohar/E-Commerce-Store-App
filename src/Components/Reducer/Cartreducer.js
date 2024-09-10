const CartReducer = (state, action) => {
      switch (action.type) {
        case 'ADD_TO_CART': {
          const { id, amount, product } = action.payload;
    
          // Check if the item already exists in the cart
          const existingCartItem = state.cart.find((item) => item.id === id);
    
          if (existingCartItem) {
            // Update the existing item's amount and total
            const updatedCart = state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    amount: item.amount + amount,
                    total: (item.amount + amount) * item.price,
                  }
                : item
            );
    
            return {
              ...state,
              cart: updatedCart,
            };
          } else {
            // Add new item to the cart
            const cartItem = {
              id: id,
              title: product.title,
              amount,
              image: product.image,
              price: product.price,
              total: product.price * amount,
            };
    
            return {
              ...state,
              cart: [...state.cart, cartItem],
            };
          }
        }
    
        case 'REMOVE_ITEM': {
          const updatedCart = state.cart.filter((item) => item.id !== action.payload);
          return {
            ...state,
            cart: updatedCart,
          };
        }
    
        case 'UPDATE_ITEM_AMOUNT': {
          const { id, amount } = action.payload;
    
          const updatedCart = state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  amount,
                  total: item.price * amount,
                }
              : item
          );
    
          return {
            ...state,
            cart: updatedCart,
          };
        }
    
        default:
          return state;
      }
    };
    
    export default CartReducer;
    