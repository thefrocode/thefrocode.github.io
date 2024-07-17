import { Montserrat } from "next/font/google";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
export function generateStaticParams() {
  return [{ slug: "cherehani-africa" }];
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
      project_paragraphs: { topic: string; content: string }[];
    };
  } = {
    "cherehani-africa": {
      title: "CHEREHANI AFRICA",
      role: "LEAD SOFTWARE ENGINEER",
      timeline: "DEC 2018 - AUG 2023",
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
        {
          topic: "Key Contributor to Loan Management System Development",
          content:
            "Joined the team to build the Loan Management System from the ground up, playing an integral role in its design and development.",
        },
        {
          topic: "Integration with Daraja APIs",
          content:
            "Expertly utilized Daraja APIs (B2C and C2B) to streamline capital disbursement and payment receipt processes, ensuring smooth financial transactions.",
        },

        {
          topic: "CRM Evolution and Optimization",
          content:
            "Spearheaded multiple iterations of the CRM, including a strategic migration to a mono repo for enhanced code reusability and the creation of tailored dashboards, improving overall system performance and user experience.",
        },
        {
          topic: "Business and Tech Alignment",
          content:
            "Acted as the essential liaison between business and tech teams, ensuring seamless alignment of tech work with business needs to achieve business goals while enabling the tech team to effectively manage its internal tasks.",
        },
        {
          topic: "Sprint Planning and Integration",
          content:
            "Planned sprints by merging business requirements, internal tech tasks, and customer feedback collected through the field team, ensuring a balanced and responsive development cycle.",
        },
        {
          topic: "Mentorship and Team Development",
          content:
            "Mentored newly joined engineers, fostering their growth and integration into the team, and contributing to a collaborative and high-performing work environment.",
        },
        {
          topic: "Dashboard Creation",
          content:
            "Led the creation of intuitive and data-driven dashboards for various departments, including the field and collections teams, and the finance team, significantly improving operational efficiency and data visibility.",
        },
        {
          topic: "Azure Ecosystem Utilization",
          content:
            "Leveraged the robust Azure ecosystem to ensure high reliability and availability of the CRM, providing a solid foundation for the company's technological infrastructure.",
        },
      ],
    },
  };

  const page = pages[params.slug];
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="flex my-10 w-5/6 md:w-3/4">
        <div className="hidden md:flex justify-center items-center w-1/3">
          <Image
            src={`/images/${params.slug}.png`}
            alt={params.slug}
            width={200}
            height={200}
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
            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-8">
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
      <div className="w-5/6 md:w-3/4">
        <p className="font-semibold text-2xl my-8">DESCRIPTION</p>
        {page.project_paragraphs.map((paragraph, index) => (
          <p key={index} className="text-justify my-4">
            <span className="font-bold">{paragraph.topic}: </span>
            {paragraph.content}
          </p>
        ))}
      </div>
      <hr className="w-full border border-gray-200" />
    </div>
  );
}
