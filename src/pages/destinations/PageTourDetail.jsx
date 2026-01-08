import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TourMockV1 } from "@/data/TourMockV1";
import { assets } from "@/assets/img";
import { Star, CircleCheckBig, Ban } from "lucide-react";
import React, { useState } from "react";

export default function PageTourDetail() {
    const { category, tourSlug } = useParams();

    const { t } = useTranslation(tourSlug);
    const { t: tGlobal } = useTranslation("global");

    const tour = TourMockV1.find((e) => e.title === category)?.destinationV1.find(
        (d) => d.path === tourSlug
    );

    const imageKey = t("img", { returnObjects: false });
    const contents = t("content", { returnObjects: true });
    const days = t("days", { returnObjects: true });
    const tourDetails = t("tourDetails", { returnObjects: true });
    const recommendations = t("recommendations", { returnObjects: true });

    if (!tour) {
        return <p>Tour no encontrado</p>;
    }

    return (
        <>
            <section className="relative bg-linear-to-r from-title to-primary py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="font-family-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
                        {t("title")}
                    </h1>
                </div>
            </section>

            <main className="lg:mt-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <section className="lg:col-span-2 order-2 lg:order-1 space-y-10">
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
                                    <Star className="text-yellow-400 w-5 h-5" fill="currentColor" />
                                    4.8
                                </span>
                            </div>
                            {Array.isArray(contents) &&
                                contents.map((section, index) => (
                                    <div key={index} className="space-y-8">
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
                            <div>
                                {Array.isArray(days) &&
                                    days.map((day, idx) => (
                                        <div
                                            key={idx}
                                            className="relative grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr] gap-4 sm:gap-6"
                                        >
                                            <div className="flex flex-col items-center">
                                                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-primary text-white flex flex-col items-center justify-center leading-none">
                                                    <span className="text-xs font-medium uppercase">
                                                        {tGlobal("common.day.singular")}
                                                    </span>
                                                    <span className="text-xs sm:text-sm font-semibold">
                                                        {day.day}
                                                    </span>
                                                </span>

                                                {idx !== days.length - 1 && (
                                                    <span className="flex-1 w-px bg-primary" />
                                                )}
                                            </div>
                                            <div className="space-y-5 sm:space-y-6 pb-8">
                                                <h2 className="font-family-heading flex flex-wrap items-center gap-2 sm:gap-3 text-2xl sm:text-4xl font-semibold text-title leading-tight">
                                                    <span>{day.title}</span>
                                                </h2>

                                                {Array.isArray(day.schedule) && (
                                                    <ul className="space-y-3 rounded-lg p-4 sm:p-6 border border-slate-200 bg-white">
                                                        {day.schedule.map((text, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                                                            >
                                                                <CircleCheckBig className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                                                                {text}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {Array.isArray(day.description) &&
                                                    day.description.map((text, index) => (
                                                        <p
                                                            key={index}
                                                            className="text-sm sm:text-lg font-normal leading-relaxed text-gray-400"
                                                        >
                                                            {text}
                                                        </p>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <h2 className="font-family-heading text-3xl sm:text-4xl font-semibold text-title leading-tight">
                                Included and Excluded
                            </h2>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <table className="w-full">
                                    <thead className="hidden md:table-header-group bg-slate-100">
                                        <tr>
                                            <th className="p-4 text-left text-lg font-semibold text-title">
                                                Included
                                            </th>
                                            <th className="p-4 text-left text-lg font-semibold text-title">
                                                Excluded
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="block md:table-row-group">
                                        <tr className="block md:table-row">
                                            <td className="block md:table-cell p-4 align-top border-b md:border-b-0 md:border-r border-slate-200">
                                                <h3 className="md:hidden mb-3 text-lg font-semibold text-title">
                                                    Included
                                                </h3>

                                                {Array.isArray(tourDetails?.includes) && (
                                                    <ul className="space-y-3">
                                                        {tourDetails.includes.map((item, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                                                            >
                                                                <CircleCheckBig className="mt-1 w-5 h-5 text-green-500 shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </td>
                                            <td className="block md:table-cell p-4 align-top">
                                                <h3 className="md:hidden mb-3 text-lg font-semibold text-title">
                                                    Not Included
                                                </h3>

                                                {Array.isArray(tourDetails?.excludes) && (
                                                    <ul className="space-y-3">
                                                        {tourDetails.excludes.map((item, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                                                            >
                                                                <Ban className="mt-1 w-5 h-5 text-red-500 shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h2 className="font-family-heading text-3xl sm:text-4xl font-semibold text-title leading-tight">
                                {tGlobal("common.recommendations")}
                            </h2>
                            {Array.isArray(recommendations?.schedule) && (
                                <ul className="space-y-3 rounded-lg p-4 sm:p-6 border border-slate-200 bg-white">
                                    {recommendations.schedule.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                                        >
                                            <CircleCheckBig className="mt-1 w-5 h-5 text-green-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                        <aside className="lg:col-span-1 order-1 lg:order-2"></aside>
                    </div>
                </div>
            </main>
        </>
    );
}
