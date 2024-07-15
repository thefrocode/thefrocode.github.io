"use client";
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="flex px-4 md:px-16 py-8 bg-white text-black gap-6 md:gap-16 flex-wrap md:flex-nowrap">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <p className="md:mr-10 text-sm md:text-base">
          Transforming business needs into scalable solutions, I bring 5 years
          of full-stack engineering expertise. Passionate about user-centric
          development, I deliver high-quality software that meets both business
          objectives and user expectations.
        </p>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/the_frocode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/christine-mukiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="flex gap-6 md:gap-16 w-full md:w-1/2">
        <div className="flex flex-col gap-2 w-1/3">
          <p className="text-sm font-semibold md:text-base md:font-bold">
            Pages
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-xs text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("stack")}
            className="text-xs text-left"
          >
            Tech Stack
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-xs text-left"
          >
            Experience
          </button>
          {/* <button
            onClick={() => scrollToSection("projects")}
            className="text-xs text-left"
          >
            Projects
          </button> */}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold md:text-base md:font-bold">
            Contact
          </p>
          <p className="text-xs">
            <i className="bi bi-telephone-fill text-white mr-2" />
            (+254) 700 000808
          </p>
          <p className="text-xs">
            <i className="bi bi-envelope text-white mr-2" />
            cmukiri808@gmail.com
          </p>
          <p className="text-xs">
            <i className="bi bi-globe text-white mr-2" />
            thefrocode.github.io
          </p>
        </div>
      </div>
    </footer>
  );
}
