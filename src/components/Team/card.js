import React from "react";
import amine from "../../assets/amine.svg";
import fouad from "../../assets/fouad.svg"
import facebook from "../../assets/facebook.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"

export default function card(props) {  //ki ndiro l contenu w YB3TOLI TSAWRHOM W NSGMO DESCRIPTION  npassi data bl props
    return (
        <div className=" w-[160px] md:w-[340px] h-[260px] md:h-[500px] bg-white rounded-[3px] flex flex-col  items-center border-2 border-akkar-brown-second">
       <div className="h-[60px] w-[60px] md:h-[160px] md:w-[160px] rounded-[50%] md:mt-[60px] mt-[30px] bg-white flex flex-row justify-center items-center border-[2px] md:border-[4px] border-l-akkar-orange border-b-akkar-orange border-r-white border-t-white">
        <div className=" h-[50px] w-[50px] md:h-[140px] md:w-[140px] rounded-[50%]">
            <img src={amine} className="w-[100%] h-[100%] rounded-[50%] object-cover"></img>
        </div>
       </div>
        
        <p className="md:text-2xl text-akkar-orange md:mt-[35px] font-medium text-center text-lg ">Amine Adjou</p>
        <p className=" text-sm text-center text-akkar-brown-second mt-[2px] md:mt-[20px] md:text-xl">1CS G08 Student Front-end web developer Jango expert & machine learning passionate</p>
          <div className=" flex flex-row  w-full md:h-[60px] justify-evenly items-center mt-[15px] md:mt-[40px]">
            <a href="facebook.com"><div className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px]"><img src={facebook} className="w-[100%] h-[100%] object-cover"></img></div></a>
            <a href="linkedin.com"><div className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px]"><img src={linkedin} className="w-[100%] h-[100%] object-cover"></img></div></a>
            <a href="github.com"><div className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px]"><img src={github} className="w-[100%] h-[100%] object-cover"></img></div></a>

          </div>
</div>


    );}