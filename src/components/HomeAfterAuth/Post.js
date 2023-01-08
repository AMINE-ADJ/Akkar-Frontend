import React from "react";
import localisation from "../../assets/Localisation.svg";
import clock from "../../assets/clock.svg";
import send from "../../assets/Send.svg";
import arrows from "../../assets/Arrows.svg";
export default function Post(props) {
    return(
           <div className="flex flex-col justify-between items-center w-[420px] h-[510px] rounded-[7px] border-2 border-[#E7E9EB]">
                <div className="w-[420px] h-[270px] rounded-[7px] ">
                    <img src={props.img} className="w-[100%] h-[100%] object-cover rounded-t-[7px] mt-[-2px]"></img>
                </div>

                     <p className="text-left text-black font-medium text-[25px] m-[20px] ">{props.title}</p>
                    <div className="flex flex-row justify-between p-5 items-center w-[420px] h-[50px] mt-[-10px]">
                              <div className="flex flex-row justify-center items-center gap-[10px] ">
                                              <img src={localisation} className="w-[32px] h-[32px]"></img>
                                              <p className="text-lg text-[#6D737A]"> {props.localisation}</p>
                              </div>

                              <div className="flex flex-row justify-center items-center gap-[10px] ">
                                              <img src={arrows} className="w-[32px] h-[32px]"></img>
                                              <p className="text-lg text-[#6D737A]"> {props.area}</p>
                              </div>

                              <div className="flex flex-row justify-center items-center gap-[10px]">
                                              <img src={clock} className="w-[32px] h-[32px]"></img>
                                              <p className="text-lg text-[#6D737A]"> {props.time}</p>
                              </div>
                    </div>
                  
                            <div className="w-[400px] h-[2px] bg-[#E7E9EB] mb-[-20px]" >

                            </div>
               
                    <div className="flex flex-row justify-between p-5 items-center w-[420px] md:mt-[10px]">
                        <p className="text-xl text-akkar-orange font-medium ">{props.price}</p>
                        <button>
                            <div className="flex flex-row justify-center bg-akkar-orange-second w-[40px] h-[40px]">
                                  <img src={send}></img>
                               </div>
                        </button>
                               
                    </div>
            
           </div>
          );
    }