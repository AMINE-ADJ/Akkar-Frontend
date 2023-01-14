import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../Post";
// import pic from "../../assets/house.svg";
import AnnoncesItems from "../MainAfterAuth/PublicAnnonces/AnnoncesItems";
import ReactPaginate from "react-paginate";

export default function MesAnnonces() {
  const user = useSelector((state) => state.user.value);
  const [MesAnnonces, setMesAnnonces] = useState([]);
  const [totalLength, settotalLength] = useState(0);

  const [page, setPage] = useState(1);
  console.log(user.id);
  console.log("he doesn't have annonces yet! that's why = []");
  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/mesannonces/${page}`, {
        id: 43,
      })
      .then((res) => {
        // console.log(res);
        // setMesAnnonces(res.data);
        // settotalLength(res.data[0].my_annonces);
        setMesAnnonces(res.data[1]);
        settotalLength(res.data[0].count);
        // console.log(totalLength);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  // console.log(MesAnnonces);
  const handlePageClick = (data) => {
    // console.log(data.selected);
    setPage(data.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-white w-full mt-32 ">
      <p className="flex justify-center mt-20 ml-10 text-6xl font-akkar-bold text-akkar-black font-Inter">
        Mes Annonces {user.id}{" "}
      </p>
      <AnnoncesItems CurrentAnnonces={MesAnnonces} />
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
            marginPagesDisplayed={3}
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
    </div>
  );
}
