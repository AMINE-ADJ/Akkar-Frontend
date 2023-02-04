import React, { useState } from "react";
import search from "../../../../assets/search.svg";
import check from "../../../../assets/check.svg";
import { Link } from "react-router-dom";
export default function SearchSection() {
  const [inpuText, setinputText] = useState("");
  // console.log(inpuText);
  return (
    <section className="w-full h-fit pt-[85px] md:pt-8" id="hero2">
      <form className="w-full h-[250px] md:h-[400px] bg-wood-bg bg-cover ">
        <div className="w-full h-[250px] md:h-[400px]  bg-filter flex flex-col justify-around items-center">
          <h1 className="text-center text-white text-2xl md:text-5xl md:mt-[50px]">
            Commencez à chercher des biens immobiliers
          </h1>
          <div
            id="searchbar"
            className=" w-[500px] md:w-[980px] h-[60px] md:h-[80px] flex flex-row justify-center items-center md:mt-[20px]"
          >
            <div className=" w-[50px] md:w-[100px] h-[60px] md:h-[80px] bg-white flex justify-center items-center rounded-l-[6px]">
              <img src={search} className="w-[50%] h-[50%]"></img>
            </div>
            <input
            maxLength={45}
              className="w-[400px] md:w-[780px]  h-[60px] md:h-[80px] bg-white text-2xl outline-none text-[#BE9E8C]"
              placeholder="Chercher un bien immobilier"
              onChange={(txt) => {
                setinputText(txt.target.value)}}
              onKeyDown={(e)=>{
                if(e.keyCode==13){ document.getElementById("clickable").click()}
              }
              }
            ></input>
          {inpuText.length>0 ? <Link  to={`/authenticated/search/${inpuText}`}>
              <button id="clickable"  >
                <div className=" w-[50px] md:w-[100px]  h-[60px] md:h-[80px] bg-akkar-orange flex justify-center items-center rounded-r-[6px] text-center text-xl md:text-2xl text-white">
                  GO
                </div>
              </button>
            </Link>  :  <button id="clickable"  >
                <div className=" w-[50px] md:w-[100px]  h-[60px] md:h-[80px] bg-akkar-orange flex justify-center items-center rounded-r-[6px] text-center text-xl md:text-2xl text-white">
                  GO
                </div>
              </button>}  
           
          </div>

          <div
            id="checkboxes-container"
            className="flex flex-row justify-start gap-x-12 w-[500px] md:w-[980px] ml-[60px] mb-[70px]"
          ></div>
        </div>
      </form>
    </section>
  );
}
