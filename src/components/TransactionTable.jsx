import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionTable() {
  const { transactions, search, setSearch, role } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-6 w-full">
      
      <h2 className="text-lg font-semibold mb-4 text-center">
        Transactions
      </h2>

      <input
        type="text"
        placeholder="Search by category..."
        className="p-2 mb-4 w-full rounded bg-gray-700 text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 border-b">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="border-b hover:bg-gray-700">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹ {t.amount}</td>
              <td className={t.type === "income" ? "text-green-400" : "text-red-400"}>
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button className="mt-4 bg-blue-500 px-4 py-2 rounded w-full hover:bg-blue-600 transition">
          + Add Transaction
        </button>
      )}
    </div>
  );
}