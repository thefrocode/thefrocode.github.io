import { Delius_Unicase } from "next/font/google";
import Link from "next/link";
const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Experience() {
  const cherehaniStack = [
    "Angular",
    "Node.js",
    "PHP",
    "MySQL",
    "Azure",
    "NestJS",
  ];
  const freelanceStack = [
    "Angular",
    "Node.js",
    "MySQL",
    "AWS",
    "NestJS",
    "Laravel",
  ];
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
            <div className="w-[120px] md:w-[230px] border-2 border-white text-sm md:text-base text-white text-center py-4 rounded-lg -ml-4 md:-ml-8">
              <p className="text-wrap mx-3 text-center">
                Freelance Full Stack Software Engineer
              </p>
              <p> 2023 - Present</p>
              <div className="flex gap-2 flex-wrap mt-2 px-2 justify-center">
                {freelanceStack.map((stack, index) => (
                  <span
                    key={index}
                    className="py-0.5 md:py-1 px-2 rounded-md bg  text-xxs md:text-xs text-center bg-white text-black"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="work-experience__left -mr-[104px] md:-mr-[120px] work-experience__second">
          <div className="flex flex-row-reverse gap-4 md:gap-8 justify-end items-center">
            <p className="text-white w-[80px]">Dec 2018</p>
            <i className="bi bi-record-circle text-white"></i>
            <hr className="w-[20px] md:w-[60px]" />
            <div className="w-[120px] md:w-[230px] flex flex-col border-2 border-white  text-sm md:text-base text-white text-center py-4 rounded-lg -mr-4 md:-mr-8">
              <p>Lead Software Engineer</p>
              <p>Cherehani Africa</p>
              <p> 2018 - 2023</p>
              <div className="flex gap-2 flex-wrap mt-2 px-2 justify-center">
                {cherehaniStack.map((stack, index) => (
                  <span
                    key={index}
                    className="py-0.5 md:py-1 px-2 rounded-md bg  text-xxs md:text-xs text-center bg-white text-black"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <Link
                href="/details/cherehani-africa "
                className="border border-2 border-white px-2 py-1 mx-auto mt-4 w-1/4 justify-center rounded-lg text-white bg-black hover:bg-white hover:text-black"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center bg-white gap pb-2 text-white">
        <p
          className={`${deliusUnicase.className} px-6 pb-2 md:text-2xl bg-black -mt-4 rounded-b-3xl`}
        >
          PROJECTS
        </p>
        <i className="bi bi-files md:text-2xl bg-black px-6 pb-2 rounded-b-xl"></i>
      </div> */}
    </div>
  );
}
