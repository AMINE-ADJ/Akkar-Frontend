import React, { useState,useEffect } from "react";
import Info from "./Info";
import Map from "./MapDetails";
export default function InfosSection(props) {
  //   let data={
  //     id:"123697",
  //     date:"08/12/2023",
  //     price:"500000",
  //     area:"200",
  //     cat:"sell",
  //     type:"house",
  //     localisation:"medea , elguelb elkbir "
  // }
  let data = props.InfoAnnonce;
  const isWebScraping = props.isWebScraping;
  console.log(isWebScraping);
  console.log(data);
  let  position = [
    parseFloat(data.my_localisation.latitude),
    parseFloat(data.my_localisation.longitude),
  ];
  console.log(position);
   const [webScrapingCoords,setWebScrapingCoords]=useState(null);

   var url = "https://geocode.maps.co/search?q="+`${data.my_localisation.wilaya}`;

   useEffect(() => {
    if(isWebScraping){
      fetch(url).then(response => response.json())
      .then(reply =>{
        console.log("dataa",data);
        console.log("reply", reply[0].lat, reply[0].lon);
       data.my_localisation.latitude=reply[0].lat;
       data.my_localisation.longitude=reply[0].lon;
       position=[
        parseFloat(data.my_localisation.latitude),
        parseFloat(data.my_localisation.longitude),
       ]
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
        { (
          <div className=" w-[500px] md:w-[500px] h-[430px] rounded-2">
            <Map position = {position} />
          </div>
        )}
      </>
    </div>
  );
}
