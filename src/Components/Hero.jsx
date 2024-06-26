import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-[250px] lg:py-[150px]">
      <h1 className="text-[24px] lg:text-[50px] font-bold text-center">
        Find Your Inspiration <br />
        For Your Setup
      </h1>
      <p className="text-[16px] lg:text-[22px] text-center lg:text-start">
        Beautify your setup <br className="lg:hidden" /> with various
        inspirations
      </p>
      <Link
        to="/inszone"
        className="border-[1.6px] border-black px-6 py-2 rounded-full mt-3 lg:mt-5"
      >
        Go to InsZone
      </Link>
    </section>
  );
};

export default Hero;
