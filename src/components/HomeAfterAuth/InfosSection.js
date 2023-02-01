import React, {useState} from "react";
import Info from "./Info";
import Map from "./MapDetails"
export default function InfosSection(props) {
  //   let data={
  //     id:"123697",
  //     date:"08/12/2023",
  //     price:"500000",
  //     area:"200",
  //     cat:"sell",
  //     type:"house",
  //     localisation:"medea , elguelb elkbir "
  // }
  const data = props.InfoAnnonce;
  const position=[36.7762, 3.05997];

  return (
    <div className="w-full min-w-fit h[400px] md:h-[620px] flex flex-col md:flex-row items-center gap-y-[20px] md:gap-x-[50px] pt-5  justify-center">
      <Info
        id={data.id}
        date={data.date}
        price={data.prix}
        area={data.surface}
        cat={data.categorie}
        type={data.type}
        localisation={data.my_localisation}
      ></Info>
      <div className=" w-[500px] md:w-[500px] h-[430px] rounded-2">
      <Map position={position}/>
      </div>
    </div>
  );
  
}

