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
    <div
      id="home"
      className="flex flex-col gap-10 px-6 py-16 md:p-20 text-center mb-14"
    >
      <p className={`${montserrat.className} text-lg md:text-2xl`}>
        Hi, I&apos;m Christine Mukiri
      </p>
      <p
        className={`${montserrat.className} text-3xl md:text-5xl font-medium leading-10 md:leading-14 gap-2`}
      >
        a{" "}
        <span
          className={`${deliusUnicase.className} underlined text-3xl md:text-5xl z-0 font-bold bg-gradient-to-r from-[#AD9DB0] to-[#5D4B66] text-transparent bg-clip-text`}
        >
          full-stack
        </span>{" "}
        software <br /> developer
      </p>
      <p
        id="stack"
        className={`${montserrat.className} md:w-3/4 text-sm md:text-base self-center`}
      >
        Transforming business needs into scalable solutions, I bring 5 years of
        full-stack engineering expertise. Passionate about user-centric
        development, I deliver high-quality software that meets both business
        objectives and user expectations.
      </p>
    </div>
  );
}
