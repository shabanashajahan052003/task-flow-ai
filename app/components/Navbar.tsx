"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <h1 className="text-3xl font-bold">
          TaskFlow AI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-zinc-300">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Reviews</a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800">
          <div className="flex flex-col gap-4 p-6">

            <a href="#features">Features</a>

            <a href="#pricing">Pricing</a>

            <a href="#testimonials">Reviews</a>

            <ThemeToggle />

            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}