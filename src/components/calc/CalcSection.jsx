import { useState } from "react";
import SimulasiTabungan from "./SimulasiTabungan";
import SimulasiDeposito from "./SimulasiDeposito";
import SimulasiKredit from "./SimulasiKredit";
import LayouDefaultContent from "../../layouts/LayoutDefaultContent";
import Breadcrumbs from "../Breadcrumbs";

const CalcSection = () => {
  const [selectedSimulasi, setSelectedSimulasi] = useState("tabungan");

  const renderSimulasi = () => {
    switch (selectedSimulasi) {
      case "tabungan":
        return <SimulasiTabungan />;
      case "deposito":
        return <SimulasiDeposito />;
      case "kredit":
        return <SimulasiKredit />;
      default:
        return null;
    }
  };

  return (
    <LayouDefaultContent>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Kalkulator Simulasi" }, // item terakhir biasanya tidak punya link
        ]}
      />
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedSimulasi("tabungan")}
            className={`px-4 py-2 rounded ${
              selectedSimulasi === "tabungan"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Simulasi Tabungan
          </button>
          <button
            onClick={() => setSelectedSimulasi("deposito")}
            className={`px-4 py-2 rounded ${
              selectedSimulasi === "deposito"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Simulasi Deposito
          </button>
          <button
            onClick={() => setSelectedSimulasi("kredit")}
            className={`px-4 py-2 rounded ${
              selectedSimulasi === "kredit"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Simulasi Kredit
          </button>
        </div>

        <div className="bg-white shadow-md rounded p-6">{renderSimulasi()}</div>
      </div>
    </LayouDefaultContent>
  );
};

export default CalcSection;
