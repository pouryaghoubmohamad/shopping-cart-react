import React from "react";

// css

// components
import Home from "./components/Home";
import ProductsDetails from "./components/ProductsDetails";
import Cart from "./components/Cart";

// router
import { Routes , Route , Navigate } from "react-router-dom";

// react-hot-toast
import { Toaster } from 'react-hot-toast';



const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:id" element={<ProductsDetails />} />
                <Route path="/products" element={<Home />} />
                <Route path="/*" element={<Navigate to="/products" />} />
            </Routes>
            <Toaster position="bottom-right" />
        </div>


    );
};

export default App;