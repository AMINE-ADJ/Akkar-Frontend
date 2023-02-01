import React, { useState } from "react";
import localisation from "../../assets/Localisation.svg";
import clock from "../../assets/clock.svg";
import send from "../../assets/Send.svg";
import arrows from "../../assets/Arrows.svg";
import MessageForm from "./MessageForm";

import { Link } from "react-router-dom";
export default function Post(props) {
  const [sendMessage, setSendMessage] = useState(false);
  return (
    //
    <div className="text-[18px] md:text-[20px] xl:text-[23px] m-10 flex flex-col justify-between  w-[75%] md:w-[70%] xl:w-[78%] h-[370px] rounded-[7px] border-2 border-[#E7E9EB] cursor-pointer">
      <Link to={`/authenticated/detailes/${props.Postid}`}>
        <div className="w-[100.5%] h-[170px] rounded-[7px] ">
          <img
            src={props.img}
            className="w-[100%] h-[100%] object-cover rounded-t-[7px] mt-[-2px]"
          ></img>
        </div>
      <div className="h-[70px]">
      <p className="text-left text-black font-medium   m-[10px]  ">
          {props.title}
        </p>
      </div>
       
        <div className="flex flex-row justify-around   items-center w-full h-[50px] mt-[-10px]">
          <div className=" flex flex-row justify-center items-center gap-[2px] ">
            <img src={localisation} className="w-[17px] md:w-[19px] md:h-[19px] h-[17px]"></img>
            <p className="text-[15px] md:text-[17px] text-[#6D737A]"> {props.localisation}</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-[2px] ">
            <img src={arrows} className="w-[17px] md:w-[19px] md:h-[19px] h-[17px]"></img>
            <p className="text-[15px] md:text-[17px] text-[#6D737A]"> {props.area}</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-[0px]">
            <img src={clock} className="w-[17px] md:w-[19px] md:h-[19px] h-[17px]"></img>
            <p className="text-sm text-[#6D737A]"> {props.time}</p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#E7E9EB] mb-[-20px]"></div>
      </Link>

      <div className="flex flex-row flex-wrap justify-between p-5 items-center w-full md:mt-[10px]">
        <p className="text-lg text-left text-akkar-orange font-medium ">{props.price}</p>

        <>
          {!props.isWebScraping && (
            <button onClick={() => setSendMessage(true)}>
              <div className="flex flex-row justify-center bg-akkar-orange-second w-[30px] h-[30px]">
                <img src={send}></img>
              </div>
            </button>
          )}
        </>
      </div>
      {sendMessage ? <MessageForm set={setSendMessage}></MessageForm> : null}
    </div>
    // </Link>
  );
}
