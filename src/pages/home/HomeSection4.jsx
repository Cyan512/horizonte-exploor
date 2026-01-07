import DestinationCardV1 from "@/components/card/DestinationCardV1";
import { TourMockV1 } from "@/data/TourMockV1";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HomeSection4() {
    const { t } = useTranslation("global");
    const destinations = TourMockV1.flatMap((cat) =>
        cat.destinationV1.map((dest) => ({
            ...dest,
            category: cat.title,
        }))
    );
    const randomDestinations = [...destinations].sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <section className="py-24 relative overflow-hidden bg-[#F0F9FB]">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h4 className="font-serif text-[#1EB3D7] text-2xl italic mb-2">
                        Best Place For You
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#123E46] mb-4">
                        Most Popular Tour
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Cuadrícula de Tours */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {randomDestinations.map((e, index) => (
                        <DestinationCardV1 key={index} data={e} />
                    ))}
                </div>
            </div>
        </section>
    );
}
