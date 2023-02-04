import React from "react";
export default function Description(props) {
  return (

    <div className="w-full min-w-fit h-fit flex flex-col items-center pt-10">
    <div className=" w-[500px] md:w-[1000px] h-fit border-2 border-akkar-brown-second p-5 flex flex-col rounded-[4px]">
        <p className="text-left text-2xl text-black font-medium p-2">Description</p>
        <p className="text-left text-[#6D737A] text-xl md:text-2xl font-normal">{props.description}</p>
</div>
    </div>
    
  );
}