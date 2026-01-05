import { assets } from "@/assets/img";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function DestinationCardV1({ destination }) {
    const { t } = useTranslation("global");
    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
            <div className="relative h-72 overflow-hidden">
                <img
                    src={assets[destination.img]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
                <h3>{t(destination.title)}</h3>
                <div>
                    <div></div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <div>
                        <Clock />
                        <span></span>
                    </div>
                    <Link
                        to={`/destinations/${destination.category}/${destination.path}`}
                        className="w-full bg-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary/90 group"
                    >
                        <span className="tracking-wide">{t("learnMore")}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default DestinationCardV1;
