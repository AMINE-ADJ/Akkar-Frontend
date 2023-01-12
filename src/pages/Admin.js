import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutFunction } from "../components/SharedComponents/LogoutFunction";

export default function Admin() {
  // const user = useSelector((state) => state.user.value);
  // console.log("from Admin : ");
  // console.log(user);
  const [ScrapingTime, setScrapingTime] = useState(2);
  const [Success, setSuccess] = useState("");
  const lancerWebScraping = () => {
    console.log(`tlancat....! avec ${ScrapingTime} `);
    axios
      .post("http://127.0.0.1:8000/api/lancerwebscraping/", {
        scrapingtime: `2`,
      })
      .then((res) => {
        console.log(res);
        setSuccess(res.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const IncreaseScrapingTime = (nbr) => {
    if (ScrapingTime + nbr <= 18) {
      setScrapingTime(ScrapingTime + nbr);
    }
  };
  const DecreaseScrapingTime = (nbr) => {
    if (ScrapingTime - nbr >= 2) {
      setScrapingTime(ScrapingTime - nbr);
    }
  };
  // console.log(Success);
  return (
    <div className="bg-akkar-orange-second flex flex-col items-center gap-10 justify-center h-screen w-full font-akkar-bold text-akkar-black">
      <h1 className="text-3xl">this is admin!</h1>

      <div className=" flex gap-10 items-center">
        <button
          onClick={() => DecreaseScrapingTime(2)}
          className="p-5 bg-slate-600"
        >
          Decrease
        </button>
        <p className="text-7xl">{ScrapingTime}</p>
        <button
          onClick={() => IncreaseScrapingTime(2)}
          className="p-5 bg-slate-600"
        >
          Increase
        </button>
      </div>

      <button
        onClick={() => lancerWebScraping()}
        className="text-3xl bg-akkar-orange-third hover:bg-akkar-gray text-akkar-black font-Inter py-14 px-9 rounded-[3px] "
      >
        Lancer WebScraping (By default : 2 min )
      </button>
      <Link to="/">
        <button
          // onClick={() =>  ()}
          className="bg-akkar-orange text-red-700 font-Inter text-xl items-center ml-3 py-2 px-1 flex rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
        >
          <ion-icon size="large" name="log-out-outline"></ion-icon> LOGOUT
        </button>
      </Link>
    </div>
  );
}
