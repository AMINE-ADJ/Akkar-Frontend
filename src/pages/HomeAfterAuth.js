import React, { useEffect, useState } from "react";
import Footer from "../components/SharedComponents/Footer";
import AnnoncesSection from "../components/HomeAfterAuth/AnnoncesSection";
import Header from "../components/HomeAfterAuth/Header";
import SearchSection from "../components/HomeAfterAuth/SearchSection";
export default function HomeAfterAuth() {
  return (
    <div className="w-full min-w-fit h-screen">
      <Header />
      <SearchSection />
      <AnnoncesSection />
      <Footer />
    </div>
  );
}
