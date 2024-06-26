import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (product.title.length > 25) {
    product.title = product.title.slice(0, 25) + " ...";
  }

  return (
    <a
      href={product.buyUrl.shopee}
      target="_blank"
      className="w-[150px] h-[300px] md:h-[300px] md:w-[200px] shadow-xl p-4 rounded-[12px] flex flex-col justify-between mb-4"
    >
      <img
        src={product.imageUrl}
        alt=""
        className="rounded-[12px] border h-[100px] md:h-[150px] w-full object-cover"
      />
      <h3 className="text-[14px] md:text-[16px] font-semibold">
        {product.title}
      </h3>
      <Link className="py-0.5 bg-[#121212] text-white px-2 rounded-full text-[12px] border-2 w-fit">
        {product.category}
      </Link>
      <p className="text-[12px] md:text-[17px]">IDR {product.price}</p>
    </a>
  );
};

export default ProductCard;
