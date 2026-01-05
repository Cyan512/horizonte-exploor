import { Route, Routes } from "react-router-dom";
import DestinationPage from "@/pages/PageDestinations";
import PageTourDetail from "./pages/PageTourDetail";

function App() {
    return (
        <Routes>
            <Route path="/destinations" element={<DestinationPage />} />
            <Route path="/destinations/:category/:tourSlug" element={<PageTourDetail />} />
        </Routes>
    );
}

export default App;
