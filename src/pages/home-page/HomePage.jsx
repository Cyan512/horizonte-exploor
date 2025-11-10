import {
    AboutSection,
    CategorySection,
    GallerySection,
    HeroSection,
    PopularToursSection,
} from "./sections";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <main>
                <CategorySection />
                <AboutSection />
                <PopularToursSection />
                <GallerySection />
            </main>
        </>
    );
}
