import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutFunction } from "../components/SharedComponents/LogoutFunction";

export default function Admin() {
  // const user = useSelector((state) => state.user.value);
  // console.log("from Admin : ");
  // console.log(user);
  const lancerWebScraping = () => {
    console.log("tlancat....!");
    axios
      .post("http://127.0.0.1:8000/api/lancerwebscraping/", {
        scrapingtime: "2",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <div className="bg-akkar-orange-second flex flex-col items-center gap-10 justify-center h-screen w-full font-akkar-bold text-akkar-black">
      <h1 className="text-3xl">this is admin!</h1>
      <button
        onClick={() => lancerWebScraping()}
        className="text-3xl bg-akkar-orange-third text-akkar-black font-Inter py-14 px-9 rounded-[3px] "
      >
        Lancer WebScraping
      </button>
      <Link to="/">
            <button
              onClick={() => LogoutFunction()}
              className="bg-akkar-orange text-red-700 font-Inter text-xl items-center ml-3 py-2 px-1 flex rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
            >
              <ion-icon size="large" name="log-out-outline"></ion-icon> LOGOUT
            </button>
          </Link>
    </div>
  );
}
