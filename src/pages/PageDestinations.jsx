import { TourMockV1 } from "@/data/TourMockV1";
import { ArrowRight, Clock, Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { assets } from "@/assets/img";
import { Link } from "react-router-dom";

function DestinationPage() {
    const { t } = useTranslation("global");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 6;

    const categories = TourMockV1.map((e) => ({
        key: e.title,
        value: t(e.title),
    }));

    const filteredByCategory =
        selectedCategory === "all"
            ? TourMockV1.flatMap((cat) =>
                  cat.destinationV1.map((dest) => ({
                      ...dest,
                      category: cat.title,
                  }))
              )
            : (TourMockV1.find((e) => e.title === selectedCategory)?.destinationV1.map((dest) => ({
                  ...dest,
                  category: selectedCategory,
              })) ?? []);

    console.table(filteredByCategory);

    const destinations = filteredByCategory.filter((e) =>
        t(e.title).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedDestinations = destinations.slice(startIndex, endIndex);

    const handleSearch = () => {
        setSearchTerm(inputValue);
        setCurrentPage(1);
    };

    return (
        <>
            <section className="py-40 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-6xl font-bold">{t("common.destinations")}</h1>
                </div>
            </section>
            <main>
                <section>
                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between items-center">
                        <div className="relative flex items-center w-full max-w-sm">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full py-4 pl-8 pr-16 bg-primary/10 text-gray-600 placeholder-gray-500 rounded-full outline-none"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-2 p-3 bg-primary hover:bg-title text-white rounded-full transition-colors shadow-sm cursor-pointer"
                            >
                                <Search size={22} strokeWidth={2.5} />
                            </button>
                        </div>
                        <div className="w-full lg:w-auto">
                            <select
                                id="category-select"
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full lg:w-64 px-3 py-2 outline-none border border-gray-200 rounded-lg"
                            >
                                <option value="all">{t("common.all")}</option>
                                {categories.map((e) => (
                                    <option key={e.key} value={e.key}>
                                        {t(e.value)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedDestinations.length > 0 ? (
                                    paginatedDestinations.map((e, index) => (
                                        <div key={index}>
                                            <figure>
                                                <img src={assets[e.img]} />
                                            </figure>
                                            <div className="p-6">
                                                <h3>{t(e.title)}</h3>
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
                                                        to={`/destinations/${e.category}/${e.path}`}
                                                    >
                                                        {t("learnMore")}
                                                        <ArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No destinations found.</div>
                                )}
                            </div>

                            {destinations.length > 0 && (
                                <div>
                                    <button
                                        onClick={() => setCurrentPage((e) => Math.max(e - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        prev
                                    </button>
                                    {Array.from({
                                        length: totalPages,
                                    }).map((_, index) => {
                                        const page = index + 1;
                                        return (
                                            <button key={page} onClick={() => setCurrentPage(page)}>
                                                {page}
                                            </button>
                                        );
                                    })}
                                    <button
                                        onClick={() =>
                                            setCurrentPage((e) => Math.min(e + 1, totalPages))
                                        }
                                        disabled={currentPage === totalPages}
                                    >
                                        next
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="lg:col-span-1"></div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default DestinationPage;
