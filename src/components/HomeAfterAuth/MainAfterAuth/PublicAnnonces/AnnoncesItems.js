import React from "react";
import Post from "../../Post";
import pic from "../../../../assets/house.svg";

export default function AnnoncesItems({ CurrentAnnonces }) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4">
      {CurrentAnnonces &&
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
              ></Post>
            </div>
          );
        })}
    </div>
  );
}
