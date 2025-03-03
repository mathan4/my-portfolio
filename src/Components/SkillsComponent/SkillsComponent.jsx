import React from "react";
import { motion } from "framer-motion";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongo.jpg";
import netlify from "../../assets/netlify.png";
import vercel from "../../assets/vercel.png";
import git from "../../assets/git.png";
import FallingStarsComponent from "../FallingStarsComponent/FallingStarsComponent";

const skills = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "Express.js", logo: express },
  { name: "Node.js", logo: node },
  { name: "Mongo DB", logo: mongodb },
  { name: "netlify", logo: netlify },
  { name: "git", logo: git },
  { name: "vercel", logo: vercel },
];

const SkillsComponent = () => {
  return (
    <section className="relative bg-gray-900 py-16 h-[90vh]">
      {/* Stars background */}
      <div className="fixed inset-0 w-screen z-0">
        <FallingStarsComponent />
      </div>

      {/* Content container */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white">Skills & Tools</h2>
        <p className="text-lg text-white mt-4">
          Crafting seamless digital experiences with these technologies
        </p>

        {/* Skills circle */}
        <div className="relative mx-auto mt-16 w-64 h-64 md:w-80 md:h-80">
          {/* Rotating dashed outer circle */}
          <motion.div
            className="absolute w-full h-full rounded-full  opacity-30"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          ></motion.div>

          {/* Center point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full  opacity-30"></div>

          {/* Rotating logos */}
          <motion.div
            className="absolute w-full h-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {skills.map((skill, index) => {
              // Calculate the position in a circle
              const totalSkills = skills.length;
              const angleStep = (2 * Math.PI) / totalSkills;
              const angle = index * angleStep;

              // Calculate position (center of container + offset based on angle)
              const radius = 120; // Slightly smaller than container
              const offsetX = Math.cos(angle) * radius;
              const offsetY = Math.sin(angle) * radius;

              return (
                <div
                  key={skill.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    left: `calc(50% + ${offsetX}px)`,
                    top: `calc(50% + ${offsetY}px)`,
                    marginLeft: "-28px", // Half the width
                    marginTop: "-28px", // Half the height
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Tooltip with skill name */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-xs whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
