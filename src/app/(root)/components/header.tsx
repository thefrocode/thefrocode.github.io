"use client";
import { Montserrat, Delius_Unicase } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full py-5 sticky top-0 z-50 bg-white">
      <nav className="flex justify-between px-32 items-center">
        <span
          className={`${deliusUnicase.className} font-bold text-2xl underlined`}
        >
          The Fro Code
        </span>

        <ul
          className={`flex justify-center gap-12 ${montserrat.className} font-medium text-lg`}
        >
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
            <button onClick={() => scrollToSection("projects")}>
              PROJECTS
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
