import axios from "axios";
import React, { useState } from "react";
import ProgressTimer from "react-progress-bar-timer";
import { Link } from "react-router-dom";
import { LogoutFunction } from "../components/SharedComponents/LogoutFunction";

export default function Admin() {
  const [ScrapingTime, setScrapingTime] = useState(2);
  const [StartTimer, setStartTimer] = useState(false);
  const [ScrapingTimeMs, setScrapingTimeMs] = useState(ScrapingTime * 60 + 15);
  const [Success, setSuccess] = useState(false);
  const lancerWebScraping = () => {
    setSuccess(false);
    setStartTimer(true);
    axios
      .post("http://127.0.0.1:8000/api/lancerwebscraping/", {
        scrapingtime: `${ScrapingTime} `,
      })
      .then((res) => {
        setStartTimer(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const IncreaseScrapingTime = (nbr) => {
    if (ScrapingTime + nbr <= 18) {
      setScrapingTime(ScrapingTime + nbr);
      setScrapingTimeMs(ScrapingTimeMs + nbr * 60);
    }
  };
  const DecreaseScrapingTime = (nbr) => {
    if (ScrapingTime - nbr >= 2) {
      setScrapingTime(ScrapingTime - nbr);
      setScrapingTimeMs(ScrapingTimeMs - nbr * 60);
    }
  };
  return (
    <div className="bg-akkar-orange-second pt-10 flex flex-col items-center gap-10 justify-start h-screen w-full font-akkar-bold text-akkar-black">
      <h1 className="text-5xl">Welcome to Admin Page!</h1>

      <div className=" flex gap-10 items-center">
        <button
          onClick={() => DecreaseScrapingTime(2)}
          className="p-5 bg-slate-600"
        >
          Decrease
        </button>

        <p className="text-5xl">{ScrapingTime}</p>

        <button
          onClick={() => IncreaseScrapingTime(2)}
          className="p-5 bg-slate-600"
        >
          Increase
        </button>
      </div>
      <ProgressTimer
        label="Veuillez attendre 24h avant de lancer la prochaine operation !"
        started={StartTimer}
        color="#E95913"
        duration={ScrapingTimeMs}
        fontColor={Success ? "#ffffffd9" : "#00000000"}
        onFinish={() => {
          setSuccess(true);
        }}
      />
      <button
        onClick={() => lancerWebScraping()}
        className="text-3xl bg-akkar-orange-third hover:bg-akkar-gray text-akkar-black font-Inter py-14 px-9 rounded-[3px] "
      >
        Lancer WebScraping (By default : 2 min )
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
