import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {
    CartProvider
} from "./context/CartContext";

import {
    AuthProvider
} from "./context/AuthContext";

import Layout from "./components/layout";

import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/productdetails";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Orders from "./pages/orders";

import "./App.css";


export default function App() {

    return (
        <BrowserRouter>

            <AuthProvider>

                <CartProvider>

                    <Routes>

                        <Route element={<Layout />}>

                            {/* Home */}
                            <Route
                                path="/"
                                element={<Home />}
                            />

                            {/* Products */}
                            <Route
                                path="/products"
                                element={<Products />}
                            />

                            {/* Product Details */}
                            <Route
                                path="/products/:id"
                                element={<ProductDetails />}
                            />

                            {/* About */}
                            <Route
                                path="/about"
                                element={<About />}
                            />

                            {/* Contact */}
                            <Route
                                path="/contact"
                                element={<Contact />}
                            />

                            {/* Login */}
                            <Route
                                path="/login"
                                element={<Login />}
                            />

                            {/* Register */}
                            <Route
                                path="/register"
                                element={<Register />}
                            />

                            {/* Cart */}
                            <Route
                                path="/cart"
                                element={<Cart />}
                            />

                            {/* Checkout */}
                            <Route
                                path="/checkout"
                                element={<Checkout />}
                            />

                            {/* Orders */}
                            <Route
                                path="/orders"
                                element={<Orders />}
                            />

                        </Route>

                    </Routes>

                </CartProvider>

            </AuthProvider>

        </BrowserRouter>
    );
}