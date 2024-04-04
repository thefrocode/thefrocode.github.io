import { Delius_Unicase, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Hero() {
  return (
    <div id="home" className="flex flex-col gap-10 p-20 text-center mb-14">
      <p className={`${montserrat.className} text-2xl`}>
        Hi, I&apos;m Christine Mukiri
      </p>
      <p className={`${montserrat.className} text-5xl font-medium leading-14`}>
        a
        <span
          className={`${deliusUnicase.className} underlined text-5xl z-0 font-bold bg-gradient-to-r from-[#AD9DB0] to-[#5D4B66] text-transparent bg-clip-text`}
        >
          full-stack
        </span>
        software <br /> developer
      </p>
      <p id="stack" className={`${montserrat.className} w-2/3 self-center`}>
        I work with people all over the world to create tailor-made Webflow
        experiences.I work with people all over the world to create tailor-made
        Webflow experiences.
      </p>
    </div>
  );
}
