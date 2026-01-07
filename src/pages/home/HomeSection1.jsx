import { assets } from "@/assets/img";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeSection1() {
    const { t } = useTranslation("global");
    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${assets.hero_bg_1_1})` }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                        <div className="text-center lg:text-left">
                            <span className="block text-sm sm:text-base uppercase tracking-widest text-white/80 mb-4">
                                Get unforgettable pleasure with us
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                                Natural Wonder of the World
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to={"/destinations"}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
                                >
                                    <span />
                                    <span>Explore Tours</span>
                                </Link>

                                <Link
                                    href=""
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                                >
                                    <span />
                                    <span>Our Services</span>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
