import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const carouselSlides = myProjects.map((project, index) => ({
      key: uuidv4(),
      content: <ProjectCard project={project} />,
      onClick: () => setSlideIndex(index),
    }));
    setSlides(carouselSlides);
  }, []);

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="projects">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Projects
            </LinearGradient>
          </motion.h2>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            const swipe = info.offset.x;

            if (swipe > 50) {
              setSlideIndex(
                (prev) => (prev - 1 + myProjects.length) % myProjects.length
              );
            } else if (swipe < -50) {
              setSlideIndex((prev) => (prev + 1) % myProjects.length);
            }
          }}
          className="w-full mt-24 mb-12 md:mt-32 md:mb-20 lg:mt-40 h-[400px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          {slides.length > 0 && (
            <Carousel
              slides={slides}
              goToSlide={slideIndex}
              offsetRadius={1}
              showNavigation={false}
              animationConfig={config.stiff}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
