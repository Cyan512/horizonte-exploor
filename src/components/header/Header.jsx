import { useState, useEffect } from "react";

import { MapPin, Clock, X, Menu } from "lucide-react";
import { assets } from "@/assets/img/index.js";
import { navigation } from "@/data/Navigation.js";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/shared/utils/tailwind-utils.js";

const TravelHeader = () => {
    const { t } = useTranslation("global");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <header className="relative">
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/80 z-10 lg:hidden"
                />
            )}
            <div>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <figure>
                        <Link className="inline-flex">
                            <img src={assets.logo} className="w-64 py-2" />
                        </Link>
                    </figure>
                    <div className="hidden lg:flex space-x-4">
                        {navigation.map((nav) => (
                            <NavLink to={nav.path} className="text-title">
                                {({ isActive }) => (
                                    <div className="group inline-flex flex-col items-start py-2 text-base font-medium">
                                        {t(nav.label)}

                                        <span
                                            className={cn(
                                                "mt-1 h-[2px] w-full bg-title origin-left transition-transform duration-300",
                                                isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                            )}
                                        />
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        <Link className="hidden lg:inline-flex">Reservar</Link>
                        <button
                            onClick={handleToggleMenu}
                            className="lg:hidden bg-primary text-white p-3 rounded-lg"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>
            <nav
                className={cn(
                    "fixed top-0 left-0 h-full w-72 bg-white shadow-lg border-r-2 border-title flex flex-col transition-transform lg:hidden z-50",
                    isMobileMenuOpen
                        ? "translate-x-0 overflow-visible"
                        : "-translate-x-full overflow-hidden"
                )}
            >
                <figure className="shrink-0 relative flex justify-center bg-primary/10">
                    <img src={assets.logo} className="w-52 pt-10 pb-7" />
                    <button
                        onClick={handleToggleMenu}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-title text-white p-2 rounded-full"
                    >
                        <X size={18} />
                    </button>
                </figure>
                <div className="flex-1 overflow-y-auto mt-7 px-6">
                    {navigation.map((nav) => (
                        <div key={nav.label} className="py-3.5 border-b border-gray-300">
                            <Link
                                to={nav.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-normal text-title flex"
                            >
                                {t(nav.label)}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default TravelHeader;
