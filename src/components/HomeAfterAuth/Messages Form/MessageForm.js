import React from "react";
import close from "../../../assets/Close.svg";
import phone from "../../../assets/telephone.svg";
import mail from "../../../assets/@.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
export default function MessageForm(props) {
  const registerSchema = yup.object().shape({
    name: yup.string().required("Le nom est obligatoire"),
    email: yup
      .string()
      .email("Format invalide")
      .required("L'Email est obligatoire"),
    phone: yup.string().required("Le numéro de téléphone est obligatoire").min(8),
    offer: yup.string().required("L'offre est obligatoire"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const formSubmitHandler = (data) => {
    var sendData = {
      annonce: props.PostId,
      offre: data.offer,
      telephone: data.phone,
      nom: data.name,
      email: data.email,
    };
    axios
      .post("http://127.0.0.1:8000/api/sendmessage/", sendData)
      .then((res) => {
      })
      .catch((e) => {
        console.log(e);
      });
    props.set(false);
  };
  return (
    <div>
      <div className=" w-full flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        {/*content*/}
        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          autoComplete="off"

          className=" text-lg  w-[350px] rounded-lg shadow-lg relative flex flex-col xl:gap-y-[20px] gap-y-[14px] items-center h-[520px] xl:h-[580px] p-5 mt-[80px] xl:mt-[70px] bg-white outline-none focus:outline-none"
        >
          {/*header*/}

          <div className="flex w-full justify-between  items-center">
            <p className="text-lg">Contactez le vendeur</p>
            <div className="cursor-pointer" onClick={() => props.set(false)}>
              <img src={close} className="w-[20px] h-[20px]"></img>
            </div>
          </div>
          <div className="w-[350px] h-[1px] bg-[#58595B]"></div>
          <div className="flex flex-col gap-y-[7px] mt-[-18px]">
            <label>Nom et prénom</label>
            <div className="flex flex-col">
              <input
              
                className=" text-sm px-2 w-[260px] h-[35px] border-2 border-[#ECDFD8] outline-none"
                name="name"
                {...register("name")}
              ></input>
              {errors.name ? (
                <div className="md:text-sm text-akkar-orange text-left absolute  mt-[35px]">
                  {" "}
                  {errors.name.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label>Email</label>
            <div className="flex flex-col">
              <div className="flex flex-row border-2 gap-x-[5px] border-[#ECDFD8] items-center">
                <img src={mail} className="w-[20px] h-[20px] ml-[10px]"></img>
                <input
                  className="w-[225px] h-[35px]  outline-none"
                  name="email"
                  {...register("email")}
                ></input>
                {errors.email ? (
                  <div className="text-sm text-akkar-orange text-left absolute  mt-[60px]">
                    {errors.email.message}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label>Numéro de téléphone</label>
            <div className="flex flex-col">
              <div className="flex flex-row border-2 gap-x-[5px] border-[#ECDFD8] items-center">
                <img src={phone} className="w-[20px] h-[20px] ml-[10px]"></img>
                <input
                  className="w-[225px] h-[35px]  outline-none"
                  name="phone"
                  {...register("phone")}
                ></input>
              </div>
              {errors.phone ? (
                <div className="text-sm text-akkar-orange text-left absolute  mt-[40px]">
                  {errors.phone.message}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label>Offer message</label>
            <div className="flex flex-col">
              <textarea
                className="px-2 w-[260px] h-[100px] border-2 border-[#ECDFD8] resize-none outline-none"
                name="offer"
                {...register("offer")}
              ></textarea>
              {errors.offer ? (
                <div className="text-sm text-akkar-orange text-left absolute  mt-[100px]">
                  {errors.offer.message}
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-[260px] h-[40px] rounded-3 mt-3 bg-akkar-orange text-white text-center rounded-3 hover:bg-akkar-orange-second hover:text-akkar-orange"
          >
            Envoyer offre
          </button>
        </form>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
