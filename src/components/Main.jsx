import React from "react";
import { TypeAnimation } from "react-type-animation";
import laptop from "../assets/laptop.jpg";

const Main = () => {
  return (
    <div id="main" className="relative">
      <img className="w-full h-screen object-cover" src={laptop} alt="laptop" />
      <div className="w-full h-screen absolute top-40">
        <div className="max-w-[600px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center pl-4 pr-4"> {/* Adjusted padding for smaller screens */}
          <h1 className="sm:text-5xl text-3xl font-bold text-white"> {/* Reduced font size for small screens */}
            Scheck Jah
          </h1>
          <h2 className="flex sm:text-3xl text-xl pt-4 text-white whitespace-nowrap overflow-hidden"> {/* Adjusted text size and added overflow handling */}
            <TypeAnimation
              sequence={[
                "Web Developer",
                3000,
                "Coding Bootcamp Graduate",
                3000,
                "Tech-Enthusiast",
                3000,
              ]}
              wrapper="div"
              speed={60}
              style={{
                fontSize: "inherit", // Ensures it inherits the size from the parent
                paddingLeft: "15px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
