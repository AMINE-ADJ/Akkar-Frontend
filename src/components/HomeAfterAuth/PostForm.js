import React, { useEffect, useState } from "react";
import adress from "../../assets/adresse-bien.svg";
import { useForm } from "react-hook-form";
import Wilayas from "../../data/wilayas.json";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function PostForm() {
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);

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
    category: yup.string().required("Category is required"),
    area: yup.string().required("Area is required"),
    price: yup.string().required("Price is required"),
    wilaya: yup.string().required("Wilaya is required"),
    commune: yup.string().required("commune is required"),
    description: yup.string().min(511),
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
  const Categories = [
    { label: "Vente", value: "Vente" },
    { label: "Echange", value: "Echange" },
    { label: "Location", value: "Location" },
    { label: "Location pour vacances", value: "Location pour vacances" },
  ];

  const formSubmitHandler = (data) => {
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full min-w-fit h-[1500px] mt-[100px] flex justify-center "
    >
      <div className="md:w-[1000px] md:h-fit flex flex-col items-center md:gap-y-[30px] p-5">
        <p className="text-left text-xl md:text-3xl font-normal md:mr-[620px]">
          Real estate info
        </p>
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
                <div className="text-sm text-akkar-orange text-left absolute  mt-[50px]">
                  {" "}
                  {errors.type.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <select
                {...register("category")}
                name="category"
                className="w-[400px] h-[50px] rounded-2 p-3 border-2 border-[#ECDFD8] outline-none"
              >
                <option value="">Category</option>
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
              {errors.category ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {" "}
                  {errors.category.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[25px] md:gap-x-[25px]">
            <div className="flex flex-col">
              <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
                <input
                  {...register("area")}
                  className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                  type="number"
                  name="area"
                  placeholder="Area"
                ></input>

                <div className="md:w-[50px]  md:h-[50px]  text-center flex items-center justify-center">
                  M^2
                </div>
              </div>
              {errors.area ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {" "}
                  {errors.area.message}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <div className="w-[400px] h-[50px] flex flex-row items-center  border-2 border-[#ECDFD8] rounded-2">
                <input
                  {...register("price")}
                  className="w-[330px] h-[45px] rounded-2 p-5  outline-none"
                  type="number"
                  name="price"
                  placeholder="Price"
                ></input>

                <div className="md:w-[50px]  md:h-[50px]  text-center flex items-center justify-center">
                  DA
                </div>
              </div>
              {errors.price ? (
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
                  {" "}
                  {errors.price.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <textarea
              className=" w-[400px] md:w-[820px] rounded-2  border-2 border-[#ECDFD8] p-3 outline-none h-[250px] md:h-[150px] text-left resize-none "
              rows={10}
              cols={30}
              type="paragraph-text"
              name="description"
              placeholder="Description (Max 511 caractres)"
            ></textarea>
          </div>
        </div>
        <p className="text-left text-xl md:text-3xl font-normal md:mr-[550px]">
          localisation du bien{" "}
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
                <div className="text-sm text-akkar-orange text-left absolute mt-[50px]">
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

              <input
                className=" w-[370px] md:w-[790px] h-[45px] rounded-2 p-4  outline-none"
                type="text"
                name="localisation"
                placeholder="Localisation"
              ></input>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>{" "}
        {/** just to test the onSubmit methode */}
      </div>
    </form>
  );
}
