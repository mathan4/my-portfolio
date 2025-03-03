import React from 'react';
import { useNavigate } from 'react-router-dom';
import FallingStarsComponent from '../FallingStarsComponent/FallingStarsComponent';
import weather from '../../assets/weather.png';
import finance from '../../assets/finance.png';
import flashcard from '../../assets/flashcard.png';
import plaza from '../../assets/plaza.png';
import shop from '../../assets/shop.png';
import memory from '../../assets/memory.png';

const ProjectsComponent = () => {
   const navigate=useNavigate()
  
    const HandleNavigate=()=>{
      navigate('/contact');
    }

  const projects = [
    {
      id: 1,
      title: 'Shop Smart',
      description: 'A full-stack e-commerce store with both frontend and backend components.',
      image: shop, // Replace with your project image
      link: 'https://github.com/mathan4/shop-smart-fe',
    },
    {
      id: 2,
      title: 'React Weather App',
      description: 'A real-time weather app using the OpenWeather API.',
      image: weather, // Replace with your project image
      link: 'https://mathan4.github.io/react-weather-app/',
    },
    {
      id: 3,
      title: 'Finance Tracker',
      description: 'A MERN stack finance tracking app for managing transactions and budgets.',
      image: finance, // Replace with your project image
      link: 'https://finance-tracker-fe-eta.vercel.app/',
    },
    {
      id: 4,
      title: 'Memory game',
      description: 'A Memory game with javascript',
      image: memory,
      link: 'https://memory-game-mathan.netlify.app/', 
    },
    {
      id: 5,
      title: 'Leitner System',
      description: 'A flashcard learning app based on the Leitner system for spaced repetition.',
      image: flashcard, 
      link: 'https://alfred-task-fe.vercel.app/',
    },
    {
        id: 6,
        title: 'Pretend Plaza',
        description: 'A React js ecommerce store with search and cart functions',
        image: plaza, 
        link: 'https://pretendplaza-store.netlify.app/',
      },
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <React.Fragment>
      <div className="absolute inset-0 z-0">
        <FallingStarsComponent />
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-8">
        {projects.map((project) => (
          <div
            key={project.id}
            id='glow-effect'
            className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:-translate-y-1 hover:transform-3d hover:translate-x-1 "
            onClick={() => handleProjectClick(project.link)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40  rounded-t-lg object-fit"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#2D3047]">{project.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{project.description}</p>
              <button className="mt-4 bg-[#34E1EA] text-[#2D3047] font-bold py-2 px-4 rounded-md shadow hover:bg-[#2D3047] hover:text-[#FFFBFC] transition duration-300">
                View Project
              </button>
            </div>
          </div>
        ))}
        <button onClick={HandleNavigate} className="mt-8 bg-[#34E1EA] text-[#2D3047] font-bold py-3 px-6  rounded-lg shadow-lg hover:bg-[#2D3047] hover:text-[#FFFBFC] transition duration-300 text-lg">
          Let's Work Together
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProjectsComponent;
