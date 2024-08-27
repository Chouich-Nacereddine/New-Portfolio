"use client";
import { useEffect } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import ScrollReveal from "scrollreveal";

const Experiences = [
  {
    date: "02/2024 | 07/2024",
    company: "Capgemini Engineering",
    tasks: [
      {
        task: "Fullstack App",
        D: "Developed a Python-based solution to automate the segmentation of testing data, improving efficiency and reducing manual effort.",
      },
      {
        task: "KPi dahshboard",
        D: "Developed a dynamic dashboard using Python and Streamlit to visualize key performance indicators (KPIs) for battery packs. This will enable real-time tracking of progress, efficiency, and potential issues within test centers.",
      },
    ],

    tech: ["(Flask/ Next.js)", " | (Python + Streamlit + Pandas + Plotly)"],
  },
  {
    date: "03/2023 | 09/2023",
    company: "ENSAF",
    tasks: [
      {
        task: "Fullstack App",
        D: "Designed and developed a robust web application to streamline the management of PFE (Projet de Fin d'Études) documents at my engineering school, enhancing efficiency and simplifying the workflow for students and faculty.",
      },
      {
        task: "Fullstack App",
        D: "Created a comprehensive web application to streamline library management at my school, optimizing book tracking, user interactions, and administrative tasks to enhance overall efficiency and accessibility.",
      },
    ],

    tech: [
      "(React.js/ Laravel/ Express.js/ Mega.js/ Tailwind CSS/ Node.js/ MySQL)",
      " | (MERN stack)",
    ],
  },
  {
    date: "08/2022",
    company: "ONDA | Fes Saïss Airports",
    tasks: [
      {
        task: "Computer and Electronic Systems Study",
        D: "Studied Computer and Electronic Systems at Fès Saïss Airports, with in-depth exposure to various technologies including camera systems, scanners, audio systems, telecommunication systems, network infrastructure, data centers, and handling systems.",
      },
    ],

    tech: [
      "Camera Systems/ Scanners/ Audio Systems/ Telecommunication Systems/ Networking/ Data Centers/ Handling Systems",
    ],
  },
  {
    date: "01/2022 | 08/2022",
    company: "eBay",
    tasks: [
      {
        task: "Selling office activation key",
        D: "Managed the sale of Office key activations on eBay, overseeing the entire process from listing and customer support to transaction handling and delivery. Ensured accurate and prompt fulfillment of orders, maintained high customer satisfaction through effective communication, and optimized listings for better visibility and sales performance.",
      },
    ],

    tech: [
      "eBay Platform/ Office Software Activation/ Listing Optimization Techniques/ Transaction Management Systems/ Customer Support Tools.",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = ScrollReveal({
        distance: "100px",
        duration: 1000,
        easing: "ease-in-out",
        reset: true,
      });

      sr.reveal(".reveal-left", { origin: "left" });
      sr.reveal(".reveal-right", { origin: "right" });
      sr.reveal(".reveal-top", { origin: "top" });
      sr.reveal(".reveal-bottom", { origin: "bottom" });
    }
  }, []);

  return (
    <section className="min-h-max flex px-8 overflow-hidden w-full flex-col my-16">
      <h1 className="text-[#397DF0] tracking-wider text-3xl pb-10 text-center reveal-top">
        Experience
      </h1>
      <div className="space-y-14 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#397DF0] before:to-transparent">
        {Experiences.map((experience, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0 ? " reveal-right" : " reveal-left"
            } relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group `}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-[#397DF0] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <MdOutlineAddCircle className="h-8 w-8 text-white" />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#D2E5FF] p-4 rounded border border-white-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-[#397DF0] tracking-widest">
                  {experience.company}
                </div>
                <time className="font-caveat font-medium text-indigo-500">
                  {experience.date}
                </time>
              </div>
              <div className="text-black ">
                <ul className="flex flex-col">
                  {experience.tasks.map((T, index) => (
                    <li key={T.D} className="font-semibold font-mono">
                      &bull; {T.task} <br />
                      <p className="font-normal text-justify font-mono px-4 py-1">
                        {T.D}
                      </p>
                    </li>
                  ))}

                  <li className="font-semibold text-justify font-mono">
                    &#9733;Skills :&nbsp;
                    {experience.tech.map((item, index) => (
                      <span
                        key={index / 8}
                        className="font-mono text-sm text-[#397DF0]"
                      >
                        {item}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
