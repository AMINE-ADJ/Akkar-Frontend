import React from "react";
import Slider from "./slider.js"
export default function Team() {
  return (
    <section
      className=" w-full h-[900px] bg-white flex flex-col items-center justify-center"
      id="team"
    >
      <div className="flex flex-col items-center gap-y-4 md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-semibold md:mb-5 text-akkar-black">Meet our team</p>
      <div className="  mb-[20px] w-[200px] md:w-[250px] h-[0px] opacity-0.5 bg-akkar-orange shadow-akkar-shadow "></div></div>
      <p className="text-center text-sm md:text-xl font-light text-akkar-black  text-center md:mb-16">This website application made with such great team that the creativity 
is his priority 
 </p>

        <Slider></Slider>
    </section>
  );
}
