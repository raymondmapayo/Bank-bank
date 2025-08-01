import { PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useEffect, useState } from "react";

const Loan = () => {
  const [percent, setPercent] = useState(0);

  // Animate the circle to fill up to 50%
  useEffect(() => {
    const timeout = setTimeout(() => setPercent(50), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 pb-4 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
          Loans
        </h1>
        <Button
          icon={<PlusOutlined />}
          size="small"
          className="flex items-center"
        />
      </div>

      {/* Circular Progress Bar with Gradient and Details */}
      <div className="flex items-center gap-4">
        {/* Progress Circle */}
        <div className="relative">
          <Progress
            type="circle"
            percent={percent}
            size={110} // Smaller circle
            strokeWidth={10} // Thinner ring
            strokeColor={{
              "0%": "#ff7a45", // Gradient top color
              "100%": "#ffd591", // Gradient bottom color
            }}
            format={(percent) => `${percent}%`}
          />
        </div>

        {/* Text Details on the Right */}
        <div className="flex flex-col gap-3">
          {/* Savings Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
              Savings
            </h3>
            <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              $500,000
            </span>
          </div>

          {/* Target Reached Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
              Target Reached
            </h3>
            <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              $250,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
