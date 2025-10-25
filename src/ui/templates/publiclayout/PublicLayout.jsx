import { Header, Footer } from "@ui/organisms";
import { Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
