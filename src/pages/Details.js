import React from "react";
import Footer from "../components/Footer";
import Description from "../components/HomeAfterAuth/Description";
import PhotosSection from "../components/HomeAfterAuth/PhotosSection";
import Header from "../components/HomeAfterAuth/Header";
import InfosSection from "../components/HomeAfterAuth/InfosSection";
import ContactSection from "../components/HomeAfterAuth/ContactSection";
import picture from "../assets/picture.svg";

export default function Details() {
  let data=[picture,picture,picture,picture,picture,picture,picture,picture];
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