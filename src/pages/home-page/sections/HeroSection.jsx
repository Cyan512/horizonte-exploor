import { Link } from "react-router-dom";
import { assets } from "@/assets/img";

export default function HeroSection() {
    return (
        <section
            className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.img_51})` }}
        >
            <div className="absolute inset-0 bg-[rgba(13,13,12,0.5)]" />
            <div className="container mx-auto px-3 z-50">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <span className="font-style block text-[1.563rem] leading-none text-white">
                            Get unforgetable pleasure with us
                        </span>
                        <h1 className="font-title text-[2.5rem] leading-tight font-bold text-white">
                            Natural Wonder of the world
                        </h1>
                        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                            <Link className="text-base inline-flex items-center justify-center rounded-full px-8 py-4 font-normal bg-theme text-white">
                                Explore Tours
                            </Link>
                            <Link className="text-base inline-flex items-center justify-center rounded-full px-8 py-4 font-normal border text-white">
                                Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end"></div>
                </div>
            </div>
        </section>
    );
}
