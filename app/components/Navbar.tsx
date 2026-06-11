"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      sticky
      top-0
      z-50

      bg-white
      dark:bg-black/80

      backdrop-blur

      border-b
      border-zinc-200
      dark:border-zinc-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-black dark:text-white">
          TaskFlow AI
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          <a
            href="#features"
            className="
            text-zinc-700
            dark:text-zinc-300
            hover:text-purple-500
            transition
            "
          >
            Features
          </a>

          <a
            href="#pricing"
            className="
            text-zinc-700
            dark:text-zinc-300
            hover:text-purple-500
            transition
            "
          >
            Pricing
          </a>

          <a
            href="#testimonials"
            className="
            text-zinc-700
            dark:text-zinc-300
            hover:text-purple-500
            transition
            "
          >
            Reviews
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <button
            className="
            bg-black
            text-white

            dark:bg-white
            dark:text-black

            px-6
            py-3
            rounded-xl
            font-semibold
            transition
            "
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
          md:hidden
          text-black
          dark:text-white
          "
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden

          bg-white
          dark:bg-black

          border-t
          border-zinc-200
          dark:border-zinc-800
          "
        >
          <div className="flex flex-col gap-4 p-6">

            <a
              href="#features"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Reviews
            </a>

            <ThemeToggle />

            <button
              className="
              bg-black
              text-white

              dark:bg-white
              dark:text-black

              px-6
              py-3
              rounded-xl
              font-semibold
              "
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}