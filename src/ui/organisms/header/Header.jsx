import { NAV_LINKS_PAGE } from "@data/Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div></div>
      <div>
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between">
            {NAV_LINKS_PAGE.map((link_page) => (
              <Link key={link_page.id} to={link_page.to}>
                {link_page.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
