import React from "react";
import search from "../../assets/search.svg"
import check from "../../assets/check.svg";
export default function SearchSection() {
  return (
    <section className="w-full h-fit mt-[90px] bg-akkar-black" id="hero2">
 <div className="w-full h-[250px] md:h-[400px] bg-wood-bg bg-cover ">
            <div className="w-full h-[250px] md:h-[400px]  bg-filter flex flex-col justify-around items-center">
                <h1 className="text-center text-white text-3xl md:text-5xl md:mt-[50px]">Start searching a real estate</h1>
                <div id="searchbar" className=" w-[500px] md:w-[980px] h-[60px] md:h-[80px] flex flex-row justify-center items-center md:mt-[20px]">
                    <div className=" w-[50px] md:w-[100px] h-[60px] md:h-[80px] bg-white flex justify-center items-center rounded-l-[6px]"><img src={search} className="w-[50%] h-[50%]"></img></div>
                      <input className="w-[400px] md:w-[780px]  h-[60px] md:h-[80px] bg-white text-2xl outline-none text-[#BE9E8C]" placeholder="Search a real estate"> 
                     </input>
                     <button>
                     <div className=" w-[50px] md:w-[100px]  h-[60px] md:h-[80px] bg-akkar-orange flex justify-center items-center rounded-r-[6px] text-center text-xl md:text-2xl text-white">GO</div>

                     </button>
                    
                </div>


                
   <div id="checkboxes-container" className="flex flex-row justify-start gap-x-12 w-[500px] md:w-[980px] ml-[60px] mb-[70px]">

           <div className="flex flex-row  justify-center items-center">
                <div className="flex felx-row justify-center items-center">
                    <input type={"checkbox"} className=" w-[17px] h-[17px] md:w-[20px] md:h-[20px] appearance-none border-2 rounded-[2px] relative check-box cursor-pointer z-10"></input>
                       <img src={check} className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] absolute opacity-0 check"></img>

                    </div>
                    <p className="text-sm md:text-lg text-white font-normal ml-[9px]">From Akkar</p>
                </div>

                <div className="flex flex-row  justify-center items-center">
                <div className="flex felx-row justify-center items-center">
                    <input type={"checkbox"} className=" w-[17px] h-[17px] md:w-[20px] md:h-[20px] appearance-none border-2 rounded-[2px] relative check-box cursor-pointer z-10"></input>
                       <img src={check} className=" w-[15px] h-[15px] md:w-[17px] md:h-[17px] absolute opacity-0 check"></img>

                    </div>
                    <p className="text-sm md:text-lg text-white font-normal ml-[9px]">From another sites</p>
                </div>

   </div>
                
                   

                    
            </div>
            </div>
           

    </section>
  );
}
