import React from "react";
import Info from "./Info";
import map from "../../assets/map.svg"
let data={
    id:"123697",
    date:"08/12/2023",
    price:"500000",
    area:"200",
    cat:"sell",
    type:"house",
    localisation:"medea , elguelb elkbir "
}
export default function InfosSection() {
  return (

    <div className="w-full min-w-fit h[400px] md:h-[620px] flex flex-col md:flex-row items-center gap-y-[20px] md:gap-x-[50px] pt-5  justify-center">
    <Info id={data.id} data={data.date} price={data.price} area={data.area} cat={data.cat} type={data.type} localisation={data.localisation}></Info>
    <div className=" w-[500px] md:w-[500px] h-[430px] rounded-2">
        <img  className="w-[100%] h-[100%] object-cover" src={map}></img>
    </div>
    </div>
    
  );
}