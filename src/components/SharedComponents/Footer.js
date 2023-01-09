import React from "react";
import Logo from "../../assets/logoCreme.svg";

export default function Footer() {
  return (
    <section
      className="bg-akkar-brown h-44 w-full  flex flex-col md:gap-5 gap-2 items-center justify-end"
      id="footer"
    >
      <div className="flex gap-10 items-center text-akkar-brown-creme">
        <div className="md:text-2xl text-xl font-medium font-Inter">
          Contact Us
        </div>
        <div className="flex gap-3 ">
          <a href="" target="_blank">
            <ion-icon size="large" name="logo-google"></ion-icon>
          </a>
          <a href="" target="_blank">
            <ion-icon size="large" name="logo-facebook"></ion-icon>
          </a>
          <a href="" target="_blank">
            <ion-icon size="large" name="logo-twitter"></ion-icon>
          </a>
          <a href="" target="_blank">
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className="w-full h-[1px] bg-akkar-brown-creme"></div>
      <div className="flex md:flex-row flex-col items-center md:gap-6 ">
        <img
          className="md:w-[170px] w-[100px] md:pb-4  h-16 fill-akkar-brown-creme"
          src={Logo}
        />
        <div className=" text-base md:text-xl font-Inter text-center font-medium text-akkar-brown-creme">
          Copyright <span className="md:text-2xl text-xl">@</span> Akkar informe
          you that all rights reserved
        </div>
      </div>
    </section>
  );
}
