"use client";

import { useState } from "react";

import { Hamburger, Navbar } from "@ems/ui";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar>
        <div className="flex items-center">
          <span className="text-xl font-bold">EMS</span>
        </div>
        <div>
          <Hamburger
            toggled={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </Navbar>
      {isMenuOpen && (
        <div className="bg-gray-700 p-4 text-center">
          <a href="#" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
