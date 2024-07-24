// "use client"

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const reviews = [
  {
    img: "/certif/IBM Full Stack Software Developer Professional Certificate.jpg",
  },
  {
    img: "/certif/Fundamentals of Java Programming.jpg",
  },
  {
    img: "/certif/Javascript intermediate.jpg",
  },
  {
    img: "/certif/Front End Development Libraries.jpg",
  },
  {
    img: "/certif/Vanilla js.jpg",
  },
  {
    img: "/certif/Encryption.jpg",
  },
  {
    img: "/certif/Introduction to Cloud Computing.jpg",
  },
  {
    img: "/certif/Introduction to Web Development with HTML, CSS, JavaScript.jpg",
  },
  {
    img: "/certif/Getting Started with Git and GitHub.jpg",
  },
  {
    img: "/certif/Developing Front-End Apps with React.jpg",
  },
  {
    img: "/certif/Developing Back-End Apps with Node.js and Express.jpg",
  },
  {
    img: "/certif/Python for Data Science, AI & Development.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-max h-max cursor-pointer overflow-hidden rounded-xl "
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <img className="w-[20vw]" alt="" src={img} />
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: true,
    });

    sr.reveal(".reveal-bottom", { origin: "bottom" });
  }, []);
  return (
    <div className="relative flex h-max w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-2 bg-background ">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#d2e5ff] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#d2e5ff] dark:from-background"></div>
    </div>
  );
}
