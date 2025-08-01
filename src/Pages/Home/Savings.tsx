import { PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";

const Savings = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 pb-3 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Savings
        </h1>
        <Button
          icon={<PlusOutlined />}
          size="small"
          className="flex items-center"
        />
      </div>

      {/* Main Savings Row */}
      <div className="flex items-start gap-4">
        {/* Left: Image */}
        <img
          src="/UM.jpg" // Placeholder image (replace with your image)
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        {/* Right: Details */}
        <div className="flex-1">
          {/* Title and Amount */}
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-gray-800 dark:text-gray-100 text-base sm:text-lg">
              Pay Kid Rox Bross
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-200 text-base sm:text-lg">
              $20,000
            </span>
          </div>

          {/* Date Taken and Amount Left */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Date Taken: 20/09/2023
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Amount Left: $10,000
            </span>
          </div>

          {/* Progress Bar */}
          <Progress
            percent={50}
            strokeColor={{
              "0%": "#ff7a45", // Gradient start
              "100%": "#ffd591", // Gradient end
            }}
            showInfo={false}
            strokeWidth={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Savings;
