"use client";
import { Montserrat, Delius_Unicase } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export function Links() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <li>
        <button onClick={() => scrollToSection("home")}>HOME</button>
      </li>
      <li>
        <button onClick={() => scrollToSection("stack")}>STACK</button>
      </li>
      <li>
        <button onClick={() => scrollToSection("experience")}>
          EXPERIENCE
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection("projects")}>PROJECTS</button>
      </li>
    </>
  );
}
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="w-full pt-5 pb-2 sticky top-0 z-50 bg-white flex justify-between md:gap-16 px-4 md:px-32 items-center">
        <span
          className={`${deliusUnicase.className} font-bold text-2xl underlined w-[200px] text-nowrap`}
        >
          The Fro Code
        </span>
        <nav className="">
          <button
            className="block md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12 18 7.41z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 110-2z"
                />
              )}
            </svg>
          </button>
          <ul
            className={`hidden md:flex justify-center gap-12 ${montserrat.className} font-medium text-lg`}
          >
            <Links />
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <ul
          className={`absolute right-0 md:hidden px-4 rounded-lg shadow-md py-2 mr-2 gap-6 ${montserrat.className} text-md normal-case`}
        >
          <Links />
        </ul>
      )}
    </header>
  );
}
