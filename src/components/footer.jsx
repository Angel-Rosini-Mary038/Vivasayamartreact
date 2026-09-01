import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container foot">

                {/* Brand */}
                <div>
                    <h2>
                        🌱 VivasayaMart
                    </h2>

                    <p>
                        இயற்கை விவசாயத்திற்கு தேவையான
                        பொருட்கள் ஒரே இடத்தில்.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3>
                        Links
                    </h3>

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>
                </div>

                {/* Contact */}
                <div>
                    <h3>
                        Contact
                    </h3>

                    <p>
                        📧 support@vivasayamart.com
                    </p>

                    <p>
                        📞 +91 98765 43210
                    </p>

                    <p>
                        📍 Tamil Nadu, India
                    </p>
                </div>

            </div>

            {/* Copyright */}
            <div className="bottom">
                © 2026 VivasayaMart. All Rights Reserved.
            </div>
        </footer>
    );
}