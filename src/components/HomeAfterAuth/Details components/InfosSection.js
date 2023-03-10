import React, { useState,useEffect } from "react";
import Info from "./Info";
import Map from "./MapDetails";
export default function InfosSection(props) {
  
  let data = props.InfoAnnonce;
  const isWebScraping = props.isWebScraping;
  let  position = [
    parseFloat(data.my_localisation.latitude),
    parseFloat(data.my_localisation.longitude),
  ];
   const [webScrapingCoords,setWebScrapingCoords]=useState(null);

   var url = "https://geocode.maps.co/search?q="+`${data.my_localisation.wilaya}`;

   useEffect(() => {
    if(isWebScraping){
      fetch(url).then(response => response.json())
      .then(reply =>{
       setWebScrapingCoords([parseFloat(reply[0].lat),parseFloat(reply[0].lon)]);

      } )
      .catch(err => console.log(err))  
     }
  }, []);


  

  return (
    <div className="w-full min-w-fit h[400px] md:h-[620px] flex flex-col md:flex-row items-center gap-y-[20px] md:gap-x-[50px] pt-5  justify-center">
      <Info
        id={data.id}
        date={data.date}
        price={data.prix}
        area={data.surface}
        cat={data.categorie}
        type={data.type}
        localisation={data.my_localisation}
      ></Info>

      <>
        {!isWebScraping && (
          <div className=" w-[500px] md:w-[500px] h-[430px] rounded-2">
            <Map position = { position } />
          </div>
        )}
         {isWebScraping && webScrapingCoords!=null && (
          <div className=" w-[500px] md:w-[500px] h-[430px] rounded-2">
            <Map position = { webScrapingCoords } />
          </div>
        )}
      </>
    </div>
  );
}
