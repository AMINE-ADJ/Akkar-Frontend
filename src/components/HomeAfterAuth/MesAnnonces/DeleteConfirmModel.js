import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Trash from "../../../assets/trash.png";
export default function DeleteConfirModal({ id }) {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const DeleteAnnonce = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/supprimerannonce/${id}`)
      .then((res) => {
        setShowModal(false);
        console.log(res);
        navigate("/authenticated/mesannonces");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-akkar-orange-second text-akkar-orange font-Inter py-2 px-9 rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
      >
        <ion-icon name="trash-outline"></ion-icon> Supprimer Annonce
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl px-10 py-1">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full px-20 py-10 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-center gap-5 justify-center rounded-t">
                  <img className="w-24" src={Trash} alt="icon" />

                  <h3 className="mt-5 text-3xl text-center font-Inter font-akkar-bold">
                    Voulez vous vraiment <br></br>
                    supprimer cette Annonce ?
                  </h3>
                </div>

                <div className="flex items-center justify-center gap-10 p-6 rounded-b">
                  <button
                    className="bg-gray-900 font-Inter font-akkar-bold text-white active:bg-gray-800  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-akkar-orange font-Inter font-akkar-bold text-white active:bg-red-500  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={DeleteAnnonce}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
