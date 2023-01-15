import React from "react";
import MessageTemplate from "./MessageTemplate";
export default function MessagesContainer(props){

    return(
        <div className=" md:w-[70%] lg:w-[50%] w-[80%] h-[400px]   border-[1.5px] border-[#F2976B] flex flex-col  items-center">
            <div className="w-full h-[90px]     md:h-[80px] bg-akkar-orange-second flex flex-col gap-y-[30px] sm:gap-y-[20px] lg:gap-y-[15px] p-3">
                <p className="text-left text-sm md:text-lg text-akkar-orange font-medium">title{props.title}</p>
                <div className="flex flex-row  gap-x-[30px] w-[200px] text-sm text-[#F2976B]">
                    <p>ID {props.id}</p>
                    <p>date{props.date}</p>
                </div>
            </div>


            <div className="flex flex-col gap-y-[20px]  overflow-y-scroll  items-center w-[95%] h-[320px]">

              {/** here is the container of the messages */}
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>
                <MessageTemplate customer="Djouima Yanis" time="14/01/2023" telephone="0557300912" email="ka_djouima@esi.dz"/>



               
              </div>
        </div>
    );
}