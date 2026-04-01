import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCard({ title }) {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const value =
    title === "Income" ? income :
    title === "Expenses" ? expense :
    balance;

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow text-center hover:scale-105 transition-transform duration-300">
      <h2 className="text-gray-400 mb-2">{title}</h2>
      <p className="text-2xl font-bold">₹ {value}</p>
    </div>
  );
}