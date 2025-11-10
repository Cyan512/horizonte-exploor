import { AboutPage, ContactPage, DestinationDetailPage, DestinationPage, HomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/destination/:category/:tourSlug" element={<DestinationDetailPage />} />
        </Routes>
    );
}
