import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnoncesItems from "./AnnoncesItems.js";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";
export default function AnnoncesSection() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [page, setPage] = useState(1);
  const [totalLength, settotalLength] = useState();
  const [Annonces, setAnnonces] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/afficherannonces/${page}`)
      .then((res) => {
        console.log(res.data[1]);
        console.log(res.data[0].count);
        setAnnonces(res.data[1]);
        settotalLength(res.data[0].count);
        // setImage(res.data[2].my_image);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [page]);
  // console.log(totalLength / 40);
  // console.log(Annonces);
  // console.log(totalLength);
  // console.log(page);
  const handlePageClick = (data) => {
    // console.log(data.selected);
    setPage(data.selected + 1);
    window.scrollTo(0, 420);
  };
  return (
    <section className=" w-full pt-10 pb-10" id="annonces">
      <div className=" m-10 text-3xl font-akkar-bold text-akkar-black font-Inter ">
        <p>Annonces immobilières</p>
      </div>
      <div className="w-full flex justify-center items-center">
      <AnnoncesItems CurrentAnnonces={Annonces} />

      </div>
      <div className="flex w-full  justify-center items-center  mt-20 md:mt-6  ">
        <ReactPaginate
          previousLabel={
            <ion-icon size={ isMobile? ` small `: `large`} name="arrow-back-outline"></ion-icon>
          }
          nextLabel={
            <ion-icon size={ isMobile? ` small `: `large`} name="arrow-forward-outline"></ion-icon>
          }
          pageCount={totalLength / 40}
          breakLabel={"..."}
          marginPagesDisplayed={3}
          // pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex"
          pageClassName=" m-1 py-2 md:px-6 px-2 md:py-3 rounded-[4px] md:text-xl text-base leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme "
          previousClassName="m-2 px-3 py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
          nextClassName="m-2 px-3  py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
          activeClassName=" m-2 px-5 py-3 text-xl rounded-[4px] leading-tight text-akkar-white-creme bg-akkar-orange "
          breakClassName="m-2 px-5 py-3 rounded-[4px] text-xl leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme"
        />
      </div>
    </section>
  );
}
