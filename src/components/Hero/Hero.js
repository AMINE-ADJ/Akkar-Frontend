import React from "react";
import { Link } from "react-router-dom";
import HeroPic from "../../assets/homepage-picture.svg";
export default function Hero() {
  return (
    <section className="bg-akkar-white-creme w-full min-w-fit h-screen mb-32 md:mb-0  " id="hero">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="flex flex-col items-center md:items-start md:pl-28 pt-20 md:gap-16 gap-5 ">
          <div className="font-medium font-Inter text-akkar-black text-xl text-center md:text-left md:text-5xl w-[500px] leading-tight ">
            Find your place of dream with AKKAR
          </div>
          <div className=" text-base  text-center md:text-left md:text-3xl font-Inter text-akkar-gray font-normal px-16 md:px-0 md:w-[480px]">
            Buying real estate is not only the best way, the quickest way, the
            safest way, but the only way to become wealthy
          </div>
          <Link to="/">
            <button
              className=" flex items-center gap-3 font-medium bg-akkar-orange text-white text-lg md:text-2xl font-Inter py-2 md:py-6 px-12 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
            >
              <ion-icon size="large" name="logo-google"></ion-icon> Login with
              Google
            </button>
          </Link>
        </div>
        <img className=" md:h-[650px]" src={HeroPic} />
      </div>
    </section>
  );
}
