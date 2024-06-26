import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/index";
import { setup, products } from "../database/data";

const InsZone = () => {
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleImageClick = (data) => {
    setSelectedData(data);
    toggleModal();
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div className="ins-zone ">
      <Navbar />
      <section className="columns-2 md:columns-3 lg:columns-6 gap-2 lg:gap-4 px-[50px] lg:px-[154px] pt-[75px] lg:pt-[150px]">
        {setup.map((data, index) => (
          <img
            key={index}
            src={data.image}
            alt={`Image ${index + 1}`}
            className="bg-slate-300 mb-2 lg:mb-4 rounded-[7px] lg:rounded-[12px] hover:cursor-pointer"
            onClick={() => handleImageClick(data)}
          />
        ))}
      </section>

      {modal && selectedData && (
        <div
          className="modal-overlay w-full h-full bg-slate-800/40 p-1 fixed top-0 left-0 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="modal-content h-[80%] lg:h-[60%] w-[90vw] lg:w-[1000px] bg-white shadow-xl rounded-[12px] p-[24px] flex flex-wrap justify-between overflow-y-scroll lg:overflow-hidden ">
            <div className="modal-body flex flex-wrap justify-between w-full ">
              <img
                src={selectedData.image}
                alt={selectedData.title}
                className="rounded-[12px] basis-[100%] lg:basis-[30%] lg:w-[300px] h-fit object-cover"
              />
              <div className="modal-details ml-5 flex flex-col w-full flex-wrap basis-[100%] lg:basis-[60%] mt-4">
                <h1 className="text-3xl mb-4 font-semibold">
                  {selectedData.title}
                </h1>
                {selectedData.products.length > 0 ? (
                  <div className="product-links w-full flex flex-col">
                    {selectedData.products.map((id, index) => {
                      const item = products.find(
                        (product) => product.id === id
                      );
                      return (
                        <Link
                          key={index}
                          className="border-[1.5px] border-[#121212] rounded-[12px] py-2 px-4 mr-2 mb-2 w-fit hover:cursor-pointer text-lg"
                          to={item.buyUrl.shopee}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p>Tidak ada produk yang terkait dengan gambar ini.</p>
                )}
              </div>

              <div
                className="modal-close text-[20px] lg:text-3xl w-[35px] h-[35px] lg:h-[45px] lg:w-[45px] bg-[#121212] lg:bg-[#121212]/30 rounded-full text-white flex items-center justify-center hover:cursor-pointer absolute lg:static -translate-x-[41.5px] -translate-y-[41.5px] lg:-translate-x-0 lg:-translate-y-0"
                onClick={toggleModal}
              >
                x
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsZone;
