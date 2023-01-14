import React, { useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer";
import Description from "../Description";
import PhotosSection from "../PhotosSection";
import Header from "../Header";
import InfosSection from "../InfosSection";
import ContactSection from "../ContactSection";
import picture from "../../../assets/picture.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteConfirModal from "./DeleteConfirmModel";

export default function Details() {
  const user = useSelector((state) => state.user.value);

  const [Annonce, setAnnonce] = useState(null);
  const PostId = useParams();
  console.log(PostId);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/detailannonce/${PostId.id}`)
      .then((res) => {
        console.log(res);
        setAnnonce(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(Annonce);

  // const DeleteAnnonce = () => {
  //   axios
  //     .delete(`http://127.0.0.1:8000/api/supprimerannonce/${PostId.id}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // let data = [
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  // ];
  return (
    <div className="w-full min-w-fit ">
      {Annonce && (
        <>
          <PhotosSection data={Annonce.my_image} />
          <Description description={Annonce.description} />
          <InfosSection InfoAnnonce={Annonce} />
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