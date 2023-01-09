import React from "react";
import Contact from "./Contact";
export default function ContactSection() {
  let  data={
    number:"0667835649",
    name:"Khelil Fouad",
    mail:"www.fouadkhelil@gmail.com",
    address:"Medea , elguelb elkbir",
};
    return (
   

    <div className="w-full min-w-fit h-[450px] flex justify-center items-center">
             <Contact number={data.number} name={data.name} mail={data.mail} adress={data.address}></Contact>
    </div>
    
  );
}