import { NAV_LINKS_PAGE, NAV_LINKS_CATEGORY } from "@data/Navigation";
import { Link } from "react-router-dom";
import { ChevronDown, } from "lucide-react";
import { useDropdown } from "@hooks/useDropdown";
import { cn } from "@utils/tailwind-utils";

export default function Header() {
  const { isOpen, toggle, close } = useDropdown();
  return (
    <header>
      <div>
        
      </div>
      <div>
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between">
            {NAV_LINKS_CATEGORY.map((link_category, index) => (
              <div key={index} className="relative">
                <button onClick={toggle} className="flex items-center">
                  {link_category.name}
                  <ChevronDown  className={cn("", isOpen ? "" : "rotate-180")} />
                </button>
                <div className={cn("absolute left-0" , isOpen ? "opacity-0": "opacity-100")}>
                    12  
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
