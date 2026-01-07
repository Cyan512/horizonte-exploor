import { Route, Routes } from "react-router-dom";
import DestinationPage from "@/pages/destinations/PageDestinations";
import PageTourDetail from "@/pages/destinations/PageTourDetail";
import PageHome from "@/pages/home/PageHome";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/destinations" element={<DestinationPage />} />
            <Route path="/destinations/:category/:tourSlug" element={<PageTourDetail />} />
        </Routes>
    );
}

export default App;
