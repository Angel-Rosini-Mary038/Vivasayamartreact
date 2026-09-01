import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const { count } = useCart();
    const { loggedIn, logout } = useAuth();

    return (
        <header className="header">
            <div className="container nav">

                {/* Logo */}
                <Link className="logo" to="/">
                    🌱 VivasayaMart
                </Link>

                {/* Navigation */}
                <nav>
                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/products">
                        Products
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                    <NavLink to="/contact">
                        Contact
                    </NavLink>

                    {loggedIn && (
                        <NavLink to="/orders">
                            Orders
                        </NavLink>
                    )}
                </nav>

                {/* Login / Logout */}
                {loggedIn ? (
                    <button
                        className="nav-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login">
                        Login
                    </Link>
                )}

                {/* Cart */}
                <Link to="/cart">
                    🛒 Cart{" "}
                    <b className="count">
                        {count}
                    </b>
                </Link>

            </div>
        </header>
    );
}