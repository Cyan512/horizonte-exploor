import { Route, Routes } from "react-router-dom";
import DestinationPage from "@/pages/destinations/PageDestinations";
import PageTourDetail from "@/pages/destinations/PageTourDetail";
import PageHome from "@/pages/home/PageHome";
import PageContact from "./pages/contact/PageContact";
import PageAbout from "./pages/about/PageAbout";
import TravelHeader from "./components/header/Header";
import Footer from "./components/footer/footer";
import Detailtest from "@/pages/destinations/detailtest.jsx";

function App() {
    return (
        <>
            <TravelHeader />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/destinations" element={<DestinationPage />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/contact" element={<PageContact />} />
                <Route path="/test" element={<Detailtest/>}/>
                <Route path="/destinations/:category/:tourSlug" element={<PageTourDetail />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
