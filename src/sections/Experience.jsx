import { LinearGradient } from "react-text-gradients";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#32303a", color: "fff" }}
      contentArrowStyle={{ borderRight: "7px solid #32303a" }}
      date={experience.duration}
      dateClassName="text-white"
      iconStyle={{ background: "#32303a", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Experience */}
      <div>
        <h3 className="text-white text-base font-bold">
          {experience.position}
        </h3>
        <p className="text-gray-300 text-base font-mono" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="list-disc ml-5 mt-4 space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li
              key={`highlight-${i}`}
              className="text-gray-300 text-xs md:text-sm font-medium"
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {experience.projects && experience.projects.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm text-white font-semibold mb-2">Projects:</h4>
          <ul className="list-disc ml-5 space-y-1">
            {experience.projects.map((project, i) => (
              <li
                key={`project-${i}`}
                className="text-gray-400 text-xs md:text-sm font-medium"
              >
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <section
        className="w-full flex justify-center mb-20 px-4"
        id="experience"
      >
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          {/* Title */}
          <div className="w-full">
            <motion.h2
              className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Work Experience
              </LinearGradient>
            </motion.h2>
          </div>

          {/* Timeline */}
          <VerticalTimeline lineColor={"#fff"}>
            {workExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Experience;

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};
