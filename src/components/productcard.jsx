import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p }) {
    const { addToCart } = useCart();

    return (
        <article className="card">

            {/* Product Image */}
            <Link
                className="pic"
                to={`/products/${p.id}`}
            >
                <img
                    src={p.image}
                    alt={p.name}
                />
            </Link>

            {/* Product Information */}
            <div className="info">

                <small>
                    {p.category}
                </small>

                <h3>
                    {p.name}
                </h3>

                <p>
                    {p.tamil}
                </p>

                {/* Price & Add to Cart */}
                <div className="row">

                    <b>
                        ₹{p.price}
                    </b>

                    <button
                        type="button"
                        onClick={() => addToCart(p)}
                    >
                        🛒 Add
                    </button>

                </div>

            </div>

        </article>
    );
}