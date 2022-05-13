import React from "react";

// css

// components
import Home from "./components/Home";
import ProductsDetails from "./components/ProductsDetails";
import Cart from "./components/Cart";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
// router
// import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react-hot-toast
import { Toaster } from "react-hot-toast";

// provider-context
import AuthProvider from "./context/AuthProvider";

const App = () => {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/cart" component={Cart} />
                        <Route
                            path="/products/:id"
                            component={ProductsDetails}
                        />
                        <Route path="/" component={Home} />
                        {/* <Route path="/*" element={<Navigate to="/products" />} /> */}
                    </Switch>
                </AuthProvider>
            </Router>
            <Toaster position="bottom-right" />
        </div>
    );
};

export default App;
