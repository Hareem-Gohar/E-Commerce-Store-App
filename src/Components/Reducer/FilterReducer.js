const initialState = {
    filterProducts: [],
    allProducts: [],
    filter: {
        text: "",
        category: "",
        maxPrice: 100000,  
    },
};

const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            };
        case "UPDATE_FILTER_VAL":
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value,
                },
            };
        case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterPro = [...allProducts];

            const { text, category, maxPrice } = state.filter;

            // Filtering by text
            if (text) {
                tempFilterPro = tempFilterPro.filter(item =>
                    item.title.toLowerCase().includes(text.toLowerCase())
                );
            }

            // Filtering by category
            if (category && category !== "All") {
                tempFilterPro = tempFilterPro.filter(item => item.category === category);
            }

            // Filtering by price range
            tempFilterPro = tempFilterPro.filter(item => item.price <= maxPrice);

            return {
                ...state,
                filterProducts: tempFilterPro,
            };
        default:
            return state;
    }
};


export default filterReducer;
