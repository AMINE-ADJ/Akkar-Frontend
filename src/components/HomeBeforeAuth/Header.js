import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.svg";
import { LoginFunction } from "../SharedComponents/LoginFunction";
export default function Header() {
  let Links = [
    { name: "Home", link: "#hero" },
    { name: "Our Services", link: "#services" },
    { name: "Our Team", link: "#team" },
    { name: "Contact Us", link: "#footer" },
  ];
  let [open, setOpen] = useState(false);
  const loginFunction = LoginFunction();
  return (
    <div className="shadow-lg shadow-akkar-orange w-full fixed top-0 left-0 z-100">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <HashLink smooth to={"#hero"}>
          <img className="w-[150px] h-16 pb-2 " src={Logo} />
        </HashLink>

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
            <li key={link.name} className="md:mx-16 text-lg md:my-0 my-3">
              <HashLink
                smooth
                to={link.link}
                className="  hover:text-akkar-orange  text-black duration-200 font-Inter font-medium "
              >
                {link.name}
              </HashLink>
            </li>
          ))}
          {/* <Link to="/authenticated"> */}
          <button
            onClick={() => loginFunction()}
            className="bg-akkar-orange text-white font-Inter py-2 px-9 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
          >
            Connectez-vous
          </button>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
}
