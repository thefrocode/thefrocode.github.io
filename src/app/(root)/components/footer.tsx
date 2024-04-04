"use client";
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="flex px-16 py-8 bg-black text-white gap-16">
      <div className="flex flex-col gap-4 w-1/2">
        <p className="mr-10">
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.
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
      <div className="flex flex-col gap-2">
        <p className="font-bold">Pages</p>
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
        <button
          onClick={() => scrollToSection("projects")}
          className="text-xs text-left"
        >
          Projects
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Contact</p>
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
    </footer>
  );
}
