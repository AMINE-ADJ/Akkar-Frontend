import React from "react";
import MessagesContainer from "./MessagesContainer";

export default function MessagePage() {
  return (
    <div className="w-full  py-[100px]">
      <div className="flex flex-col justify-center items-center gap-10">
        <MessagesContainer />
        <MessagesContainer />
        <MessagesContainer />
        <MessagesContainer />
      </div>
    </div>
  );
}
