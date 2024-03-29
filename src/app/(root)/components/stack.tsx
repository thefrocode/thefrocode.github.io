import Image from "next/image";

export default function TechStack() {
  const items = [
    "",
    "aws",
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
            className={`w-24 h-24 text-white border-b border-r flex justify-center items-center`}
            key={index}
          >
            {/* <i className={`text-5xl bi bi-${item}`}></i> */}
            {item && (
              <Image
                src={`/icons/${item}.svg`}
                alt={item}
                width={60}
                height={60}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
