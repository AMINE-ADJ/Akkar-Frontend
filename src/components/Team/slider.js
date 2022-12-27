import React , { useRef, useState } from "react";

import Card from "./card.js"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import "./styles.css";
export default function slider() {
  return (
<div >

<Swiper navigation={true} modules={[Navigation]} className=" w-[500px] h-[400px]  sm:w-[700px] sm:h-[500px] md:w-[1300px] md:h-[550px] ">
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Card></Card>
        <Card></Card>
        <Card></Card>
       
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center"><Card></Card></SwiperSlide>
       
        
      </Swiper>

      </div>


  );
}
