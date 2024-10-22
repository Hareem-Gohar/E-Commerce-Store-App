const CartReducer = (state, action) => {
  // Helper function to calculate total items and total amount
  const calculateTotals = (cart) => {
    const total_items = cart.reduce((acc, item) => acc + item.amount, 0);
    const total_amount = cart.reduce((acc, item) => acc + item.total, 0);
    return { total_items, total_amount };
  };

  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, amount, product } = action.payload;

      // Check if the item already exists in the cart
      const existingCartItem = state.cart.find((item) => item.id === id);

      let updatedCart;
      if (existingCartItem) {
        // Update the existing item's amount and total
        updatedCart = state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount + amount,
                total: (item.amount + amount) * item.price,
              }
            : item
        );
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
        updatedCart = [...state.cart, cartItem];
      }

      // Recalculate totals
      const { total_items, total_amount } = calculateTotals(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        total_items,
        total_amount,
      };
    }

    case "REMOVE_ITEM": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      // Recalculate totals
      const { total_items, total_amount } = calculateTotals(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        total_items,
        total_amount,
      };
    }

    case "UPDATE_ITEM_AMOUNT": {
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

      // Recalculate totals
      const { total_items, total_amount } = calculateTotals(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        total_items,
        total_amount,
      };
    }

    case "CART_TOTAL_ITEMS": {
      // Calculate totals for the current cart state
      const { total_items, total_amount } = calculateTotals(state.cart);
      return {
        ...state,
        total_items,
        total_amount,
      };
    }

    // Clear cart for checkout
    case "CHECKOUT": {
      return {
        ...state,
        cart: [],
        total_items: 0,
        total_amount: 0,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
