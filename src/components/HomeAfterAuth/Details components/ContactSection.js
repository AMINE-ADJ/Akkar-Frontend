import {React ,useState} from "react";
import Contact from "./Contact";
export default function ContactSection(props) {

let data = props.InfoContact
const isWebScraping  = props.isWebScraping;
    return (
   
<div>
<div  className="w-full min-w-fit h-[450px] flex justify-center items-center">
             <Contact number={data.telephone} nom={data.nom} prenom={data.prenom} mail={data.email} adress={data.adresseannonceur} isWebScraping = {isWebScraping}></Contact>
            
    </div>
        
</div>
   
    
  );
}