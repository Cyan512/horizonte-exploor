import { assets } from "@/assets/img";
import { TourMockV1 } from "@/data/TourMockV1";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";

function PageHome() {
    const { t } = useTranslation("global");
    const loopCategories = Array.isArray(TourMockV1) ? [...TourMockV1, ...TourMockV1] : [];
    return (
        <>
            <HomeSection1 />
            <main>
                <HomeSection2 />
                <HomeSection3 />
                <HomeSection4 />
                <HomeSection5 />
            </main>
        </>
    );
}

export default PageHome;
