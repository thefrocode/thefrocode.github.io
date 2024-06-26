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
        <h2
          className={`${deliusUnicase.className} text-white px-6 md:text-3xl`}
        >
          WORK EXPERIENCE
        </h2>
        <hr className="flex-grow" />
      </div>
      <div className="work-experience__container my-20 h-[450px]  ">
        <div className="work-experience__vertical-line"></div>
        <div className="work-experience__right -ml-[104px] md:-ml-[120px]">
          <div className="flex gap-4 md:gap-8 items-center">
            <p className="text-white w-[80px] self-center">Sept 2023</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[20px] md:w-[60px]" />
            <p className="w-[120px] md:w-[210px] border-2 border-white text-sm md:text-base text-white text-center py-4 rounded-lg -ml-4 md:-ml-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div className="work-experience__left -mr-[104px] md:-mr-[120px] work-experience__second">
          <div className="flex flex-row-reverse gap-4 md:gap-8 justify-end items-center">
            <p className="text-white w-[80px]">Sept 2024</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[20px] md:w-[60px]" />
            <p className="w-[120px] md:w-[210px] border-2 border-white  text-sm md:text-base text-white text-center py-4 rounded-lg -mr-4 md:-mr-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div className="work-experience__right -ml-[104px] md:-ml-[120px] work-experience__third">
          <div className="flex gap-4 md:gap-8 items-center">
            <p className="text-white w-[80px] self-center">Sept 2023</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[20px] md:w-[60px]" />
            <p className="w-[120px] md:w-[210px] border-2 border-white text-sm md:text-base text-white text-center py-4 rounded-lg -ml-4 md:-ml-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
        <div
          id="projects"
          className="work-experience__left -mr-[104px] md:-mr-[120px] work-experience__fourth"
        >
          <div className="flex flex-row-reverse gap-4 md:gap-8 justify-end items-center">
            <p className="text-white w-[80px]">Sept 2024</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[20px] md:w-[60px]" />
            <p className="w-[120px] md:w-[210px] border-2 border-white text-sm md:text-base text-white text-center py-4 rounded-lg -mr-4 md:-mr-8">
              Started at Cherehani Africa
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white gap pb-2 text-white">
        <p
          className={`${deliusUnicase.className} px-6 pb-2 md:text-2xl bg-black -mt-4 rounded-b-3xl`}
        >
          PROJECTS
        </p>
        <i className="bi bi-files md:text-2xl bg-black px-6 pb-2 rounded-b-xl"></i>
      </div>
    </div>
  );
}
