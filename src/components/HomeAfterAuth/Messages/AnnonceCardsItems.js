import React from "react";
import MessagesContainer from "./MessagesContainer";

export default function AnnonceCardsItems({ CurrentAnnonces }) {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      {CurrentAnnonces &&
        CurrentAnnonces.map((Annonce) => {
          return (
            <div className="w-full flex justify-center" key={Annonce.id}>
             <MessagesContainer id={Annonce.id} title={Annonce.titre} date={Annonce.date} messagesListe = {Annonce.message_set}/>
            </div>
          );
        })}
    </div>
  );
}