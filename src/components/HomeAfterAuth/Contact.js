import React from "react";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import adress from "../../assets/adress.svg";
import message from "../../assets/Send.svg";
import { Link } from "react-router-dom";
export default function Contact(props) {
  // const isWebScraping = false;
  const isWebScraping = props.isWebScraping;
  return (
    <div className=" w-[400px] md:w-[1000px] h-[400px] flex flex-col md:items-start items-center    gap-y-[50px] p-5">
      <p className="  text-left text-3xl md:text-4xl font-medium">Contact</p>

      <div className="w-[100%] h-[40px] flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-[400px]">
          <div className="flex flex-row w-fit  justify-center h-[50px] items-center gap-x-[45px]">
            <div className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]">
              <img className="w-[100%] h-[100%] object-cover" src={phone}></img>
            </div>
            <div className=" w-[150px] bg-akkar-orange-second text-lg md:text-xl text-akkar-orange  text-center">
              {props.number}
            </div>
          </div>
        </div>
        <>
          {!isWebScraping && (
            <>
              <div className="md:w-[500px] h-[40px]  md:h-[50px] md:border-l-[3px] md:border-l-[#ECCDCD]">
                <div className="flex flex-row w-[350px] h-[50px] items-center ml-[125px]  md:ml-[50px]  ">
                  <div className="md:w-[40px] md:h-[30px] w-[30px] h-[20px]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={mail}
                    ></img>
                  </div>
                  <div className=" w-[320px]  text-lg md:text-xl text-[#5F5551]  text-center">
                    {props.mail}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
      <>
        {!isWebScraping && (
          <>
            <div className="w-[100%] h-[40px] flex flex-col md:flex-row items-center juustify-center md:justify-between">
              <div className="md:w-[400px]">
                <div className="flex flex-row w-[350px]  md:ml-[0px] ml-[125px] md:w-[300px] h-[50px] items-center gap-x-[10px]">
                  <p className="text-akkar-orange text-lg md:text-xl text-left font-medium">
                    Name of the seller :
                  </p>
                  <p className="text-[#5F5551] text-lg md:text-xl font-medium text-left">
                    {props.nom} {props.prenom}
                  </p>
                </div>
              </div>

              <div className="md:w-[500px] h-[40px]  md:h-[50px] md:border-l-[3px] md:border-l-[#ECCDCD]">
                <div className="flex flex-row w-[350px] h-[50px]  ml-[125px] items-center justify-between  md:ml-[50px]  ">
                  <div className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={adress}
                    ></img>
                  </div>
                  <div className=" w-[320px] text-lg md:text-xl text-[#5F5551]  text-left mr-[-35px] ">
                    {props.adress}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-96  items-baseline">
            <button className="cursor-pointer">
              <div className="md:mt-[0px] mt-[30px]  w-[250px] h-[40px] md:h-[60px] bg-akkar-orange-second flex flex-row items-center justify-between p-[20px]">
                <p className="text-left text-sm md:text-lg text-akkar-orange">
                  Contact via the app{" "}
                </p>
                <img
                  className="md:w-[45px] md:h-[45px] w-[35px] h-[35px]"
                  src={message}
                ></img>
              </div>
            </button>
            
            </div>
           
           
          </>
        )}
      </>
    </div>
  );
}
