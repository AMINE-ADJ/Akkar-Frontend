import React from "react";
import Post from "./Post.js";
import pic from "../../assets/house.svg";
export default function AnnoncesSection() {
  return (<div className=" w-full h-[1500px] flex justify-center items-center">
<Post img={pic} title="Sell Apartment Algiers Bab Ezzouar" localisation="Alger" area="200 M^2" time="1 month ago" price="5000000 DA"></Post>

  </div>);
}
