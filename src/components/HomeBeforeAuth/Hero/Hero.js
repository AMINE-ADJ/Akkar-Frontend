import React from "react";
import HeroPic from "../../../assets/homepage-picture.svg";
import { LoginFunction } from "../../SharedComponents/LoginFunction";

export default function Hero() {
  const loginFunction = LoginFunction();
  return (
    <section
      className="bg-akkar-white-creme w-full min-w-fit h-fit pb-32 md:mb-0  "
      id="hero"
    >
      <div className="flex md:flex-row flex-col-reverse items-center justify-between ">
        <div className="flex flex-col items-center md:items-start md:pl-28 pt-20 md:gap-16 gap-5 ">
          <div className="font-medium font-Inter text-akkar-black text-2xl text-center md:text-left md:text-5xl w-[500px] leading-tight ">
            Trouvez votre place de rêve avec AKKAR
          </div>
          <div className=" text-xl  text-center md:text-left md:text-3xl font-Inter text-akkar-gray font-normal px-16 md:px-0 md:w-[480px]">
          « Acheter de l’immobilier n’est pas seulement le meilleur moyen, le moyen le plus rapide, le moyen le plus sûr, mais également la seule façon de devenir riche »
          <p className="md:text-[27px] text-lg font-medium mt-[10px] ml-[100px] ">-Marshall Field-</p>
          </div>

          <button
            onClick={() => loginFunction()}
            className=" flex items-center gap-3 font-medium bg-akkar-orange text-white text-lg md:text-2xl font-Inter py-2 md:py-6 px-12 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
          >
            <ion-icon size="large" name="logo-google"></ion-icon>Se Connecter avec
            Google
          </button>
        </div>
        <div className="  md:w-[720px]">
          <img className=" md:h-[700px]  " src={HeroPic} />
        </div>
      </div>
    </section>
  );
}
