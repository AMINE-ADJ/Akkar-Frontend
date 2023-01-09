import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

export default function PhotosSection(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="w-full min-w-fit h-[600px] pt-32 flex flex-col justify-center items-center">
      <p className="text-3xl font-medium text-left md:mr-[950px]">Photos</p>

      <Swiper
        className="  w-[600px] md:w-[1100px] h-[500px] cursor-grab"
        slidesPerView={isMobile ? 2 : 4}
      >
        {props.data.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-row justify-evenly items-center  w-[250px] h-[400px]"
          >
            {" "}
            <div className="w-[250px] h-[400px] rounded-[5px] bg-black">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[5px]"
                src={img}
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
