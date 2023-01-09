import React from "react";
import Footer from "../components/SharedComponents/Footer";
import Header from "../components/HomeBeforeAuth/Header";
import Hero from "../components/HomeBeforeAuth/Hero/Hero";
import Services from "../components/HomeBeforeAuth/Services/Services";
import Team from "../components/HomeBeforeAuth/Team/Team";

export default function HomeBeforeAuth() {
  return (
    <div className="w-full min-w-fit h-screen">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}
