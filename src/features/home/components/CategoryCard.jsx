import { Link } from "react-router-dom";
import { cn } from '@/shared/utils/tailwind-utils.js'

export default function CategoryCard({ category, isActive, onClick }) {
    const { img, name, submenu } = category;
    return (
        <button onClick={onClick} className={cn("group relative flex-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer focus:outline-none", isActive ? "flex-4" : "flex-1")}>
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black via-black/80 to-transparent" />
            <div className="absolute inset-0">
                <div className={cn("absolute text-white transition-all duration-500", isActive ? "rotate-0 bottom-4 left-8 translate-y-0" : "origin-left md:-rotate-90 md:translate-y-10 md:bottom-8 left-8")}>
                    <div className="flex flex-col md:block text-start gap-0 md:gap-1">
                        <h3 className="text-2xl font-semibold whitespace-nowrap">
                            {name}
                        </h3>
                        <span className="text-base whitespace-nowrap">
                            {submenu.length} List
                        </span>
                    </div>
                </div>
                <Link className={cn("absolute bottom-4 right-4 inline-flex justify-center items-center border px-4 py-2 border-white rounded-full transition-all duration-300 transform", isActive ? "opacity-100 scale-100": "opacity-0 scale-90")}>
                    <span className="text-white text-base">
                        Book Now
                    </span>
                </Link>
            </div>
        </button>
    )
}
