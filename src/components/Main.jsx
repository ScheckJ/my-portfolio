import React from "react";
import { TypeAnimation } from "react-type-animation";
import laptop from "../assets/laptop.jpg"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src={laptop}
        alt=""
      />
      <div className="w-full h-screen absolute top-40 left-[15%] ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:txt-5xl text-4xl font-bold text-black-800">Scheck Jah</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-black-800">
            
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coding Bootcamp Graduate",
                3000,
                "Tech-Enthusiast",
                3000,
              ]}
              wrapper="div"
              speed={60}
              style={{ fontSize: "1em", paddingLeft: '10px'  }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
