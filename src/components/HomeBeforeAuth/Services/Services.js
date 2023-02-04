import React from "react";
import Service from "./service.js"
import img1 from "../../../assets/img_1.svg"
import img2 from "../../../assets/img_2.svg"
import img3 from "../../../assets/img_3.svg"
let obj={
  title:["Chercher un bien immobilier","Publier vos propre annonces","Contacter l'autre coté"],
  des:["Profitez d'une expérience de recherche ultime trouvant votre meilleur offre pour le future","Vous voulez rentabiliser vos biens immobiliers? vous pouvez facilement les publier et les rendre accessibles par tout le monde !","Vous êtes vendeur ou client? vous pouvez toujours contacter l'autre coté en envoyant des offres à travers notre service de méssagerie"],
}

export default function Services() {
  return (
    <section
      className=" w-full h-[1700px] md:h-[900px] pt-32 pb-10 "
      id="services"
    >
      <div className="flex flex-col items-center gap-y-4 md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-semibold md:mb-5 text-akkar-black">Nos Services</p>
      <div className="  mb-[20px] w-[200px] md:w-[250px] h-[0px] opacity-0.5 bg-akkar-orange shadow-akkar-shadow "></div></div>
      
      <p className="text-sm md:text-xl font-light text-akkar-black  text-center md:mb-16">Akkar est la meilleure place pour chercher votre immobilier de rêve</p>
      <div className="  flex flex-col items-center justify-evenly  h-full md:h-[500px]  md:flex md:flex-row md:justify-evenly">
      <Service img={img1} title={obj.title[0]} description={obj.des[0]}></Service>
      <Service img={img2} title={obj.title[1]} description={obj.des[1]}></Service>
      <Service img={img3} title={obj.title[2]} description={obj.des[2]}></Service>
      </div>
      
    </section>
  );
}
