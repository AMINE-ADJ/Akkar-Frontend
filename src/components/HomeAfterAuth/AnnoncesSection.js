import React, { useEffect, useState } from "react";
import Post from "./Post.js";
import pic from "../../assets/house.svg";
import { useSelector } from "react-redux";
import axios from "axios";
export default function AnnoncesSection() {
  const user = useSelector((state) => state.user.value);

  const [page, setPage] = useState(1);
  // const [image, setImage] = useState("");
  const [Annonces, setAnnonces] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/afficherannonces/${page}`)
      .then((res) => {
        // console.log(res);
        setAnnonces(res.data);
        // setImage(res.data[2].my_image);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [page]);
  // console.log(Annonces);

  return (
    <div className=" bg-akkar-orange-second w-full pt-10 ">
      <div className=" ml-10 text-6xl font-akkar-bold text-akkar-black font-Inter">
        <p>Real Estates</p>
      </div>
      <div className=" grid grid-cols-3">
        {Annonces &&
          Annonces.map((Annonce) => {
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
