import { Link } from "react-router-dom";

const CategoryCard = ({ cat }) => {
  return (
    <>
      <Link
        to={`/Seku/products?cat=${cat.toLowerCase()}`}
        className="h-[35px] rounded-full border-[3px] border-[#000] flex flex-col items-center justify-center px-6"
      >
        {cat}
      </Link>
    </>
  );
};

export default CategoryCard;
