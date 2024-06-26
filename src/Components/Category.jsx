import CategoryCard from "./CategoryCard";

const Category = () => {
  const categories = [
    "Monitor",
    "Keyboard",
    "Mouse",
    "Headset",
    "Laptop",
    "Deskmat",
    "Lampu",
    "Speaker",
    "Hiasan Dinding",
  ];

  return (
    <section className="px-[50px] lg:px-[154px] mt-5">
      <h1 className="text-[22px] font-semibold mb-5">Kategori</h1>
      <div className="flex flex-wrap gap-[15px] mb-3">
        {categories.map((cat) => (
          <CategoryCard key={cat} cat={cat} />
        ))}
        <a
          href="/products"
          className="h-[35px] rounded-full border-[3px] border-[#000] flex flex-col items-center justify-center px-6"
        >
          Lainnya
        </a>
      </div>
    </section>
  );
};

export default Category;
