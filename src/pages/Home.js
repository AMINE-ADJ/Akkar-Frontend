import React from "react";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Team />
      <Services />
      <Contact/>
    </div>
  );
}
