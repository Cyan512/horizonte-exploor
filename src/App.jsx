import { Route, Routes } from "react-router-dom";
import DestinationPage from "@/pages/destinations/PageDestinations";
import PageTourDetail from "@/pages/destinations/PageTourDetail";
import PageHome from "@/pages/home/PageHome";
import PageContact from "./pages/contact/PageContact";
import PageAbout from "./pages/about/PageAbout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/destinations" element={<DestinationPage />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="/destinations/:category/:tourSlug" element={<PageTourDetail />} />
        </Routes>
    );
}

export default App;
