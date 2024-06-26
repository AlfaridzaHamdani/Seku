import SetupCard from "./SetupCard";
import { setup } from "../database/data";
import { Link } from "react-router-dom";

const Setup = () => {
  return (
    <section className="px-[50px] lg:px-[154px] pb-[100px] mt-12 ">
      <h1 className="text-[22px] font-semibold mb-5 ">Referensi Setup</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 justify-items-center">
        {setup.slice(0, 6).map((item) => (
          <SetupCard key={item.title} image={item.image} title={item.title} />
        ))}
      </div>
      <div className="flex justify-center  text-white mt-6">
        <h2 className="bg-[#121212] w-fit py-2 px-6 rounded-[12px]">
          <Link to="/Seku/inszone">Lainnya</Link>
        </h2>
      </div>
    </section>
  );
};

export default Setup;
