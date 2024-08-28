import Projects from "../data/Projects.js";
import "../Portfolio.css";
const Portfolio = () => {
  return (
    <section className="min-h-max flex px-20 py-10overflow-hidden w-full flex-col my-20" id='portfolio'>
      <h1 className="text-[#397DF0] tracking-wider text-3xl pb-10 text-center reveal-top">
        Portfolio
      </h1>
      <div className="flex flex-wrap w-full justify-around gap-10 font-mono">
        {Projects.map((project, index) => (
          <div className="w-[30%] h-[30vh] card" key={index}>
            <img
              src={`/portfolio/${project.title}.jpg`}
              alt="project"
            />
            <div className="info">
              <h1 className="font-mono py-2 text-2xl font-semibold">{project.title}</h1>
              
              <a href={`${project.link}`} classNam='font-mono' target="blank" >Check It Out</a>
            </div>
          </div> 
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
