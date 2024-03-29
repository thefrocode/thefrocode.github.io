import Image from "next/image";

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
  const items1 = [
    {
      item: "",
      class: "logo-cell-10",
    },
    {
      item: "aws",
      class: "logo-cell-20",
    },
    {
      item: "",
      class: "logo-cell-30",
    },
    "",
    "",
    "",
    "php",
    "",
    "jest",
    "typescript",
    "node",
    "react",
    "css",
    "bootstrap",
    "",
    "",
    "electron",
    "angular",
    "html",
    "laravel",
    "azure",
    "git",
    "nestjs",
    "nx",
    "mysql",
    "javascript",
    "postgres",
    "express",
    "",
    "",
    "",
    "tailwind",
    "",
    "",
  ];
  return (
    <div className="bg-black w-full flex justify-center items-center h-[700px]">
      <div className="grid grid-cols-7 grid-rows-5 logo_grid">
        {items?.map((item, index) => (
          <div
            className={`w-32 h-28 text-white flex justify-center
            ${item.class != "" ? item.class : "border-r border-b"}
            ${item.alignment ? item.alignment : "items-center"}
          }`}
            key={index}
          >
            {item.item && (
              <div
                className="image-container"
                title={item.item.toLocaleUpperCase()}
              >
                <Image
                  src={`/icons/${item.item}.svg`}
                  alt={item.item}
                  width={70}
                  height={70}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
