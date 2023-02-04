import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutFunction } from "../SharedComponents/LogoutFunction";

const UserCircle = () => {
  const user = useSelector((state) => state.user.value);
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [userImage, setUserImage] = useState("");

  const toggleDropdowns = () => {
    setShowDropdowns(!showDropdowns);
  };
  useEffect(() => {
    let accessToken = JSON.parse(localStorage.getItem("access-token"));

    axios
      .get("https://people.googleapis.com/v1/people/me?personFields=photos", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        const profileImage = userData.photos[0].url;
        setUserImage(profileImage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="relative">
        <img
          src={userImage}
          alt="User Image"
          className="md:my-0 my-2 md:ml-4 w-12 lg:h-12 md:h-5 md:w-5 lg:w-12 h-12 cursor-pointer rounded-full"
          onClick={toggleDropdowns}
        />
        {showDropdowns && (
          <div className="absolute top-0 md:right-0 mt-16 bg-akkar-orange-second rounded-lg shadow-xl">
            <div className="p-2 font-Inter">
              {" "}
              <span className="font-bold"> Nom </span> : {user.name}
            </div>
            <hr className="border-akkar-black" />
            <div className="py-2 pr-16 pl-2 font-Inter">
              {" "}
              <span className="font-bold"> Votre email </span> : {user.email}
            </div>
            <hr className="border-akkar-black" />
            <Link to="/">
              <button
                onClick={() => LogoutFunction()}
                className="text-red-700 font-Inter  md:my-0 my-2  items-center md:ml-3 md:py-6 py-1  px-1 flex rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
              >
                <ion-icon
                  size="md:large small "
                  name="log-out-outline"
                ></ion-icon>{" "}
                Déconnecter
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCircle;
