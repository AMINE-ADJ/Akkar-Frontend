import React from "react";
import MessageTemplate from "./MessageTemplate";
export default function MessagesContainer(props) {

  return (
    <div className=" md:w-[70%] lg:w-[50%] w-[80%] h-[400px]   border-[1.5px] border-[#F2976B] flex flex-col  items-center">
      <div className="w-full h-[90px]     md:h-[80px] bg-akkar-orange-second flex flex-col gap-y-[30px] sm:gap-y-[20px] lg:gap-y-[15px] p-3">
        <p className="text-left text-sm md:text-lg text-akkar-orange font-medium">
          {props.title}
        </p>
        <div className="flex flex-row  gap-x-[30px] w-[200px] text-sm text-[#F2976B]">
          <p> {props.id}</p>
          <p>{props.date}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-[20px]  overflow-y-scroll  items-center w-[95%] h-[320px]">
        {props.messagesListe &&
          !(props.messagesListe.length == 0) &&
          props.messagesListe.map((message, index) => {
            return (
              <MessageTemplate
                messagekey={index}
                customer={message.nom}
                time={message.date.slice(0, 10)}
                telephone={message.telephone}
                email={message.email}
                offre={message.offre}
              />
            );
          })}
        {(props.messagesListe.length == 0) && <div className="w-full h-full bg-akkar-white-creme font-Inter flex justify-center items-center"> Vouz n'avez pas encore recu des messages pour cette annonce! </div>}
      </div>
    </div>
  );
}
