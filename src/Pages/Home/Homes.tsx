import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Homes = () => {
  return (
    <div
      className="rounded-2xl shadow-md p-6 transition-colors duration-300 max-w-full min-h-[300px] flex flex-col justify-between text-white"
      style={{
        background: `linear-gradient(
          160deg,
          #0d0d0d 0%,
          #1a1a1a 40%,
          #3b2b1e 75%,
          #d4af37 100%
        )`,
      }}
    >
      {/* Title + Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#FFD700] drop-shadow-lg">
          Premium Visa Card
        </h1>
        <Button
          icon={<PlusOutlined />}
          className="flex items-center text-black bg-[#FFD700] hover:bg-yellow-400 border-none"
        ></Button>
      </div>

      {/* Card Details directly on BG */}
      <div className="mt-10">
        <div className="text-3xl tracking-widest font-mono text-[#FFD700] drop-shadow-md mb-8">
          **** **** **** 9876
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-300 text-sm mb-1">Card Holder</p>
            <span className="text-lg font-semibold text-[#FFD700]">
              John Doe
            </span>
          </div>

          {/* Overlapping Visa-style circles */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#1A1F71] opacity-90 shadow-md shadow-blue-900/50 -mr-3"></div>
            <div className="w-10 h-10 rounded-full bg-[#FAAA13] opacity-90 shadow-md shadow-yellow-500/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
