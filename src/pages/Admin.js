import React from "react";
import { useSelector } from "react-redux";

export default function Admin() {
  const user = useSelector((state) => state.user.value);
  console.log("from Admin : ");
  console.log(user);
  return (
    <div className="">
      <h1>this is admin!</h1>
    </div>
  );
}
