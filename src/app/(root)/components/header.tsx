import { Montserrat, Delius_Unicase } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Header() {
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
          <li>HOME</li>
          <li>STACK</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
        </ul>
      </nav>
    </header>
  );
}
