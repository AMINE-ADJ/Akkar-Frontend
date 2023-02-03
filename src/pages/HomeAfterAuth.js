import React, { useEffect, useState } from "react";
import Footer from "../components/SharedComponents/Footer";
// import AnnoncesSection from "../components/HomeAfterAuth/PublicAnnonces/AnnoncesSection";
import Header from "../components/HomeAfterAuth/Header";
// import SearchSection from "../components/HomeAfterAuth/MainAfterAuth/SearchSection/SearchSection";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
export default function HomeAfterAuth() {
  const user = useSelector((state) => state.user.value);
  // console.log("from Afterauth : ");
  console.log(user);

  return (
    <div className="w-full min-w-fit h-screen lg:overflow-auto ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
