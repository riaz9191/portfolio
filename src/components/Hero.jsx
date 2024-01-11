import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tilt from "react-parallax-tilt";
import imageSrc from "../assets/riaz.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div>
        <div>
          <div
            className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-4 violet-gradient" />
            </div>

            <div className="flex flex-col">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Riaz</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-[20px]  text-white-100`}>
                Full Stack Developer
              </p>
              <p className={`${styles.heroSubSubText} text-[15px] sm:block hidden"`}>
                Transform Ideas into Stunning Web Solutions{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center pt-[360px]   sm:ml-[600px] sm:pt-28">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.1}
              className="sm:w-80 h-80 sm:h-[410px] rounded-lg green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <motion.img src={imageSrc} alt="Image" className="sm:w-full sm:h-full w-[300px] h-[400px] rounded-lg" />
            </Tilt>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

