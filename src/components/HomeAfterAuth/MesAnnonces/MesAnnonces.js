import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnnoncesItems from "../MainAfterAuth/PublicAnnonces/AnnoncesItems";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";

export default function MesAnnonces() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const user = useSelector((state) => state.user.value);
  const [MesAnnonces, setMesAnnonces] = useState([]);
  const [totalLength, settotalLength] = useState(0);

  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/mesannonces/${page}`, {
        id: user.id,
      })
      .then((res) => {
        setMesAnnonces(res.data[1]);
        settotalLength(res.data[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-white w-full mt-32 ">
<div className="w-[500px]"></div>

      <p className="flex justify-center md:mt-20 md:ml-10 md:text-6xl text-3xl  font-akkar-bold text-akkar-black font-Inter">
        Mes Annonces
      </p>
      <div className="w-full flex justify-center items-center">

      <AnnoncesItems CurrentAnnonces={MesAnnonces} />
      </div>
      <div className="flex w-full justify-center items-center mt-32 md:mt-6    ">
        {totalLength != 0 ? (
          <ReactPaginate
            previousLabel={
              <ion-icon size={ isMobile? ` small `: `large`} name="arrow-back-outline"></ion-icon>
            }
            nextLabel={
              <ion-icon size={ isMobile? ` small `: `large`} name="arrow-forward-outline"></ion-icon>
            }
            pageCount={totalLength / 40}
            breakLabel={"..."}
            marginPagesDisplayed={4}
            // pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex"
            pageClassName=" m-1 py-2 md:px-6 px-2 md:py-3 rounded-[4px] md:text-xl text-base leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme "
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
    </div>
  );
}
