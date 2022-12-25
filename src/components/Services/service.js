import React from "react";

export default function Services(props) {
    return(
        <div className="  p-5 w-[270px] h-[350px] border-2 border-akkar-orange md:p-8 bg-white  xl:w-[400px] md:w-[30%] xl:h-[500px] md:h-[90%] rounded-[8px]">
        <img src={props.img}></img>
        <h3 className="font-Inter text-akkar-orange text-base  md:text-xl md:pt-8 pt-4 text-center  font-akkar-bold">{props.title}</h3>
        <p className="font-Inter text-akkar-orange-third text-[12px] font-light md:text-lg text-center">{props.description}</p>
        </div>
          );
    }