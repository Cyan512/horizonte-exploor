import { assets } from "@/assets/img";
import { cn } from "@/shared/utils/tailwind-utils";
import { MapPin, Calendar, Users, ArrowRight, Star, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function DestinationCardV1({ data }) {
    const { t } = useTranslation("global");
    return (
        <div className="group bg-white rounded-lg overflow-hidden transition-all duration-300 border border-slate-300 max-w-sm">
            <div className="relative h-52 overflow-hidden">
                <img
                    src={assets[data.img]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent"></div>
                {data.discount && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">
                        -{data.discount} %
                    </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-semibold leading-tight">{t(data.title)}</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                            {data.days}{" "}
                            {data.days === 1 ? t("common.day.singular") : t("common.day.plural")}
                            {data.nights > 0 && (
                                <>
                                    {" / "}
                                    {data.nights}{" "}
                                    {data.nights === 1
                                        ? t("common.night.singular")
                                        : t("common.night.plural")}
                                </>
                            )}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p
                            className={cn(
                                "text-xs text-slate-500 mb-1",
                                data.discount && "line-through"
                            )}
                        >
                            {data.discount ? `$ ${data.price}` : "\u00A0"}
                        </p>
                        <p className="text-3xl font-bold text-slate-900">
                            ${" "}
                            {data.discount
                                ? (data.price - (data.price * data.discount) / 100).toFixed(2)
                                : data.price.toFixed(2)}
                        </p>
                    </div>
                </div>
                <Link
                    to={`/destinations/${data.category}/${data.path}`}
                    className="w-full bg-slate-900 text-white py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition"
                >
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
export default DestinationCardV1;
