"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Delius_Unicase } from "next/font/google";
import Link from "next/link";
const deliusUnicase = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi: any) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode: any) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: any) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: any, eventName?: any) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap: any, snapIndex: any) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex: any) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem: any) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode: any = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale);
  }, [emblaApi, tweenScale]);

  const projects = [
    {
      title: "Project 1",
      description:
        "Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1",
      url: "project-1",
    },
    {
      title: "Project 2",
      description:
        "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
      url: "project-1",
    },
    {
      title: "Project 3",
      description:
        "Project 3 Project 3 Project 3 Project 3 Project 3 Project 3 Project 3 Project 3",
      url: "project-1",
    },
    {
      title: "Project 4",
      description:
        "Project 4 Project 4 Project 4 Project 4 Project 4 Project 4 Project 4 Project 4",
      url: "project-1",
    },
  ];
  return (
    <div id="projects" className="embla flex mx-16 my-10 gap-8">
      <button className="embla__prev w-1/6">
        <i className="bi bi-chevron-left text-3xl" onClick={scrollPrev}></i>
      </button>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number flex flex-col items-center gap-6 bg-[#000000d9] rounded-3xl py-8 px-4 text-white">
                <Image
                  src={`/images/${project.url}.png`}
                  alt={project.title}
                  width={100}
                  height={100}
                />
                <p className={`${deliusUnicase.className} text-xl font-bold`}>
                  {project.title}
                </p>
                <p
                  className={`${deliusUnicase.className} text-sm text-center px-2`}
                >
                  {project.description}
                </p>
                <Link
                  href={`details/${project.url}`}
                  className={`${deliusUnicase.className} text-sm font-bold border-2 border-white rounded-md px-4 py-2`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__next w-1/6" onClick={scrollNext}>
        <i className="bi bi-chevron-right text-3xl"></i>
      </button>
    </div>
  );
}
