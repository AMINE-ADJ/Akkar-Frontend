import search from "../../../assets/search.svg";
import filterIcon from "../../../assets/filterIcon.svg";
import { useForm } from "react-hook-form";
import Wilayas from "../../../data/wilayas.json";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../Post";
// import pic from "../../assets/house.svg";
import AnnoncesItems from "../MainAfterAuth/PublicAnnonces/AnnoncesItems";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const SearchText = useParams();
  //   console.log(SearchText);
  const [inpuText, setinputText] = useState(SearchText.params);
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);

  //   const user = useSelector((state) => state.user.value);
  const [MesAnnonces, setMesAnnonces] = useState([]);
  const [totalLength, settotalLength] = useState(0);

  const [page, setPage] = useState(1);
  //   console.log(user.id);
  //   console.log("he doesn't have annonces yet! that's why = []");
  // console.log(inpuText);
  useEffect(() => {
    console.log(typeof inpuText);
    axios
      .post(`http://127.0.0.1:8000/api/filterannonce/${page}`, {
        param: inpuText,
        type: "",
        wilaya: "",
        commune: "",
        newestdate: "",
        oldestdate: "",
      })
      .then((res) => {
        console.log(res);
        setMesAnnonces(res.data);
        settotalLength(res.data[0].my_annonces);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  // console.log(totalLength / 40);
  // console.log(MesAnnonces);

  // console.log(MesAnnonces);
  const handlePageClick = (data) => {
    // console.log(data.selected);
    setPage(data.selected + 1);
    window.scrollTo(0, 0);
  };

  const handleWilaya = (SelectedWilaya) => {
    setWilaya(SelectedWilaya);
    const wilayaObject = Wilayas.find(
      (wilaya) => wilaya.name === SelectedWilaya
    );
    setWilayaId(wilayaObject.id);
  };

  //define the rules of each field
  const registerSchema = yup.object().shape({
    type: yup.string().required("Type is required"),

    wilaya: yup.string().required("Wilaya is required"),
    commune: yup.string().required("commune is required"),
    fromDate: yup.string().required("commune is required"),
    toDate: yup.string().required("commune is required"),

    //we will add more rules when adding the photos section and the contact infos section
  });
  //useForm liberary setup this will manage all the form fields and validate the form using the yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const Types = [
    { label: "Terrain", value: "Terrain" },
    { label: "Agricole", value: "Agricole" },
    { label: "Appartement", value: "Appartement" },
    { label: "Maison", value: "Maison" },
    { label: "Bungalow", value: "Bungalow" },
    { label: "F2", value: "F2" },
    { label: "F3", value: "F3" },
    { label: "F4", value: "F5" },
    { label: "Duplex", value: "Duplex" },
  ];
  
  const formSubmitHandler = (data) => {
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
    console.log(data);
  };
  return (
    <div className="bg-white  w-full pt-32 flex flex-col items-center pb-10">
      <form onSubmit={handleSubmit(formSubmitHandler)} className=" ">
        <div className="flex flex-col items-start gap-5">
          <div className=" w-[400px] md:w-[915px] h-[50px] flex flex-row gap-12 items-center p-5 border-2 border-[#ECDFD8] rounded-2">
            <input
              className=" w-[370px] md:w-[790px] h-[45px] rounded-2 p-4  outline-none"
              type="text"
              name="localisation"
              placeholder="Search for a real estate"
            ></input>
            <div className="w-[23px] h-[23px] md:w-[25px]  md:h-[25px]   flex items-center justify-center">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={search}
              ></img>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="" src={filterIcon}></img>
            <p className="text-xl font-Inter text-akkar-orange font-akkar-bold ">
              Filter
            </p>
          </div>

          <div className="flex gap-2 ">
            <div className="flex flex-col">
              <select
                {...register("type")}
                name="type"
                className="w-[300px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
              >
                <option value="">Type</option>
                {Types.map((item) => {
                  return (
                    <option
                      className="hover:bg-akkar-orange"
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  );
                })}
              </select>
              {errors.type ? (
                <div className="text-sm text-akkar-orange text-left absolute  mt-[50px]">
                  {" "}
                  {errors.type.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <select
                {...register("wilaya")}
                name="wilaya"
                className="w-[300px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
                onChange={(wilaya) => handleWilaya(wilaya.target.value)}
              >
                <option value="">Wilaya</option>
                {Wilayas.map((wilaya) => {
                  return (
                    <option
                      className="hover:bg-akkar-orange"
                      value={wilaya.name}
                    >
                      {wilaya.code}-{wilaya.name}
                    </option>
                  );
                })}
              </select>
              {errors.wilaya ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {" "}
                  {errors.wilaya.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <select
                {...register("commune")}
                name="commune"
                className="w-[300px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
              >
                <option value="">Commune</option>
                {Wilayas[WilayaId - 1]?.dairas.map((daira) => {
                  return (
                    <>
                      {daira.communes?.map((commune) => {
                        return (
                          <option
                            className="hover:bg-akkar-orange"
                            value={commune.name}
                          >
                            {commune.name}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </select>
              {errors.commune ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {" "}
                  {errors.commune.message}
                </div>
              ) : null}
            </div>
          </div>
          {/* from to  */}
          <div className="flex flex-row items-center gap-4">
            <p className="text-xl font-Inter font-akkar-bold">From</p>
            <div className="w-[150px] md:w-[300px] h-[40px] flex flex-row items-center p-5 border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("fromDate")}
                className=" w-[150px] md:w-[300px] h-[40px] rounded-2 p-4  outline-none"
                type="text"
                name="fromDate"
                placeholder="yyyy/mm/dd"
              ></input>
            </div>
            <p className="text-xl font-Inter font-akkar-bold">To</p>
            <div className="w-[150px] md:w-[300px] h-[40px] flex flex-row items-center p-5 border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("toDate")}
                className=" w-[150px] md:w-[300px] h-[40px] rounded-2 p-4  outline-none"
                type="text"
                name="toDate"
                placeholder="yyyy/mm/dd"
              ></input>
            </div>
            <button
              type="submit"
              className="bg-akkar-orange-second font-akkar-bold px-14 text-akkar-orange font-Inter text-xl items-center ml-3 py-2  flex rounded-[3px] hover:bg-akkar-orange hover:text-akkar-white-creme
    duration-200"
            >
              Filter
            </button>
          </div>

          <p className="flex justify-center mt-10 text-3xl font-akkar-bold text-akkar-black font-Inter">
            Search Results
          </p>
        </div>
      </form>

      {/* Searchresults */}

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
              <p className="text-5xl text-akkar-black ">
                No real estates found !
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
