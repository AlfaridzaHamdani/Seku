import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import { products } from "../database/data";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("cat");

    if (category) {
      const decodedCategory = decodeURIComponent(category);
      setSelectedCategory(decodedCategory.toLowerCase());

      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === selectedCategory
        );

  return (
    <div>
      <Navbar />
      <section className="px-[30px] lg:px-[154px] flex flex-wrap justify-between pt-[80px] lg:pt-[150px]">
        <div className="w-[350px] xl:w-[200px] xl:border-r-2 basis-[100%] xl:basis-[15%] flex flex-wrap xl:flex-nowrap  xl:flex-col xl:fixed">
          <h2 className="text-lg font-semibold hidden xl:block">Kategori</h2>
          {categories.map((cat) => (
            <div key={cat} className="">
              <button
                className="ml-2"
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full lg:ml-10 basis-[100%] xl:basis-[80%] xl:pl-[20vw]">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
