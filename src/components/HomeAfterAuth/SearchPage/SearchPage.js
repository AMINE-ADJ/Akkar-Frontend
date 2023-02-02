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
  const [isErreur, setisErreur] = useState(false);
  //   const user = useSelector((state) => state.user.value);
  const [MesAnnonces, setMesAnnonces] = useState([]);
  const [totalLength, settotalLength] = useState(0);

  const [page, setPage] = useState(1);
  //   console.log(user.id);
  //   console.log("he doesn't have annonces yet! that's why = []");
  // console.log(inpuText);
  useEffect(() => {
    console.log("In use effect");
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
        // setMesAnnonces(res.data);
        // settotalLength(res.data[0].my_annonces);
        setMesAnnonces(res.data[1]);
        settotalLength(res.data[0].count);
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
    SearchText: yup.string().required("Type is required"),
    type: yup.string(),

    wilaya: yup.string(),
    commune: yup.string(),
    fromDate: yup.string(),
    toDate: yup
      .string()
      .ensure()
      .when("fromDate", {
        is: (fromDate) => fromDate.length > 0,
        then: yup.string().required("Field is required"),
      }),

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
    { label: "Surface", value: "Surface" },
    { label: "Agricole", value: "Agricole" },
    { label: "Appartement", value: "Appart" },
    { label: "Maison", value: "Maison" },
    { label: "Bungalow", value: "Bungalow" },
    { label: "Appart. 1 pièce", value: "Appart. 1 pièce" },
    { label: "Appart. 3 pièces", value: "Appart. 3 pièce" },
    { label: "Appart. 4 pièces", value: "Appart. 4 pièce" },
    { label: "Duplex", value: "Duplex" },
  ];

  const formSubmitHandler = (data) => {
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
    console.log("Filter submitted!");
    console.log("infos", data);
    console.log("date: from ", data.toDate, "to ", data.fromDate);
    var d1 = Date.parse(data.toDate);
    var d2 = Date.parse(data.fromDate);
    if (d1 < d2) {
      // alert("Error!");
      console.log("erreur logique!");
      setisErreur(true);
    } else {
      setisErreur(false);
      setPage(1);
      setinputText(data.SearchText);
      axios
        .post(`http://127.0.0.1:8000/api/filterannonce/${page}`, {
          param: inpuText,
          type: data.type,
          wilaya: data.wilaya,
          commune: data.commune,
          newestdate: data.toDate,
          oldestdate: data.fromDate,
        })
        .then((res) => {
          console.log(res);
          // setMesAnnonces(res.data);
          // console.log(res.data.length);
          // settotalLength(res.data.length);
          setMesAnnonces(res.data[1]);
          settotalLength(res.data[0].count);
          // settotalLength(res.data[0].my_annonces);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //traitement.
  };
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(isDisabled);
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  
  return (
    <div className="bg-white  w-full pt-32 flex flex-col items-center pb-10">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="flex flex-col justify-center items-center md:items-start gap-5">
          <div className=" w-[300px] sm:w-[400px] md:w-[915px] h-[50px] flex flex-row gap-12 items-center p-5 border-2 border-[#ECDFD8] rounded-2">
            <input
              {...register("SearchText")}
              className=" w-[300px] sm:w-[370px] md:w-[790px] h-[45px] rounded-2 p-4  outline-none"
              type="text"
              name="SearchText"
              defaultValue={inpuText}
              placeholder="Search for a real estate"
            ></input>
            <div className=" w-[22px] h-[22px] md:w-[25px]  md:h-[25px]   flex items-center justify-center">
              <img className="md:w-[100%] md:h-[100%] " src={search}></img>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="" src={filterIcon}></img>
            <p className="text-xl font-Inter text-akkar-orange font-akkar-bold ">
              Filter
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[20px] ">
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
          <div className="flex flex-col md:flex-row items-center gap-y-[40px] md:gap-4">
            <p className="text-xl font-Inter font-akkar-bold">From</p>
            <div className="flex flex-col">
              <input
                id="from"
                {...register("fromDate")}
                onChange={(e) => {
                  if (e.target.value) setIsDisabled(false);
                  else {setIsDisabled(true)
                    
                      settodate("");
                    };
                  setfromdate(e.target.value);
                }}
                className=" w-[200px] md:w-[300px] h-[50px] rounded-2 p-4 border-2 border-[#ECDFD8] outline-none"
                type="date"
                name="fromDate"
                placeholder="yyyy/mm/dd"
              ></input>
              {errors.fromDate ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {errors.fromDate.message}
                </div>
              ) : null}
              {isErreur ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {"Date invalide"}
                </div>
              ) : null}
            </div>

            <p className="text-xl font-Inter font-akkar-bold">To</p>
            <div className="flex flex-col">
              <input
                id="to"
                {...register("toDate")}
                onChange={(e) => {
                  settodate(e.target.value);
                
                }}
                value={todate}
                className=" w-[200px] md:w-[300px] h-[50px] rounded-2 p-4 border-2 border-[#ECDFD8] outline-none"
                type="date"
                name="toDate"
                placeholder="yyyy/mm/dd"
                disabled={isDisabled}
              ></input>
              {errors.toDate ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {errors.toDate.message}
                </div>
              ) : null}
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
 <div className="w-full flex justify-center items-center">
 <AnnoncesItems CurrentAnnonces={MesAnnonces} />

 </div>
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
