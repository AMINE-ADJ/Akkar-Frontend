import React, { useState,useRef } from "react";
import adress from "../../assets/adresse-bien.svg";
import galery from "../../assets/galery.svg";
import exit from "../../assets/exit.svg";
import tel from "../../assets/telephone.svg";
import mail from "../../assets/@.svg";

import { useForm } from "react-hook-form";
import Wilayas from "../../data/wilayas.json";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
export default function PostForm() {
  const user = useSelector((state) => state.user.value);
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);
  const navigate = useNavigate();

  const handleWilaya = (SelectedWilaya) => {
    setWilaya(SelectedWilaya);
    const wilayaObject = Wilayas.find(
      (wilaya) => wilaya.name === SelectedWilaya
    );
    setWilayaId(wilayaObject.id);
  };

  //define the rules of each field
  const registerSchema = yup.object().shape({
    type: yup.string().required("Le type est oblogatoire"),
    categorie: yup.string().required("La catégorie est oblogatoire"),
    surface: yup.string().required("La surface est oblogatoire").min(2),
    prix: yup.string().required("Le prix est oblogatoire").min(7),
    wilaya: yup.string().required("La wilaya est oblogatoire"),
    commune: yup.string().required("La commune est oblogatoire"),
    nom: yup.string().required("Le nom est oblogatoire"),
    prenom: yup.string().required("Le prénom est oblogatoire"),
    localisation: yup.string().required("La localisation est oblogatoire"),
    email: yup
      .string()
      .email("Format invalide")
      .required("L'Email est oblogatoire"),
    telephone: yup.string().required("Le numéro de téléphone est obligatoire").min(8),
    adresseannonceur: yup.string().required("L'adresse est obligatoire"),
    description: yup.string().max(511),
    //we will add more rules when adding the photos section and the contact infos section
  });
  //useForm liberary setup this will manage all the form fields and validate the form using the yup schema
  const {
    register,
    setValue,
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
  const Categories = [
    { label: "Vente", value: "Vente" },
    { label: "Echange", value: "Echange" },
    { label: "Location", value: "Location" },
    { label: "Location pour vacances", value: "Location pour vacances" },
  ];

  const formSubmitHandler = (data) => {
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)

    console.log("Submited !");
    console.log("your data ", data);
    console.log("your files to upload", selectedImages);
    console.log(files);
    var sendData = {
      id: user.id,
      categorie: data.categorie,
      type: data.type,
      wilaya: data.wilaya,
      commune: data.commune,
      surface: data.surface,
      prix: data.prix,
      description: data.description,
      annonceuremail: user.email,
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,
      adresseannonceur: data.adresseannonceur,
      latitude: coords.lat,
      longitude: coords.lng,
    };
    for (let i = 0; i < files.length; i++) {
      sendData[`${i + 1}`] = files[i].file;
    }
    console.log(sendData);
    axios
      .post("http://127.0.0.1:8000/api/postannonce/", sendData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        navigate("/authenticated/mesannonces");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //**************************************************************** */
  const [files, setfiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const selectImage = (e) => {
    const f = e.target.files;
    const filesArray = Array.from(f);
    const imagesArray = filesArray.map((fl, index) => {
      const img = URL.createObjectURL(fl);
      return { img, index, fl };
    });
    const currentFiles = filesArray.map((file, id) => {
      return { file, id };
    });
    setSelectedImages(selectedImages.concat(imagesArray));
    setfiles(files.concat(currentFiles));
  };
  const inputLocation=useRef(null);
  const [Localisation,setLocalisation]=useState(false);
  const [coords,setCoords]=useState({});
  console.log("your coords are",coords);
  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full min-w-fit h-fit mt-[100px] flex justify-center "
    >
      <div className="md:w-[1000px] md:h-fit flex flex-col items-center gap-y-[30px] p-5">

        <p className="text-left text-xl md:text-3xl font-normal md:mr-[620px]">
Informations        </p>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-y-[50px]">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[20px]">
            <div className="flex flex-col">
              <select
                {...register("type")}
                name="type"
                className="w-[400px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
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
                <div className="text-sm text-akkar-orange text-left   mt-[0px]">
                  {" "}
                  {errors.type.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <select
                {...register("categorie")}
                name="categorie"
                className="w-[400px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
              >
                <option value="">Catégorie</option>
                {Categories.map((item) => {
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

              {errors.categorie ? (
                <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                  {" "}
                  {errors.categorie.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[25px]">
            <div className="flex flex-col">
              <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
                <input
                  {...register("surface")}
                  className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                  type="number"
                  name="surface"
                  placeholder="Surface"
                ></input>

                <div className="md:w-[50px]  md:h-[50px]  text-center flex items-center justify-center">
                  M^2
                </div>
              </div>
              {errors.surface ? (
                <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                  {" "}
                  {errors.surface.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
                <input
                  {...register("prix")}
                  className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                  type="number"
                  name="prix"
                  placeholder="Prix"
                ></input>

                <div className="md:w-[50px]  md:h-[50px]  text-center flex items-center justify-center">
                  DA
                </div>
              </div>
              {errors.prix ? (
                <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                  {" "}
                  {errors.prix.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <textarea
              {...register("description")}
              className=" w-[400px] md:w-[820px] rounded-2  border-2 border-[#ECDFD8] p-3 outline-none h-[250px] md:h-[150px] text-left resize-none "
              rows={10}
              cols={30}
              type="paragraph-text"
              name="description"
              placeholder="Description (Max 511 caractères)"
            ></textarea>
          </div>
        </div>
        <p className="text-left text-xl md:text-3xl font-normal md:mr-[620px]">
          Localisation {" "}
        </p>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-y-[50px]">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[20px]">
            <div className="flex flex-col">
              <select
                {...register("wilaya")}
                name="wilaya"
                className="w-[400px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
                onChange={(wilaya) => handleWilaya(wilaya.target.value)}
              >
                <option value="">Wilaya</option>
                {Wilayas.map((wilaya) => {
                  return (
                    <option
                      className="hover:bg-akkar-orange"
                      value={wilaya.name}
                      // onChange={()=>}
                    >
                      {wilaya.code}-{wilaya.name}
                    </option>
                  );
                })}
              </select>
              {errors.wilaya ? (
                <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                  {" "}
                  {errors.wilaya.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <select
                {...register("commune")}
                name="commune"
                className="w-[400px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
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
                <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                  {" "}
                  {errors.commune.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <div className=" w-[400px] md:w-[820px] h-[50px] flex flex-row items-center p-5 border-2 border-[#ECDFD8] rounded-2">
              <div className="w-[23px] h-[23px] md:w-[25px]  md:h-[25px]   flex items-center justify-center">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={adress}
                ></img>
              </div>

              <input ref={inputLocation} onClick={()=>{setLocalisation(true);
              
              
            }}
                {...register("localisation")}
                className=" w-[370px] md:w-[790px] h-[45px] rounded-2 p-4  outline-none"
                name="localisation"
                type="text"
              ></input>
            </div>
            {errors.localisation ? (
              <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                {" "}
                {errors.localisation.message}
              </div>
            ) : null}
          </div>
        </div>
        <p className="text-left text-xl md:text-3xl font-normal md:mr-[620px]">
          Ajouter des photos
        </p>
        <div
          id="photosSection"
          className=" w-full  flex-wrap  flex flex-row items-center justify-center gap-[20px]"
        >
          <div className="w-[250px] h-[350px] flex flex-col justify-center items-center gap-y-[20px] bg-white border-2 border-dashed rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[5px]">
              <img
                src={galery}
                className=" rounded-[8px] w-[100%] h-[100%] object-cover"
              ></img>
            </div>
            <label
              for="input"
              className="text-lg text-[#B3A39B] text-center m-5 cursor-pointer"
            >
              Vous pouvez ajouter jusau'à 10 photos
            </label>
            <input
              type="file"
              multiple
              accept="image/png, image/jpg, image/gif, image/jpeg"
              name="img"
              id="input"
              onChange={selectImage}
              className="hidden"
            ></input>
          </div>

          {selectedImages.length <= 10 &&
            selectedImages &&
            selectedImages.map((image) => {
              return (
                <div className="w-[250px] h-[350px] rounded-[5px] relative">
                  <div
                    onClick={() => {
                      setSelectedImages(
                        selectedImages.filter((e) => e.img != image.img)
                      ); //display
                      setfiles(files.filter((f) => f.file != image.fl)); //data
                    }}
                    className=" cursor-pointer z-50 w-[25px] h-[25px] bg-[#FCEFE9] absolute ml-[220px] mt-[5px] flex justify-center items-center"
                  >
                    <img
                      src={exit}
                      className="w-[60%] h-[60%] object-cover"
                    ></img>
                  </div>

                  <img
                    className="w-[100%] h-[100%] object-cover rounded-[5px]"
                    src={image.img}
                  ></img>
                </div>
              );
            })}
        </div>
        {selectedImages.length > 10 ? (
          <div className="text-center text-xl text-akkar-orange">
            {" "}
            Vous ne pouvez pas ajouter plus de 10 photos,réessayez  {" "}
          </div>
        ) : null}
        <p className="text-left text-xl md:text-3xl font-normal md:mr-[620px]">
          Contact
        </p>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[25px]">
          <div className="flex flex-col">
            <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("nom")}
                className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                type="text"
                name="nom"
                placeholder="Nom"
              ></input>
            </div>
            {errors.nom ? (
              <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                {" "}
                {errors.nom.message}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("prenom")}
                className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                type="text"
                name="prenom"
                placeholder="Prénom"
              ></input>
            </div>
            {errors.prenom ? (
              <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                {" "}
                {errors.prenom.message}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[25px]">
          <div className="flex flex-col">
            <div className="w-[400px] h-[50px] flex flex-row items-center   border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("telephone")}
                className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                type="text"
                name="telephone"
                placeholder="Numéro de téléphone"
              ></input>
              <img src={tel} className="w-[25px] h-[25px] ml-[20px]"></img>
            </div>
            {errors.telephone ? (
              <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                {" "}
                {errors.telephone.message}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
              <input
                {...register("adresseannonceur")}
                className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                type="text"
                name="adresseannonceur"
                placeholder="Adresse"
              ></input>
            </div>
            {errors.adresseannonceur ? (
              <div className="text-sm text-akkar-orange text-left  mt-[0px]">
                {" "}
                {errors.adresseannonceur.message}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
            <img src={mail} className="w-[20px] h-[20px] ml-[20px]"></img>
            <input
              {...register("email")}
              className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
              type="text"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          {errors.email ? (
            <div className="text-sm text-akkar-orange text-left  mt-[0px]">
              {" "}
              {errors.email.message}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="  w-[200px] h-[50px] md:w-[300px] md:h-[60px] bg-akkar-orange text-white   text-xl md:text-[28px]"
        >
          Publier
        </button>

        {/** just to test the onSubmit methode */}
        {/** just to test the onSubmit methode */}
      </div>
      {Localisation ? (
         <Map set={setLocalisation} setPos={setCoords} dataSet={setValue}></Map>
         //set to hide the popup
         //setPos to get lat and lng in a separate object {lat,lng}
        //dataSet to get the values and display them in the input 
      ) : null}
    </form>
  );
}
