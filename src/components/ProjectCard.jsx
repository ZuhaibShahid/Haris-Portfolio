import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl shadow-black-200 bg-[#32303a] transition-all duration-200 select-none">
      <div
        className="absolute -top-12 md:-top-24 left-1/2 transform -translate-x-1/2 w-[230px] sm:w-[290px] md:w-[370px] lg:w-[420px] rounded-xl overflow-hidden shadow-xl z-20"
        style={project.logoStyle}
      >
        <img
          src={project.logo}
          alt="logo"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-5 text-white-600 my-2 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <h2 className="text-md md:text-xl font-semibold mb-2 text-white font-generalsans">
          {project.title}
        </h2>
        <p className="text-[#afb0b6] text-xs md:text-base font-generalsans">
          {project.desc}
        </p>
        <p className="text-[#afb0b6] text-xs md:text-base font-generalsans">
          {project.subdesc}
        </p>
      </div>

      <div className="flex flex-col items-start justify-between flex-wrap gap-5">
        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-3 w-full overflow-hidden">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
            >
              <img src={tag.path} alt={tag.name} className="w-6 sm:w-8" />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center w-full">
          {/* GitHub Link */}
          {project.source && (
            <motion.a
              className="flex items-center gap-2 cursor-pointer text-white"
              href={project.source}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-xs md:text-base">GitHub</p>
              <FaGithub className="w-4 h-4" />
            </motion.a>
          )}

          {/* Demo Link */}
          {project.href && (
            <motion.a
              className="flex items-center gap-2 cursor-pointer text-white"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-xs md:text-base">Demo</p>
              <img src="arrow-up.png" alt="arrow" className="w-3 h-3" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    logoStyle: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    subdesc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
