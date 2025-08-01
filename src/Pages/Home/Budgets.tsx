import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { IoMdCheckboxOutline } from "react-icons/io";

const Budgets = () => {
  // Only the grouped items (Subscription, Investments) go inside the shared background
  const groupedBudgets = [
    {
      title: "Subscription",
      subtitle: "Automated",
      amount: "$22,000",
      hasIcon: true,
    },
    {
      title: "Investments",
      subtitle: "Stocks & Bonds",
      amount: "$50,000",
      hasIcon: true,
    },
    {
      title: "Investments",
      subtitle: "Stocks & Bonds",
      amount: "$50,000",
      hasIcon: true,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 sm:p-6 transition-colors duration-300 max-w-full">
      {/* Title + Button */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Budgets
        </h1>
        <Button icon={<PlusOutlined />} className="flex items-center"></Button>
      </div>

      {/* Cash (standalone, NOT inside background) */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Cash
        </p>
        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
          $100,000
        </span>
      </div>

      {/* Shared background for Subscription & Investments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        {groupedBudgets.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-start py-3 ${
              index !== groupedBudgets.length - 1
                ? "border-b border-gray-200 dark:border-gray-700"
                : ""
            }`}
          >
            {/* Left side: Icon + Title + Subtitle */}
            <div className="flex items-start gap-3">
              {item.hasIcon && (
                <IoMdCheckboxOutline className="text-green-600 text-2xl mt-1" />
              )}
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </p>
                {item.subtitle && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>

            {/* Right side (Amount) */}
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budgets;
