import React from "react";
import Contact from "./Contact";
export default function ContactSection(props) {
//   let  data={
//     number:"0667835649",
//     name:"Khelil Fouad",
//     mail:"www.fouadkhelil@gmail.com",
//     address:"Medea , elguelb elkbir",
// };
let data = props.InfoContact
const isWebScraping  = props.isWebScraping;
    return (
   

    <div className="w-full min-w-fit h-[450px] flex justify-center items-center">
             <Contact number={data.telephone} nom={data.nom} prenom={data.prenom} mail={data.email} adress={data.adresseannonceur} isWebScraping = {isWebScraping}></Contact>
             
    </div>
    
  );
}