import { LinearGradient } from "react-text-gradients";
import SkillsSphere from "../components/SkillsSphere";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="w-full flex justify-center px-4 py-10" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <motion.h2
              className="mb-6 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Skills & Technologies
              </LinearGradient>
            </motion.h2>
          </div>
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#fc0865]/20 blur-3xl" />
            <SkillsSphere />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
