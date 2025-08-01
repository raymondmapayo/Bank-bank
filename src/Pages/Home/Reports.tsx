import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", value: 120, low: 60 },
  { name: "Feb", value: 200, low: 100 },
  { name: "Mar", value: 150, low: 70 },
  { name: "Apr", value: 80, low: 40 },
  { name: "May", value: 170, low: 85 },
];

const Reports = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-2 min-w-[130px] transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Reports
        </h1>
        <Button
          icon={<PlusOutlined />}
          size="small"
          className="flex items-center"
        />
      </div>

      {/* Bar Chart */}
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={18}>
            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="barGradientOrange"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#ff7a45" />
                <stop offset="100%" stopColor="#ffd591" />
              </linearGradient>
              <linearGradient id="barGradientBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#87e8de" />
                <stop offset="100%" stopColor="#91caff" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
              shapeRendering="crispEdges"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#4b5563",
                fontSize: 12,
                fontWeight: 600,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#4b5563",
                fontSize: 12,
                fontWeight: 600,
              }}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />

            {/* Orange Gradient Bar */}
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              fill="url(#barGradientOrange)"
              isAnimationActive={false}
            />

            {/* Blue Gradient Bar */}
            <Bar
              dataKey="low"
              radius={[6, 6, 0, 0]}
              fill="url(#barGradientBlue)"
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
