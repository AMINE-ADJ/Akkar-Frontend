import React, { useState } from "react";
import localisation from "../../../assets/Localisation.svg";
import clock from "../../../assets/clock.svg";
import send from "../../../assets/Send.svg";
import arrows from "../../../assets/Arrows.svg";
import MessageForm from "../Messages Form/MessageForm";
import { Link } from "react-router-dom";
export default function Post(props) {
  const [sendMessage, setSendMessage] = useState(false);
  return (

    <div className=" text-[16px] sm:text-[18px] md:text-[19px] xl:text-[21px] items-center m-6 flex flex-col justify-between  w-[82%] md:w-[80%] xl:w-[80%] h-[370px] rounded-[7px] border-2 border-[#E7E9EB] cursor-pointer">
      <Link className="w-full" to={`/authenticated/detailes/${props.Postid}`}>
        <div className=" flex justify-center w-[100.5%] h-[170px] rounded-[7px] ">
          <img
            src={props.img}
            className="w-[100%] h-[100%] object-cover rounded-t-[7px] mt-[-2px]"
          ></img>
        </div>

        <div className="h-[90px] w-full">
          <p className="text-left text-black font-medium   m-[10px]  ">
            {props.title}
          </p>
        </div>

        <div className=" text-[12px] sm:text-[13px] md:text-[12px] xl:text-[17px] text-[#6D737A] flex flex-row justify-around   items-center w-full h-[50px] mt-[-10px]">
          <div className=" flex flex-row justify-center items-center gap-[2px] ">
            <img
              src={localisation}
              className="w-[15px] xl:w-[19px] xl:h-[19px] md:w-[17px] md:h-[17px] h-[15px]"
            ></img>
            <p> {props.localisation}</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-[2px] ">
            <img
              src={arrows}
              className="w-[15px] xl:w-[19px] xl:h-[19px] md:w-[17px] md:h-[17px] h-[15px]"
            ></img>
            <p> {props.area}</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-[0px]">
            <img
              src={clock}
              className="w-[17px] md:w-[19px] md:h-[19px] h-[17px]"
            ></img>
            <p> {props.time}</p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#E7E9EB] mb-[-20px]"></div>
      </Link>

      <div className="flex flex-row flex-wrap justify-between p-5 items-center w-full md:mt-[10px]">
        <p className="md:text-lg text-[15px] text-left text-akkar-orange font-medium ">
          {props.price}
          DA
        </p>

        <>
          {(!props.isWebScraping && !props.isUserAnnonce) && (
            <button onClick={() => setSendMessage(true)}>
              <div className="flex flex-row justify-center bg-akkar-orange-second w-[30px] h-[30px]">
                <img src={send}></img>
              </div>
            </button>
          )}
        </>
      </div>
      {sendMessage ? (
        <MessageForm PostId={props.Postid} set={setSendMessage}></MessageForm>
      ) : null}
    </div>
  );
}
