import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const Financial = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "To secure your future, aim to save at least 20% of your monthly income, invest wisely...";
  const fullText =
    "To secure your future, aim to save at least 20% of your monthly income, invest in low-risk portfolios, and avoid unnecessary expenses. Building an emergency fund with 3–6 months of expenses is also key to long-term stability.";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 pb-2 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Financial Advice
        </h1>
        <Button
          icon={<PlusOutlined />}
          size="small"
          className="flex items-center"
        />
      </div>

      {/* Collapsible Text with Smooth Transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-96" : "max-h-20"
        }`}
      >
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {expanded ? fullText : shortText}
        </p>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-500 text-sm hover:underline focus:outline-none"
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Financial;
