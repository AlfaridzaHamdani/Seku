import Marquee from "react-fast-marquee";
const categories = [
  "Monitor",
  "Keyboard",
  "Mouse",
  "Deskmat",
  "Laptop",
  "Webcam",
  "Kursi",
  "Meja",
  "Headset",
  "Speaker",
  "Microphone",
  "Gamepad",
  "Hiasan Dinding",
];

const RunningText = () => {
  return (
    <div className="bg-[#121212] h-[100px] flex">
      <Marquee autoFill={true} pauseOnHover={true} speed={100}>
        {categories.map((category, index) => (
          <a key={index} className="text-white mx-4 hover:cursor-pointer">
            {category}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default RunningText;
