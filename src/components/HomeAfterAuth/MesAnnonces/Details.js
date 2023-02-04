import React, { useEffect, useState } from "react";
import Description from "../Details components/Description";
import PhotosSection from "../Details components/PhotosSection";
import InfosSection from "../Details components/InfosSection";
import ContactSection from "../Details components/ContactSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import DeleteConfirModal from "./DeleteConfirmModel";

export default function Details() {
  const user = useSelector((state) => state.user.value);

  const [Annonce, setAnnonce] = useState(null);
  const PostId = useParams();
  
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/detailannonce/${PostId.id}`)
      .then((res) => {
        
        setAnnonce(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

 
  return (
    <div className="w-full min-w-fit ">
      {Annonce && (
        <>
          <PhotosSection data={Annonce.my_image} />
          <Description description={Annonce.description} />
          <InfosSection
            isWebScraping={
              Annonce.annonceuremail == "annonce-algerie" ? true : false
            }
            InfoAnnonce={Annonce}
          />
          <ContactSection
            InfoContact={Annonce.my_contact}
            isWebScraping={
              Annonce.annonceuremail == "annonce-algerie" ? true : false
            }
          />
          <>
            {user.email == Annonce.annonceuremail ? (
              <div className="flex items-center justify-center pb-10">
                <DeleteConfirModal id={PostId.id} />
              </div>
            ) : (
              <></>
            )}
          </>
        </>
      )}
    </div>
  );
}
