import React from "react";
import profile from "../../assets/profile.png";
import FallingStarsComponent from "../FallingStarsComponent/FallingStarsComponent";
import { useNavigate } from "react-router-dom";

const HeroComponent = () => {
  const navigate=useNavigate()

  const HandleNavigate=()=>{
    navigate('/contact');
  }
  return (
    <section className="relative bg-[#FFFBFC] h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-6 lg:px-20">
      {/* Falling Stars Background */}
      <div className="absolute inset-0">
        <FallingStarsComponent />
      </div>
      {/* Text Section */}
      <div className="relative md:w-1/2 z-10 text-center md:text-left">
        <h1 className="sm:text-3xl md:text-4xl lg:text-6xl text-4xl font-extrabold mt-10 leading-tight text-white">
          This is <span id="glow-effect-text">Mathan</span>
        </h1>
        <p className="sm:text-sm md:text-sm lg:text-xl text-lg text-white mt-4 leading-relaxed">
          I'm a final-year CS student and MERN stack developer with experience
          in building responsive web apps. I specialize in React, Node.js, and
          MongoDB, and I'm currently expanding my skills in Nextjs and
          AI tools.
        </p>
        <button onClick={HandleNavigate} className="mt-8 bg-[#34E1EA] text-[#2D3047] font-bold py-3 px-6  rounded-lg shadow-lg hover:bg-[#2D3047] hover:text-[#FFFBFC] transition duration-300 text-lg">
          Let's Work Together
        </button>
      </div>

      {/* Image Section */}
      <div className="relative mt-8 md:mt-0 md:w-1/2 md:mt-10 flex justify-center z-10 rounded-full">
        <img
          src={profile}
          alt="Web development illustration"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          id="glow-effect-img"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
