import React, { useEffect, useState } from "react";
import Footer from "../components/SharedComponents/Footer";
import AnnoncesSection from "../components/HomeAfterAuth/AnnoncesSection";
import Header from "../components/HomeAfterAuth/Header";
import SearchSection from "../components/HomeAfterAuth/SearchSection";
import { useSelector } from "react-redux";
export default function HomeAfterAuth() {
  const user = useSelector((state) => state.user.value);
  // console.log("from Afterauth : ");
  // console.log(user);

  return (
    <div className="w-full min-w-fit h-screen">
      <Header />
      <SearchSection />
      <AnnoncesSection />
      <Footer />
    </div>
  );
}
