import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const totals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(totals).reduce((a, b) =>
    totals[a] > totals[b] ? a : b, ""
  );

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-6 w-full">
      <h2 className="text-lg font-semibold mb-2">Insights</h2>
      <p>💡 Highest Spending Category: <b>{highest}</b></p>
    </div>
  );
}