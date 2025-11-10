import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section>
            <div>
                <div>
                    <span className="block text-title text-2xl sm:text-3xl lg:text-4xl font-style">
                        Get unforgetable pleasure with us
                    </span>
                    <h1>Natural Wonder of the world</h1>
                    <div>
                        <Link>Explore Tours</Link>
                        <Link>Our Services</Link>
                    </div>
                </div>
                <div />
            </div>
        </section>
    );
}
