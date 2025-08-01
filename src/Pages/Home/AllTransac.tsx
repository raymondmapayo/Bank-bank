import { CalendarOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const groupedTransac = [
  {
    id: 1,
    name: "Raymond Mpaayo",
    amount: 2000,
    date: "24/07/2025",
    time: "10:30 AM",
    img: "/avatar-1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    amount: 1500,
    date: "23/07/2025",
    time: "3:15 PM",
    img: "/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    amount: 500,
    date: "22/07/2025",
    time: "1:45 PM",
    img: "/avatar-3.jpg",
  },
];

const AllTransac = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 pb-8 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          All Transactions
        </h1>
        <Button icon={<PlusOutlined />} className="flex items-center"></Button>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-4">
        {groupedTransac.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            {/* Left Side: Image + Details */}
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                {/* Name (larger text) */}
                <span className="block text-lg font-bold text-gray-900 dark:text-gray-100">
                  {item.name}
                </span>
                {/* Date + Time */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <CalendarOutlined />
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Amount */}
            <span className="text-lg font-bold text-orange-500">
              ${item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTransac;
