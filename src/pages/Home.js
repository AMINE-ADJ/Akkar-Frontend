import React from "react";
import { Link } from "react-router-dom";
import HomePic from "../assets/homepage-picture.svg";
export default function Home() {
  return (
    <div className="bg-akkar-white-creme w-full ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col pl-28 pt-20 gap-16 ">
          <div className="font-medium font-Inter text-akkar-black text-5xl w-[500px] leading-tight ">
            Find your place of dream with AKKAR
          </div>
          <div className=" text-3xl font-Inter text-akkar-gray font-normal w-[480px]">
            Buying real estate is not only the best way, the quickest way, the
            safest way, but the only way to become wealthy
          </div>
          <Link to="/login">
            <button
              className=" flex items-center gap-3 font-medium bg-akkar-orange text-white text-2xl font-Inter py-6 px-20 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
            >
              <ion-icon size="large" name="logo-google"></ion-icon> Login with
              Google
            </button>
          </Link>
        </div>
        <img className=" h-[650px]" src={HomePic} />
      </div>
    </div>
  );
}
