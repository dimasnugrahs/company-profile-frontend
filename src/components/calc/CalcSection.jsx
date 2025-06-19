import { useState } from "react";
import CalcTabungan from "./_components/CalcTabungan";
import CalcKredit from "./_components/CalcKredit";
import CalcDeposito from "./_components/CalcDeposito";

const CalcSection = () => {
  const [pilihan, setPilihan] = useState("tabungan");

  const renderCalc = () => {
    switch (pilihan) {
      case "tabungan":
        return <CalcTabungan />;
      case "deposito":
        return <CalcDeposito />;
      case "kredit":
        return <CalcKredit />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Simulasi Produk
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setPilihan("tabungan")}
          className={`px-4 py-2 rounded-md font-semibold ${
            pilihan === "tabungan"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Tabungan
        </button>
        <button
          onClick={() => setPilihan("deposito")}
          className={`px-4 py-2 rounded-md font-semibold ${
            pilihan === "deposito"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Deposito
        </button>
        <button
          onClick={() => setPilihan("kredit")}
          className={`px-4 py-2 rounded-md font-semibold ${
            pilihan === "kredit"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Kredit
        </button>
      </div>

      <div>{renderCalc()}</div>
    </div>
  );
};

export default CalcSection;
