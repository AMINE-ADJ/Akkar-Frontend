import React, { useEffect } from "react";
import Footer from "../components/SharedComponents/Footer";
import Description from "../components/HomeAfterAuth/Description";
import PhotosSection from "../components/HomeAfterAuth/PhotosSection";
import Header from "../components/HomeAfterAuth/Header";
import InfosSection from "../components/HomeAfterAuth/InfosSection";
import ContactSection from "../components/HomeAfterAuth/ContactSection";
import picture from "../assets/picture.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const PostId = useParams();
  console.log(PostId);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/detailannonce/${PostId.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let data = [
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
  ];
  return (
    <div className="w-full min-w-fit h-screen">
      <Header />
      <PhotosSection data={data}></PhotosSection>
      <Description></Description>
      <InfosSection></InfosSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
