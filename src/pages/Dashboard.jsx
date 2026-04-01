import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import SummaryCard from "../components/SummaryCard";
import Charts from "../components/Charts";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Dashboard() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center"
                             : "bg-white text-black min-h-screen p-6 flex flex-col items-center"}>

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="w-full max-w-4xl">
        <RoleSwitcher />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
        <SummaryCard title="Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>

      <div className="w-full max-w-4xl">
        <Charts />
      </div>

      <div className="w-full max-w-4xl">
        <TransactionTable />
      </div>

      <div className="w-full max-w-4xl">
        <Insights />
      </div>

    </div>
  );
}