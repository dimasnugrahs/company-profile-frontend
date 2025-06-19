import React, { useState } from "react";
import { hitungTabungan } from "../../../utils/formulas";

const CalcTabungan = () => {
  const [setoran, setSetoran] = useState(100000);
  const [bulan, setBulan] = useState(12);
  const [bunga, setBunga] = useState(4);
  const [hasil, setHasil] = useState(null);

  const handleHitung = () => {
    const result = hitungTabungan(setoran, bulan, bunga);
    setHasil(result);
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Simulasi Tabungan Berjangka
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Setoran Bulanan (Rp)
          </label>
          <input
            type="number"
            value={setoran}
            onChange={(e) => setSetoran(+e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tenor (bulan)
          </label>
          <select
            value={bulan}
            onChange={(e) => setBulan(+e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value={6}>6 bulan</option>
            <option value={12}>12 bulan</option>
            <option value={24}>24 bulan</option>
            <option value={36}>36 bulan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bunga per tahun (%)
          </label>
          <input
            type="number"
            value={bunga}
            onChange={(e) => setBunga(+e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      <button
        onClick={handleHitung}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition mb-6"
      >
        Hitung
      </button>

      {hasil && (
        <>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded text-sm mb-6">
            <p>
              <strong>Total Setoran:</strong> Rp{hasil.setoran.toLocaleString()}
            </p>
            <p>
              <strong>Total Bunga:</strong> Rp{hasil.bunga.toLocaleString()}
            </p>
            <p>
              <strong>Total Tabungan Saat Jatuh Tempo:</strong>{" "}
              <span className="text-blue-700 font-semibold">
                Rp{hasil.total.toLocaleString()}
              </span>
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-[700px] border text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Bulan ke</th>
                  <th className="border px-4 py-2 text-left">Setoran (Rp)</th>
                  <th className="border px-4 py-2 text-left">Bunga (Rp)</th>
                  <th className="border px-4 py-2 text-left">Akumulasi (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {hasil.rincian.map((item, i) => (
                  <tr key={i} className="even:bg-gray-50">
                    <td className="border px-4 py-2">{item.bulan}</td>
                    <td className="border px-4 py-2">
                      Rp{item.setoran.toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">
                      Rp{item.bunga.toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">
                      Rp{item.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default CalcTabungan;
