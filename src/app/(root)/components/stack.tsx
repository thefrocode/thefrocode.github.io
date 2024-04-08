import { Delius_Unicase } from "next/font/google";
import Image from "next/image";
const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function TechStack() {
  const items = [
    {
      item: "",
      class: "logo-cell logo-cell-top logo-cell-50 border-b",
    },
    {
      item: "aws",
      class: "logo-cell logo-cell-top logo-cell-40 border-b",
      alignment: "items-end",
    },
    {
      item: "",
      class: "logo-cell logo-cell-top logo-cell-60 border-b",
    },
    {
      item: "",
      class: "logo-cell logo-cell-top logo-cell-20 border-b",
    },
    {
      item: "php",
      class: "logo-cell logo-cell-top logo-cell-60 border-b",
      alignment: "items-end",
    },
    {
      item: "",
      class: "logo-cell logo-cell-top logo-cell-20 border-b",
    },
    {
      item: "",
      class: "border-r",
    },
    {
      item: "jest",
      class: "logo-cell-side logo-cell-side-left logo-cell-side-30 border-r",
    },
    {
      item: "typescript",
      class: "",
    },
    {
      item: "node",
      class: "",
    },
    {
      item: "react",
      class: "",
    },
    {
      item: "css",
      class: "",
    },
    {
      item: "bootstrap",
      class: "",
    },
    {
      item: "",
      class: "logo-cell-side logo-cell-side-right logo-cell-side-50",
    },
    {
      item: "",
      class: "logo-cell-side logo-cell-side-left logo-cell-side-10 border-r",
    },
    {
      item: "electron",
      class: "",
    },

    {
      item: "angular",
      class: "",
    },
    {
      item: "html",
      class: "",
    },
    {
      item: "laravel",
      class: "",
    },
    {
      item: "azure",
      class: "",
    },
    {
      item: "git",
      class: "logo-cell-side logo-cell-side-right logo-cell-side-100",
    },
    {
      item: "nestjs",
      class: "",
    },
    {
      item: "nx",
      class: "",
    },
    {
      item: "mysql",
      class: "",
    },
    {
      item: "javascript",
      class: "",
    },
    {
      item: "postgres",
      class: "",
    },
    {
      item: "express",
      class: "",
    },
    {
      item: "",
      class: "logo-cell-side logo-cell-side-right logo-cell-side-10",
    },
    {
      item: "",
      class: "logo-cell logo-cell-bottom logo-cell-60",
    },
    {
      item: "",
      class: "logo-cell logo-cell-bottom logo-cell-30",
    },
    {
      item: "tailwind",
      class: "logo-cell logo-cell-bottom logo-cell-50",
      alignment: "items-start",
      id: "experience",
    },
    {
      item: "",
      class: "logo-cell logo-cell-bottom logo-cell-20",
    },
    {
      item: "",
      class: "logo-cell logo-cell-bottom logo-cell-50",
    },
    {
      item: "",
      class: "logo-cell logo-cell-bottom logo-cell-10",
    },
  ];
  return (
    <div className="bg-black w-full flex flex-col justify-between items-center h-[350px] md:h-[700px] text-white">
      <div className="flex flex-col justify-center items-center bg-white rounded-3xl gap pt-2 -mt-14 md:-mt-16">
        <i className="bi bi-tools md:text-2xl bg-black px-6 pt-2 rounded-t-xl"></i>
        <p
          className={`${deliusUnicase.className} px-6 pt-2 md:text-2xl bg-black rounded-3xl`}
        >
          TECH STACK
        </p>
      </div>

      <div className="grid grid-cols-7 grid-rows-5 logo_grid">
        {items?.map((item, index) => (
          <div
            className={`md:w-32 md:h-28 w-10 h-12 text-white flex justify-center 
          ${item.class != "" ? item.class : "border-r border-b"}
          ${item.alignment ? item.alignment : "items-center"}
          `}
            key={index}
          >
            {item.item && (
              <div
                className="image-container"
                title={item.item.toLocaleUpperCase()}
                id={item.id}
              >
                <Image
                  src={`/icons/${item.item}.svg`}
                  alt={item.item}
                  layout="responsive"
                  width={70}
                  height={70}
                  className="p-2"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <p className="text-black">p</p>
      </div>
    </div>
  );
}
