import { assets } from "@/assets/img";
import { TourMockV1 } from "@/data/TourMockV1";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function HomeSection2() {
    const { t } = useTranslation("global");
    const loopCategories = Array.isArray(TourMockV1) ? [...TourMockV1, ...TourMockV1] : [];
    return (
        <section
            className="py-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.line_pattern3})` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-14">
                    <div>
                        <span className="block text-sm uppercase tracking-widest text-primary mb-2">
                            Top Destination
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Popular Destinations
                        </h2>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            850+ Destinations
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            One of the most well-liked travel companies for people looking to
                            experience adventure and see the world is Tour.
                        </p>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={800}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    <>
                        {TourMockV1.map((cat, index) => (
                            <SwiperSlide key={index}>
                                <div className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
                                    <div className="overflow-hidden">
                                        <img
                                            src={assets[cat.img]}
                                            alt={cat.title}
                                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-5 flex items-center justify-between">
                                        <a
                                            href={cat.href}
                                            className="text-lg font-semibold text-gray-900 hover:text-primary transition"
                                        >
                                            {t(cat.title)}
                                        </a>
                                        <span className="text-sm text-gray-500">See Morse</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                </Swiper>
            </div>
        </section>
    );
}
