import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TourMockV1 } from "@/data/TourMockV1";
import { assets } from "@/assets/img";
import { Star, CircleCheckBig } from "lucide-react";

export default function PageTourDetail() {
    const { category, tourSlug } = useParams();

    // usamos el namespace dinámico
    const { t } = useTranslation(tourSlug);

    // buscar el tour en el mock
    const tour = TourMockV1.find((e) => e.title === category)?.destinationV1.find(
        (d) => d.path === tourSlug
    );

    const imageKey = t("img", { returnObjects: false });
    const contents = t("content", { returnObjects: true });

    if (!tour) {
        return <p>Tour no encontrado</p>;
    }

    return (
        <>
            <section>
                <div>
                    <h1>{t("title")}</h1>
                </div>
            </section>
            <main>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <section className="lg:col-span-2 order-2 lg:order-1 space-y-8">
                            <figure className="relative w-full h-60 sm:h-80 lg:h-105 overflow-hidden rounded-lg">
                                <img
                                    src={assets[imageKey]}
                                    alt={t("title")}
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full px-4 py-1.5 text-lg leading-6.5 font-normal bg-title text-white">
                                    Featured
                                </span>
                                <span className="flex items-center gap-3 rounded-full px-4 py-1.5 text-base leading-6.5 font-normal bg-primary/10">
                                    <Star
                                        className="text-yellow-400 w-5 h-5"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                    4.8
                                </span>
                            </div>

                            {Array.isArray(contents) &&
                                contents.map((section, index) => (
                                    <div key={index} className="space-y-4">
                                        <h2 className="font-family-heading text-3xl sm:text-4xl font-semibold text-title leading-tight">
                                            {section.title}
                                        </h2>
                                        {Array.isArray(section.details?.checked) && (
                                            <ul className="space-y-3 rounded-lg p-6 border border-slate-200">
                                                {section.details.checked.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-base leading-relaxed"
                                                    >
                                                        <CircleCheckBig className="mt-1 w-5 h-5 text-primary shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <h3 className="font-family-heading text-3xl font-semibold text-title leading-tight">
                                            {section.subtitle}
                                        </h3>
                                        {Array.isArray(section.description) &&
                                            section.description.map((text, idx) => (
                                                <p
                                                    key={idx}
                                                    className="text-base sm:text-lg font-normal leading-relaxed text-gray-400"
                                                >
                                                    {text}
                                                </p>
                                            ))}
                                    </div>
                                ))}

                            <div></div>
                        </section>

                        <aside className="lg:col-span-1 order-1 lg:order-2"></aside>
                    </div>
                </div>
            </main>
        </>
    );
}
