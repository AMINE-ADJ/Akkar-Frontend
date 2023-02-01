import React from "react";
import user from "../../../assets/user.svg"

export default function MessageTemplate(props){

    return(
        <div key={props.messagekey} className="w-[95%] mt-5 p-3 h-fit border-l-[3px] flex flex-col gap-y-[10px] border-akkar-orange">
              <div className="flex flex-row items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[40px] ">
                <div className="flex flex-row items-center gap-x-[5px] md:gap-x-[20px]">
                <img src={user} className="w-[25px] h-[25px]"></img>
                <p className="text-center text-[14px] md:text-[17px] font-medium">{props.customer}</p>
                </div>
                
                <p className="text-center text-[14px] md:text-[17px] text-[#6D737A]"> {props.time}</p>

             </div>

                 <p className="text-left text-[14px] md:text-[17px] text-[#6D737A]">{props.offre} </p>
 
                <div className="flex flex-row items-center gap-x-[20px] md:gap-x-[40px] ">
                <div className="flex flex-row items-center bg-akkar-orange-second text-[11px] md:text-[13px] text-akkar-orange w-fit p-3 h-[20px]">
                        {props.telephone}
                </div>
                <div className="flex flex-row items-center bg-akkar-orange-second text-[11px] md:text-[13px] text-akkar-orange w-fit p-3 h-[20px]">
                        {props.email}
                </div>

             </div>

              </div>
              
    );
}