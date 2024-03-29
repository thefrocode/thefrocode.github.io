import { Delius_Unicase } from "next/font/google";
const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Experience() {
  return (
    <div className="bg-black w-full">
      <div className="flex items-center">
        <hr className="flex-grow" />
        <h2 className={`${deliusUnicase.className} text-white px-6 text-3xl`}>
          WORK EXPERIENCE
        </h2>
        <hr className="flex-grow" />
      </div>
      <div className="work-experience__container mt-20 h-[450px]">
        <div className="work-experience__vertical-line"></div>
        <div className="work-experience__right -ml-[120px]">
          <div className="flex gap-8 items-center">
            <p className="text-white w-[80px] self-center">Sept 2023</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[60px]" />
            <p className="border-2 border-white text-white px-2 py-4 rounded-lg -ml-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div className="work-experience__left -mr-[120px] work-experience__second">
          <div className="flex flex-row-reverse gap-8 justify-end items-center">
            <p className="text-white w-[80px]">Sept 2024</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[60px]" />
            <p className="border-2 border-white text-white px-2 py-4 rounded-lg -mr-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div className="work-experience__right -ml-[120px] work-experience__third">
          <div className="flex gap-8 items-center">
            <p className="text-white w-[80px] self-center">Sept 2023</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[60px]" />
            <p className="border-2 border-white text-white px-2 py-4 rounded-lg -ml-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div className="work-experience__left -mr-[120px] work-experience__fourth">
          <div className="flex flex-row-reverse gap-8 justify-end items-center">
            <p className="text-white w-[80px]">Sept 2024</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[60px]" />
            <p className="border-2 border-white text-white px-2 py-4 rounded-lg -mr-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-24">
        <div className="flex">Cherehani Africa1</div>
        <div className="flex">Cherehani Africa2</div>
        <div className="flex">Cherehani Africa3</div>
      </div>
    </div>
  );
}
