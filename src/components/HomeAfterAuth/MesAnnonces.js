import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import pic from "../../assets/house.svg";

export default function MesAnnonces() {
  const user = useSelector((state) => state.user.value);
  const [MesAnnonces, setMesAnnonces] = useState([]);
  const [page, setPage] = useState(1);
  console.log(user.id);
  console.log("he doesn't have annonces yet! that's why = []");
  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/mesannonces/${page}`, {
        id: user.id,
      })
      .then((res) => {
        console.log(res);
        setMesAnnonces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  // console.log(MesAnnonces);
  return (
    <div>
      <p className=" ml-10 text-6xl font-akkar-bold text-akkar-black font-Inter">
        LES ANNONCES de {user.id}{" "}
      </p>
      <div className=" grid grid-cols-3">
        {MesAnnonces &&
          MesAnnonces.map((Annonce) => {
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
    </div>
  );
}
