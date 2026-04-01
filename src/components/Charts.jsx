import {
  PieChart, Pie, Tooltip, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Legend,
  Cell, ResponsiveContainer
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  const categoryData = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map(key => ({
    name: key,
    value: categoryData[key]
  }));

  const COLORS = ["#4ade80", "#60a5fa", "#f87171", "#facc15", "#a78bfa"];

  const monthlyData = {};
  transactions.forEach(t => {
    const month = t.date.slice(0, 7);
    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }
    if (t.type === "income") {
      monthlyData[month].income += t.amount;
    } else {
      monthlyData[month].expense += t.amount;
    }
  });

  const barData = Object.values(monthlyData);

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-6 w-full flex flex-col items-center gap-10">
      
      <h2 className="text-lg font-semibold">Spending Breakdown</h2>

      <PieChart width={300} height={300}>
        <Pie data={pieData} dataKey="value" outerRadius={100}>
          {pieData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <h2 className="text-lg font-semibold">Monthly Comparison</h2>

      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4ade80" animationDuration={1000} />
          <Bar dataKey="expense" fill="#f87171" animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}