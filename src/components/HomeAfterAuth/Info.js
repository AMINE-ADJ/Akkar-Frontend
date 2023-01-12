import React from "react";
export default function Info(props) {
  return (
    <div className=" w-[500px]  md:w-[500px] md:h-[430px] border-[1px] border-akkar-orange p-5 flex flex-col items-center  rounded-[3px]">
      <p className="md:mr-[310px] mr-[310px] text-left text-2xl text-black font-medium">
        Informations
      </p>
      <div className="flex flex-row items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[150px] p-6 border-b-[2px] border-b-[#F6EDE8]  ">
        <p className="text-black text-lg font-normal text-left ">ID</p>
        <p className="text-black text-lg font-normal text-left ">{props.id}</p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[130px] p-6 border-b-[2px] border-b-[#F6EDE8]">
        <p className="text-black text-lg font-normal text-left ">Date</p>
        <p className="text-black text-lg font-normal text-left ">
          {props.date}
        </p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[130px] p-6 border-b-[2px] border-b-[#F6EDE8]">
        <p className="text-black text-lg font-normal text-left ">Price</p>
        <p className="text-black text-lg font-normal text-left ">
          {props.price} DA
        </p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[135px] p-6 border-b-[2px] border-b-[#F6EDE8]">
        <p className="text-black text-lg font-normal text-left ">Area</p>
        <p className="text-black text-lg font-normal text-left ">
          {props.area}m^2
        </p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[100px] p-6 border-b-[2px] border-b-[#F6EDE8]">
        <p className="text-black text-lg font-normal text-left ">Category</p>
        <p className="text-black text-lg font-normal text-left ">{props.cat}</p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[140px] p-6 border-b-[2px] border-b-[#F6EDE8]">
        <p className="text-black text-lg font-normal text-left ">Type</p>
        <p className="text-black text-lg font-normal text-left ">
          {props.type}
        </p>
      </div>
      <div className="flex flex-row  items-center w-[500px]  md:w-[500px] h-[20px] gap-x-[80px] p-6 ">
        <p className="text-black text-lg font-normal text-left ">
          Localisation
        </p>
        <p className="text-black text-lg font-normal text-left ">
          {props.localisation.commune},{props.localisation.wilaya}
        </p>
      </div>
    </div>
  );
}
