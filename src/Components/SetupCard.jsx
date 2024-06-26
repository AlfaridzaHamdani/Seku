import React, { useState } from "react";
import { products, setup } from "../database/data";
import { Link } from "react-router-dom";

const SetupCard = ({ image, title }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const selected = setup.find((item) => item.title === title);
  const items = selected.products;

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      <div className="w-[304px] h-[326px] shadow-xl p-[24px] rounded-[12px] flex flex-col gap-4">
        <img
          src={image}
          alt=""
          className="rounded-[12px] h-[173px] object-cover "
        />
        <h1>{title}</h1>
        <div
          className="bg-[#121212] text-white text-center py-3 rounded-[12px] hover:cursor-pointer"
          onClick={toggleModal}
        >
          Detail
        </div>
      </div>

      {modal && (
        <div
          className="modal-overlay w-full h-full bg-slate-800/40 fixed top-0 left-0 flex items-center justify-center z-[10]"
          onClick={closeModal}
        >
          <div className="modal-content h-[500px] lg:h-[60%] w-[90vw] lg:w-[1000px] bg-white shadow-xl rounded-[12px] p-[24px] flex justify-between z-[15] overflow-y-scroll lg:overflow-hidden">
            <div className="modal-body flex flex-wrap justify-between w-full">
              <img
                src={image}
                alt=""
                className="rounded-[12px] w-full lg:w-[300px]  object-cover lg:basis-[30%]"
              />
              <div className="modal-details ml-5 flex flex-col w-full lg:basis-[60%]">
                <h1 className="text-3xl mb-4 font-semibold mt-3 lg:mt-0">
                  {title}
                </h1>
                {items.map((item, i) => {
                  const x = products.find((product) => product.id === item);
                  return (
                    <div
                      key={i}
                      className="py-2 px-6 text-[14px] border-[2px] border-[#121212] w-fit rounded-[12px] mb-2"
                    >
                      <Link to={x.buyUrl.shopee} target="blank">
                        {x.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="modal-close text-[20px] lg:text-3xl leading-none w-[35px] h-[35px] lg:h-[45px] lg:w-[45px] bg-[#121212] lg:bg-[#121212]/30 rounded-full text-white flex items-center justify-center hover:cursor-pointer absolute -translate-x-[41.5px] -translate-y-[41.5px] lg:-translate-x-0 lg:-translate-y-0 lg:static"
              onClick={toggleModal}
            >
              x
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SetupCard;
