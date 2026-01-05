import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TourMockV1 } from "@/data/TourMockV1";

export default function PageTourDetail() {
    const { category, tourSlug } = useParams();

    // usamos el namespace dinámico
    const { t } = useTranslation(tourSlug);

    // buscar el tour en el mock
    const tour = TourMockV1.find((e) => e.title === category)?.destinationV1.find(
        (d) => d.path === tourSlug
    );

    if (!tour) {
        return <p>Tour no encontrado</p>;
    }

    return (
        <section>
            <h1>{t("title")}</h1>
        </section>
    );
}
