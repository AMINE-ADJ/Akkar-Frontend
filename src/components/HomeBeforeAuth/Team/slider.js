import React , { useRef, useState } from "react";
import amine from "../../../assets/amine.svg";
import fouad from "../../../assets/fouad.svg"
import utilisateur from "../../../assets/utilisateur.png"
import yanis from "../../../assets/Yanis.jpeg"
import Card from "./card.js"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import "./styles.css";
import { useMediaQuery } from "react-responsive";
export default function Slider() {
 
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
<div >

<Swiper navigation={true} modules={[Navigation]} className=" w-[500px] h-[400px]  sm:w-[700px] sm:h-[500px] md:w-[1300px] md:h-[550px] mt-10 sm:mt-0 " slidesPerView={isMobile ? 1 : 2}>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Card img={amine} name="Amine ADJOU" description="Etudiant 1CS G08,développeur web Front-end " ></Card>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Card img={yanis} name="Yanis DJOUIMA" description="Etudiant 1CS G08,développeur web Front-end"></Card>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Card img={fouad} name="Fouad KHELIL" description="Etudiant 1CS G08,développeur web Back-end et UI/UX designer"></Card>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center"><Card img={utilisateur} name="Abdelkhalek BERAOUD" description="Etudiant 1CS G08,développeur web Back-end"></Card></SwiperSlide>
      </Swiper>

      </div>


  );
}
