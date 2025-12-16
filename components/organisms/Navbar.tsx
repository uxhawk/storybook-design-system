import React from "react";
import { Button } from "../atoms/Button";

export interface NavbarProps {
  brand: string;
  links: Array<{ label: string; href: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ brand, links }) => {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-3 shadow">
      <a href="#" className="text-lg font-bold text-gray-900">
        {brand}
      </a>
      <div className="hidden space-x-4 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <Button size="sm">Menu</Button>
      </div>
    </nav>
  );
};
