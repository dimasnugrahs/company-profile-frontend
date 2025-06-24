import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TabunganPDF from "./TabunganPDF";

import { BlobProvider } from "@react-pdf/renderer";

const SimulasiTabungan = () => {
  const [nama, setNama] = useState("");
  const [setoranBulanan, setSetoranBulanan] = useState("");
  const [jangkaWaktu, setJangkaWaktu] = useState("");
  const [bungaTahunan, setBungaTahunan] = useState("");
  const [hasil, setHasil] = useState([]);
  const [ringkasan, setRingkasan] = useState(null);

  const hitungSimulasi = () => {
    const nominal = parseInt(setoranBulanan);
    const bulan = parseInt(jangkaWaktu);
    const bungaPerBulan = parseFloat(bungaTahunan) / 12 / 100;

    let saldo = 0;
    let totalSetoran = 0;
    let totalBunga = 0;
    let totalPajak = 0;
    const data = [];

    for (let i = 1; i <= bulan; i++) {
      totalSetoran += nominal;
      let bunga = Math.floor(saldo * bungaPerBulan);

      let pajakBunga = 0;
      if (saldo > 7500000) {
        pajakBunga = Math.floor(bunga * 0.2);
        bunga -= pajakBunga;
        totalPajak += pajakBunga;
      }

      totalBunga += bunga;
      saldo += nominal + bunga;

      data.push({
        bulan: i,
        setoran: nominal,
        bunga: bunga,
        pajak: pajakBunga,
        akumulasi: Math.floor(saldo),
      });
    }

    setRingkasan({
      totalSetoran,
      totalBunga: Math.floor(totalBunga),
      totalPajak: totalPajak,
      totalSaldo: Math.floor(saldo),
    });

    setHasil(data);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Nama Nasabah"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Setoran Bulanan (Rp)"
          value={setoranBulanan}
          onChange={(e) => setSetoranBulanan(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={jangkaWaktu}
          onChange={(e) => setJangkaWaktu(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Pilih Tenor</option>
          <option value="6">6 bulan</option>
          <option value="12">12 bulan</option>
          <option value="24">24 bulan</option>
        </select>
        <input
          type="number"
          placeholder="Bunga Tahunan (%)"
          value={bungaTahunan}
          onChange={(e) => setBungaTahunan(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={hitungSimulasi}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Hitung
      </button>

      {ringkasan && (
        <div className="bg-gray-50 p-4 rounded-md text-sm space-y-1">
          <p>
            <strong>Total Setoran:</strong> Rp{" "}
            {ringkasan.totalSetoran.toLocaleString()}
          </p>
          <p>
            <strong>Total Bunga:</strong> Rp{" "}
            {ringkasan.totalBunga.toLocaleString()}
          </p>
          <p>
            <strong>Total Pajak:</strong> Rp{" "}
            {ringkasan.totalPajak.toLocaleString()}
          </p>
          <p>
            <strong>Total Tabungan Saat Jatuh Tempo:</strong> Rp{" "}
            {ringkasan.totalSaldo.toLocaleString()}
          </p>
        </div>
      )}

      {hasil.length > 0 && (
        <>
          <BlobProvider
            document={
              <TabunganPDF nama={nama} ringkasan={ringkasan} hasil={hasil} />
            }
          >
            {({ url, loading, error }) =>
              loading ? (
                <button disabled className="...">
                  Menyiapkan PDF...
                </button>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <button
                  onClick={() => window.open(url, "_blank")}
                  className="bg-green-600 text-white px-4 py-2 rounded mb-4"
                >
                  Buka PDF di Tab Baru
                </button>
              )
            }
          </BlobProvider>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">Bulan ke</th>
                  <th className="border px-2 py-1">Setoran (Rp)</th>
                  <th className="border px-2 py-1">Bunga (Rp)</th>
                  <th className="border px-2 py-1">Pajak (Rp)</th>
                  <th className="border px-2 py-1">Akumulasi (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {hasil.map((item) => (
                  <tr key={item.bulan}>
                    <td className="border px-2 py-1 text-center">
                      {item.bulan}
                    </td>
                    <td className="border px-2 py-1 text-right">
                      Rp {item.setoran.toLocaleString()}
                    </td>
                    <td className="border px-2 py-1 text-right">
                      Rp {item.bunga.toLocaleString()}
                    </td>
                    <td className="border px-2 py-1 text-right">
                      Rp {item.pajak.toLocaleString()}
                    </td>
                    <td className="border px-2 py-1 text-right">
                      Rp {item.akumulasi.toLocaleString()}
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

export default SimulasiTabungan;
