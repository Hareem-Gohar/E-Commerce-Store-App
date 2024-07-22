import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from '../Reducer/ProductReducer';

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState =  {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = res.data;
            console.log(products);
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "MY_API_ERROR" });
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        console.log("App Provider Mounted")
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
