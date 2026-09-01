import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { products } from "../data/products";
import ProductCard from "../components/productcard";


export default function Products() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const category =
        searchParams.get("category") || "all";

    const sort =
        searchParams.get("sort") || "default";


    const categories = [
        "seeds",
        "fertilizers",
        "pesticides",
        "tools",
        "irrigation",
        "gardening",
        "produce"
    ];


    const filteredProducts = useMemo(() => {

        let result = products.filter((product) => {

            const categoryMatch =
                category === "all" ||
                product.category === category;

            const searchMatch =
                !search ||
                product.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                product.tamil.includes(search);

            return categoryMatch && searchMatch;
        });


        /* Price: Low to High */
        if (sort === "low") {
            result.sort(
                (a, b) => a.price - b.price
            );
        }


        /* Price: High to Low */
        if (sort === "high") {
            result.sort(
                (a, b) => b.price - a.price
            );
        }


        /* Name: A to Z */
        if (sort === "name") {
            result.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );
        }


        return result;

    }, [search, category, sort]);


    /* Search */
    const handleSearch = (event) => {

        const value = event.target.value;

        setSearch(value);

        setSearchParams({
            search: value,
            category: category,
            sort: sort
        });
    };


    /* Category */
    const handleCategory = (event) => {

        setSearchParams({
            search: search,
            category: event.target.value,
            sort: sort
        });
    };


    /* Sort */
    const handleSort = (event) => {

        setSearchParams({
            search: search,
            category: category,
            sort: event.target.value
        });
    };


    return (
        <>
            {/* Page Banner */}

            <section className="page-banner">

                <div className="container">

                    <p className="eyebrow">
                        VIVASAYAMART STORE
                    </p>

                    <h1>
                        Our Products
                    </h1>

                    <span>
                        70 agriculture products
                    </span>

                </div>

            </section>


            {/* Products Section */}

            <section className="section">

                <div className="container">


                    {/* Search / Filter / Sort */}

                    <div className="controls">

                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search products..."
                        />


                        <select
                            value={category}
                            onChange={handleCategory}
                        >

                            <option value="all">
                                All Categories
                            </option>

                            {categories.map(
                                (item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                )
                            )}

                        </select>


                        <select
                            value={sort}
                            onChange={handleSort}
                        >

                            <option value="default">
                                Sort By
                            </option>

                            <option value="low">
                                Price Low - High
                            </option>

                            <option value="high">
                                Price High - Low
                            </option>

                            <option value="name">
                                Name A - Z
                            </option>

                        </select>

                    </div>


                    {/* Heading */}

                    <div className="products-heading">

                        <h2>
                            Agriculture Products
                        </h2>

                        <p>
                            Showing {filteredProducts.length} products
                        </p>

                    </div>


                    {/* Product Cards */}

                    {filteredProducts.length > 0 ? (

                        <div className="product-grid">

                            {filteredProducts.map(
                                (product) => (

                                    <ProductCard
                                        key={product.id}
                                        p={product}
                                    />

                                )
                            )}

                        </div>

                    ) : (

                        <div className="empty">

                            <h2>
                                No Products Found
                            </h2>

                            <p>
                                Try another product name
                                or category.
                            </p>

                        </div>

                    )}

                </div>

            </section>
        </>
    );
}