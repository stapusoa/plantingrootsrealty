import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils"; // Optional: your class merge util
import { Button } from "@/components/index";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Listings", path: "/listings" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-lg font-bold text-gray-800">Planting Roots Realty</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-gray-600 hover:text-black transition-colors",
                  location.pathname === item.path && "text-black font-semibold"
                )}
              >
                {item.name}
              </Link>
              <Button
                as={Link}
                className={cn(
                  "ml-2",
                  location.pathname === item.path ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                )}
                >Hi</Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}