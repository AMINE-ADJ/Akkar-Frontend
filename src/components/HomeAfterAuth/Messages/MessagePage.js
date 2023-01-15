import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import AnnonceCardsItems from "./AnnonceCardsItems";
import MessagesContainer from "./MessagesContainer";

export default function MessagePage() {
  const user = useSelector((state) => state.user.value);
  const [AnnonceCards, setAnnonceCards] = useState([]);
  const [totalLength, settotalLength] = useState(0);
  useEffect(() => {
    axios
      .post(" http://127.0.0.1:8000/api/messages/?page=1", {
        userid: user.id,
      })
      .then((res) => {
        console.log(res);
        setAnnonceCards(res.data.results);
        settotalLength(res.data.count);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handlePageClick = (data) => {
    // console.log(data.selected);
    // setPage(data.selected + 1);
    // window.scrollTo(0, 0);
  };
  console.log(AnnonceCards);
  console.log(totalLength);
  return (
    <div className="w-full  py-[100px]">
      {/* <div className=""> */}
      {/* <MessagesContainer id={} title={} date={}/> */}
      {/* <MessagesContainer />
        <MessagesContainer />
        <MessagesContainer /> */}
      <AnnonceCardsItems CurrentAnnonces={AnnonceCards} />
      <div className="flex w-full justify-center items-center   ">
        {totalLength != 0 ? (
          <ReactPaginate
            previousLabel={
              <ion-icon size="large" name="arrow-back-outline"></ion-icon>
            }
            nextLabel={
              <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
            }
            pageCount={totalLength / 40}
            breakLabel={"..."}
            marginPagesDisplayed={4}
            // pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex"
            pageClassName=" m-2 px-5 py-3 rounded-[4px] text-xl leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme "
            previousClassName="m-2 px-3 py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
            nextClassName="m-2 px-3  py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
            breakClassName="m-2 px-5 py-3 rounded-[4px] text-xl leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme"
            activeClassName=" m-2 px-5 py-3 text-xl rounded-[4px] leading-tight text-akkar-white-creme bg-akkar-orange "
          />
        ) : (
          <>
            <div className="h-screen w-full bg-akkar-orange-second flex justify-center items-center">
              <p className="text-5xl text-akkar-black ">You didn't post yet!</p>
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
