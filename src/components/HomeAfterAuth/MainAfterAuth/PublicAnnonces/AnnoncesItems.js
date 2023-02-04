import React from "react";
import Post from "../../Shared Components/Post";
import pic from "../../../../assets/house.svg";
import { useSelector } from "react-redux";

export default function AnnoncesItems({ CurrentAnnonces }) {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {CurrentAnnonces && CurrentAnnonces!=null &&
        CurrentAnnonces.map((Annonce) => {
          return (
            <div key={Annonce.id}>
              <Post
                Postid={Annonce.id}
                img={Annonce.my_image != null ? Annonce.my_image : pic}
                title={Annonce.titre}
                localisation={Annonce.my_localisation}
                area={Annonce.surface}
                time={Annonce.date}
                price={Annonce.prix}
                isUserAnnonce = {
                  Annonce.annonceuremail === user.email ? true :false
                }
                isWebScraping={
                  Annonce.annonceuremail === "annonce-algerie" ? true : false
                }
              ></Post>
            </div>
          );
        })}
    </div>
  );
}
