const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { 
                ...state, 
                isLoading: true, 
                isError: false 
            };
        case "MY_API_ERROR":
            return { 
                ...state, 
                isLoading: false, 
                isError: true 
            };
        case "MY_API_DATA":
            const featuredData = action.payload.filter(product => product.category === "men's clothing");
            return { 
                ...state, 
                isLoading: false, 
                products: action.payload, 
                featuredProducts: featuredData 
            };
        default:
            return state;
    }
};

export default ProductReducer;
