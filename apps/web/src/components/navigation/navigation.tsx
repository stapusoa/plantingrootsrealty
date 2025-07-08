// components/navigation/navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils"; // Optional: your class merge util

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}