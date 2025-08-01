import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { HiOutlineLightBulb } from "react-icons/hi";
const Subs = () => {
  const items = [
    { title: "LinkedIn due 24/07/2025", price: "$20,000" },
    { title: "Canva due 30/07/2025", price: "$15,000" },
    { title: "Adobe due 01/08/2025", price: "$10,000" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 pb-6 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Subscription
        </h1>
        <Button
          icon={<PlusOutlined />}
          size="small"
          className="flex items-center"
        />
      </div>

      {/* Subscription List */}
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-gray-800 dark:text-gray-200"
          >
            {/* Left: Bulb Icon and Title */}
            <div className="flex items-center gap-3">
              <HiOutlineLightBulb className="text-xl text-yellow-500" />
              <span className="font-medium">{item.title}</span>
            </div>
            {/* Right: Price */}
            <span className="font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subs;
