import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    filter: {
        text: "",
        category: "",
        minPrice: 0,
        maxPrice: 1000,
    },
};
export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(filterReducer, initialState);

    // Load products into the state when they change
    useEffect(() => {
        if (products.length) {
            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
        }
    }, [products]);

    // Apply filters when the products or filter state change
    useEffect(() => {
        if (state.allProducts.length) {
            dispatch({ type: "FILTER_PRODUCTS" });
        }
    }, [state.filter, state.allProducts]);

    // Function to update filter values
    const updateFilterVal = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        dispatch({ type: "UPDATE_FILTER_VAL", payload: { name, value } });
    };
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    return (
        <FilterContext.Provider value={{ ...state, updateFilterVal, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
