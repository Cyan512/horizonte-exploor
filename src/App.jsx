import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Destinations } from "@ui/pages";
import { PublicLayout, TourDetail } from "@ui/templates";
export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destinations />} />
      </Route>
    </Routes>
  );
}
