import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <div className="w-full min-w-fit h-screen">
      <Header />
      <Hero></Hero>
      <Services />
      <Team />
      <Footer/>
    </div>
  );
}
