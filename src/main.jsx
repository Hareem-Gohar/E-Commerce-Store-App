import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home.jsx'
import AboutUs from './Components/Pages/AboutUs.jsx'
import ContactUs from './Components/Pages/ContactUs.jsx'
import ProductPage from './Components/Pages/ProductDetailPage.jsx'
import Products from './Components/Pages/ProductPage.jsx'
import Cart from './Components/Pages/Cart.jsx'
import Error from './Components/Pages/Error.jsx'
import { AppProvider } from './Components/Context/ProductContext.jsx'
import { FilterContextProvider } from './Components/Context/Filter.jsx'
import { CartProvider } from './Components/Context/CartContext.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/singleproduct/:id",
        element: <ProductPage />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>

)
