import { Fragment, useEffect, useState } from "react";
interface FinalItem {
  item: string;
  extra_css: string;
}

export default function TechStack() {
  const items = [
    "",
    "amazon",
    "",
    "",
    "",
    "filetype-php",
    "",
    "Item 8",
    "filetype-tsx",
    "Item 10",
    "Item 11",
    "Item 12",
    "bootstrap-fill",
    "",
    "",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "",
    "",
    "",
    "Item 31",
    "",
    "",
    "",
  ];

  return (
    <div className="bg-black w-full flex justify-center items-center h-[660px]">
      <div className="grid grid-cols-7 grid-rows-5 logo_grid">
        {items?.map((item, index) => (
          <div
            className={`w-20 h-20 text-white border-b border-r flex justify-center items-center`}
            key={index}
          >
            <i className={`text-5xl bi bi-${item}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
