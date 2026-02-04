import { useMemo, useState } from "react";
import { categoriMock } from "@/data/categori.Mock.js";
import { tourMock } from "@/data/tour.Mock.js";

function Detailtest() {
    const [categoria, setCategoria] = useState("all");

    const filteredTours = useMemo(() => {
        if (categoria === "all") return tourMock;
        const category = categoriMock.find(
            c => c.title === categoria
        );
        if (!category) return [];
        return tourMock.filter(
            t => t.category === category.id
        );
    }, [categoria]);

    return (
        <div>
            <select
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
            >
                <option value="all">All</option>

                {categoriMock.map(c => (
                    <option key={c.id} value={c.title}>
                        {c.title}
                    </option>
                ))}
            </select>

            <div>
                {filteredTours.map(tour => (
                    <div key={tour.id}>
                        {tour.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Detailtest;
