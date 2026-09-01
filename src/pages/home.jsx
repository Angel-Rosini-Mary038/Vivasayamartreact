import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/productcard";

export default function Home() {
    const categories = [
        ["seeds", "🌱", "Seeds"],
        ["fertilizers", "🌿", "Fertilizers"],
        ["pesticides", "🪴", "Pesticides"],
        ["tools", "🛠️", "Farming Tools"],
        ["irrigation", "💧", "Irrigation"],
        ["gardening", "🌻", "Gardening"],
        ["produce", "🥬", "Fresh Produce"]
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-grid">

                    <div className="hero-content">

                        <p className="eyebrow">
                            🌱 இயற்கை விவசாயத்திற்கு தேவையான அனைத்தும்
                        </p>

                        <h1>
                            இயற்கை விவசாயம்
                            <span>இனி எளிதாக!</span>
                        </h1>

                        <p className="lead">
                            விதைகள் முதல் விவசாய கருவிகள் வரை
                            தேவையான அனைத்து பொருட்களையும்
                            ஒரே இடத்தில் வாங்குங்கள்.
                        </p>

                        <Link
                            className="btn primary"
                            to="/products"
                        >
                            🛍️ Shop Now
                        </Link>

                    </div>

                    <div className="hero-image">
                        <img
                            src="/images/hero/hero.svg"
                            alt="VivasayaMart Agriculture"
                        />
                    </div>

                </div>
            </section>


            {/* Categories Section */}
            <section className="section">

                <div className="container">

                    <div className="title">

                        <p>
                            எங்கள் பிரிவுகள்
                        </p>

                        <h2>
                            விவசாயத்திற்கு தேவையான பொருட்கள்
                        </h2>

                    </div>


                    <div className="category-grid">

                        {categories.map(
                            ([category, icon, name]) => (
                                <Link
                                    className="category"
                                    to={`/products?category=${category}`}
                                    key={category}
                                >

                                    <span>
                                        {icon}
                                    </span>

                                    <h3>
                                        {name}
                                    </h3>

                                    <p>
                                        தரமான விவசாயப் பொருட்கள்
                                    </p>

                                </Link>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* Featured Products */}
            <section className="section dark">

                <div className="container">

                    <div className="title">

                        <p>
                            POPULAR
                        </p>

                        <h2>
                            Featured Products
                        </h2>

                    </div>


                    <div className="product-grid">

                        {products
                            .slice(0, 8)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    p={product}
                                />
                            ))}

                    </div>

                </div>

            </section>
        </>
    );
}