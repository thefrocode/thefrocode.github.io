import { Montserrat } from "next/font/google";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
export function generateStaticParams() {
  return [{ slug: "project-1" }];
}
const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Page({ params }: { params: { slug: string } }) {
  const pages: {
    [key: string]: {
      title: string;
      role: string;
      timeline: string;
      stack: string[];
      project_paragraphs: string[];
    };
  } = {
    "project-1": {
      title: "CHEREHANI AFRICA",
      role: "LEAD SOFTWARE ENGINEER",
      timeline: "DEC 2018 - DEC 2020; JAN 2022 - JUL 2023",
      stack: [
        "Angular",
        "Node.js",
        "MySQL",
        "HTML5",
        "CSS",
        "Tailwind",
        "PHP",
        "Azure",
        "NestJS",
        "Codeigniter",
      ],
      project_paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  };

  const page = pages[params.slug];
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <p>{params.slug}</p>
      {/* <div className="flex my-10 w-3/4">
        <div className="flex justify-center items-center w-1/3">
          <Image
            src={`/images/${params.slug}.png`}
            alt={params.slug}
            width={130}
            height={130}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className={`${montserrat.className} flex flex-col`}>
            <p className="font-bold text-2xl">{page.title}</p>
            <p className="font-semibold">{page.role}</p>
            <p className="text-xs">{page.timeline}</p>
          </div>
          <div className={`${montserrat.className} flex flex-col gap-4`}>
            <p className="font-semibold">TECH STACK</p>
            <div className="grid grid-cols-5 gap-y-4 gap-x-8">
              {page.stack.map((stack, index) => (
                <div
                  key={index}
                  className="py-2 rounded-xl bg w-[80px] text-xs text-center bg-gray-200"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>

          <p className="font-medium text-lg">
            <i className="bi bi-globe text-black mr-4"></i>
            <span className="text-center">www.cherehani.org</span>
          </p>
        </div>
      </div>
      <hr className="w-full border border-gray-200" />
      <div className="w-3/4 f">
        <p className="font-semibold text-2xl my-8">DESCRIPTION</p>
        {page.project_paragraphs.map((paragraph, index) => (
          <p key={index} className="text-justify my-4">
            {paragraph}
          </p>
        ))}
      </div> */}
    </div>
  );
}
