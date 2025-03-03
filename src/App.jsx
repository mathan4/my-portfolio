import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import SkillsComponent from "./Components/SkillsComponent/SkillsComponent";
import "./App.css";
import ProjectsComponent from "./Components/ProjectsComponent/ProjectsComponent";
import ContactComponent from "./Components/ContactComponent/ContactComponent";

const Navbar = () => {
  const location = useLocation(); // To get current path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky z-20 p-2 shadow-md">
      <div className="container max-w-screen-md mx-auto flex items-center justify-center">
        {/* Compact Navigation Links (for both mobile and desktop) */}
        <div className="flex space-x-3">
          <Link
            to="/"
            id="glow-effect"
            className={`p-2 rounded-md text-sm font-medium text-white transition-colors ${
              isActive("/") ? "bg-white" : "hover:text-[#2D3047]"
            }`}
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive("/") ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
          <Link
            to="/skills"
            id="glow-effect"
            className={`p-2 rounded-md text-sm font-medium text-white transition-colors ${
              isActive("/skills") ? "bg-white" : "hover:text-[#2D3047]"
            }`}
            aria-label="Skills"
          >
            <svg
              fill={isActive("/skills") ? "rgb(0, 0, 0)" : "rgb(253, 253, 253)"}
              width="20"
              height="20"
              viewBox="0 0 256 256"
              stroke={
                isActive("/skills")
                  ? "rgb(255, 255, 255)"
                  : "rgb(255, 254, 254)"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M180.00244,232a12.0006,12.0006,0,0,1-12,12h-80a12,12,0,1,1,0-24h80A12.0006,12.0006,0,0,1,180.00244,232Zm40-128a92.48672,92.48672,0,0,1-36.97168,73.73438,7.81144,7.81144,0,0,0-3.02832,6.26757,20.02187,20.02187,0,0,1-20,19.99805h-64a20.02229,20.02229,0,0,1-20-20v-.22656a7.78529,7.78529,0,0,0-3.24512-6.20215,91.34714,91.34714,0,0,1-36.7539-73.05371C35.729,54.68945,76.00732,13.19727,125.7915,12.02539A92.00178,92.00178,0,0,1,220.00244,104Zm-24,0A68,68,0,0,0,126.356,36.01953c-36.79.86524-66.55567,31.53418-66.35254,68.36524a67.5326,67.5326,0,0,0,27.17773,54.00488l.001.001A32.14673,32.14673,0,0,1,99.76807,180h56.48632a31.84262,31.84262,0,0,1,12.40918-21.49023A67.47611,67.47611,0,0,0,196.00244,104ZM138.65771,57.19043a11.99962,11.99962,0,1,0-5.31054,23.4043A24.07582,24.07582,0,0,1,151.40771,98.6543a11.99962,11.99962,0,0,0,23.4043-5.31055A48.19142,48.19142,0,0,0,138.65771,57.19043Z" />
            </svg>
          </Link>
          <Link
            to="/project"
            id="glow-effect"
            className={`p-2 rounded-md text-sm font-medium text-white transition-colors ${
              isActive("/project") ? "bg-white" : "hover:text-[#2D3047]"
            }`}
            aria-label="Projects"
          >
            <svg
              fill={
                isActive("/project") ? "rgb(0, 0, 0)" : "rgb(253, 253, 253)"
              }
              width="20"
              height="20"
              viewBox="0 0 256 256"
              stroke={
                isActive("/project") ? "rgb(0, 0, 0)" : "rgb(255, 254, 254)"
              }
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.00781,68H172V56a20.02229,20.02229,0,0,0-20-20H104A20.02229,20.02229,0,0,0,84,56V68H40.00781a12.01343,12.01343,0,0,0-12,12V208a12.01343,12.01343,0,0,0,12,12h176a12.01343,12.01343,0,0,0,12-12V80A12.01343,12.01343,0,0,0,216.00781,68ZM92,56a12.01375,12.01375,0,0,1,12-12h48a12.01375,12.01375,0,0,1,12,12V68H92Zm72,20V212H92V76ZM36.00781,208V80a4.00458,4.00458,0,0,1,4-4H84V212H40.00781A4.00458,4.00458,0,0,1,36.00781,208Zm184,0a4.00458,4.00458,0,0,1-4,4H172V76h44.00781a4.00458,4.00458,0,0,1,4,4Z" />
            </svg>
          </Link>
          <Link
            to="/contact"
            id="glow-effect"
            className={`p-2 rounded-md text-sm font-medium text-white transition-colors ${
              isActive("/contact") ? "bg-white" : "hover:text-[#2D3047]"
            }`}
            aria-label="Contact"
          >
            <svg
              fill={isActive("/contact") ? "rgb(0, 0, 0)" : "rgb(255, 254, 254)"}
              width="20"
              height="20"
              viewBox="0 0 512 512"
              stroke={isActive("/contact") ? "rgb(0, 0, 0)" : "rgb(255, 254, 254)"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M472,48H40A24.028,24.028,0,0,0,16,72V440a24.028,24.028,0,0,0,24,24h88V405.178A20.01,20.01,0,0,1,138.284,387.7l91.979-51.123L200,260.919V200a56,56,0,0,1,112,0v60.919l-30.263,75.655L373.716,387.7h0A20.011,20.011,0,0,1,384,405.178V464h88a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,472,48Zm-8,384H416V405.178a52.027,52.027,0,0,0-26.738-45.451h0L321.915,322.3,344,267.081V200a88,88,0,0,0-176,0v67.081L190.085,322.3l-67.347,37.432A52.027,52.027,0,0,0,96,405.178V432H48V80H464Z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HeroComponent />} />
        <Route path="/skills" element={<SkillsComponent />} />
        <Route path="/project" element={<ProjectsComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;