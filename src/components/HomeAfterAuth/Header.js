import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.svg";
import UserCircle from "./UserCircle";
export default function Header() {
  let Links = [
    { name: "Acceuil", link: "/authenticated/" },
    { name: " Mes Méssages", link: "/authenticated/mesmessages" },
    { name: "Mes Annonces", link: "/authenticated/mesannonces" },
    { name: "Contactez-nous", link: "#footer" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md shadow-akkar-orange w-full md:sticky fixed top-0 left-0  z-100">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <div>
          <HashLink smooth to={"/authenticated/"}>
            <img
              className="w-[150px] h-16 lg:pb-2 md:mx-10 md:pr-10"
              src={Logo}
            />
          </HashLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:mx-auto md:px-10 text-lg md:my-0 my-3"
            >
              <HashLink
                smooth
                to={link.link}
                className="  hover:text-akkar-  text-black duration-200 font-Inter font-medium "
              >
                {link.name}
              </HashLink>
            </li>
          ))}
          <Link to="/authenticated/posterannonce">
            {/* <Link to={`/authenticated/posterannonce/${user.id}`}> */}
            <button
              className="bg-akkar-orange-second text-akkar-orange font-Inter md:my-0 my-2 md:py-2 py-1 md:px-4 px-2 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
            >
              <ion-icon name="add-outline"></ion-icon> Publier
            </button>
          </Link>
          <UserCircle/>
        </ul>
      </div>
    </div>
  );
}
