import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import Navbar from "../Components/Header/Navbar";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { FiMinus } from "react-icons/fi";

const Statistics = () => {
  const cards = useLoaderData();

  const [myDonation = 0, setMyDonation] = useState(0);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donate")) || {};
    const myTotalDonation = donatedItems.length;

    setMyDonation(myTotalDonation);
  }, []);

  const totalDonation = cards.length - myDonation;

  const data = [
    { name: "Total Donation", value: totalDonation },
    { name: "Your Donation", value: myDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-xl font-bold font-inter"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="flex gap-1 font-medium font-inter color-2 backdrop-blur-lg bg-white/40 rounded-lg px-4 py-2">
          <p>{data.name}</p>
          <p>{data.value}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => (
    <div className="flex justify-between items-center gap-2 font-inter pt-4">
      <div className="flex items-center gap-[2px]">
        <span className="text=lg font-semibold">Your Donation</span>
        <FiMinus
          style={{ color: COLORS[1] }}
          className="text-8xl -ml-3"
        ></FiMinus>
      </div>
      <div className="flex items-center gap-[2px]">
        <span className="text=lg font-semibold -mr-3">Total Donation</span>
        <FiMinus
          style={{ color: COLORS[0] }}
          className="text-8xl -mr-3"
        ></FiMinus>
      </div>
    </div>
  );

  return (
    <div className="mx-10 lg:mx-40 mb-20 -mt-20 lg:-mt-10">
      <div className="pt-20 lg:pt-10 pb-6">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center h-[70vh]">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            isAnimationActive={true}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Statistics;
