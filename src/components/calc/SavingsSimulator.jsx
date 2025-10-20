import React, { useState, useRef } from "react"; // Import useRef
// Hapus import html2canvas dan jspdf
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// Import library html2pdf.js
import html2pdf from "html2pdf.js";

// Menggunakan arrow function untuk mendefinisikan komponen fungsional
const SavingsSimulator = () => {
  // Ref untuk elemen HTML yang akan diubah menjadi PDF
  const contentRef = useRef(null);

  // State untuk menyimpan nilai-nilai input dari pengguna
  const [namaPengguna, setNamaPengguna] = useState("");
  const [setoranBulanan, setSetoranBulanan] = useState(0); // Jumlah setoran rutin setiap bulan
  const [jangkaWaktuBulan, setJangkaWaktuBulan] = useState(12); // Durasi menabung dalam bulan
  const [bungaTahunanPersen, setBungaTahunanPersen] = useState(4); // Suku bunga tahunan dalam persen

  // State untuk menyimpan hasil ringkasan simulasi
  const [ringkasanHasil, setRingkasanHasil] = useState(null);
  // State untuk menyimpan data detail per bulan yang akan ditampilkan di tabel
  const [dataTabelSimulasi, setDataTabelSimulasi] = useState([]);
  // State untuk menampilkan pesan error atau informasi kepada pengguna
  const [message, setMessage] = useState("");

  // Konstanta untuk ambang batas saldo yang dikenakan pajak dan persentase pajak
  const AMBANG_BATAS_PAJAK = 7500000; // Rp7.500.000
  const PERSEN_PAJAK = 0.2; // 20%

  // Fungsi pembantu untuk memformat angka menjadi format mata uang Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Tidak menampilkan angka di belakang koma
      maximumFractionDigits: 0, // Tidak menampilkan angka di belakang koma
    }).format(angka);
  };

  // Fungsi utama untuk menghitung simulasi tabungan
  const hitungTotalTabungan = () => {
    // Validasi sederhana untuk memastikan input setoran dan jangka waktu valid
    if (setoranBulanan <= 0 || jangkaWaktuBulan <= 0) {
      setMessage("Setoran bulanan dan jangka waktu harus lebih dari 0.");
      setRingkasanHasil(null); // Bersihkan hasil sebelumnya
      setDataTabelSimulasi([]); // Bersihkan tabel sebelumnya
      return;
    }

    // Bersihkan pesan jika validasi berhasil
    setMessage("");

    // Konversi bunga tahunan menjadi bunga bulanan dalam bentuk desimal
    const bungaBulananRate = bungaTahunanPersen / 100 / 12;

    // Variabel untuk melacak saldo dan akumulasi selama simulasi
    let totalSaldoAkhirBulanIni = 0; // Saldo awal dimulai dari Rp0
    let totalSetoranKumulatif = 0; // Total uang yang disetorkan pengguna
    let akumulasiBungaBersih = 0; // Total bunga yang didapat setelah pajak
    let akumulasiPajakBungaTotal = 0; // Total pajak yang dikenakan

    // Array untuk menyimpan setiap baris data tabel per bulan
    const dataBulananUntukTabel = [];

    // Loop simulasi untuk setiap bulan dalam jangka waktu yang ditentukan
    for (let i = 1; i <= jangkaWaktuBulan; i++) {
      const saldoAwalBulanIni = totalSaldoAkhirBulanIni; // Saldo di awal bulan (dari akhir bulan sebelumnya)
      const setoranBulanIni = setoranBulanan; // Setoran yang dilakukan di bulan ini

      // Tambahkan setoran bulan ini ke saldo untuk perhitungan bunga
      const saldoUntukPerhitunganBunga = saldoAwalBulanIni + setoranBulanIni;
      totalSetoranKumulatif += setoranBulanIni; // Akumulasikan total setoran

      let bungaDidapatBulanIni = saldoUntukPerhitunganBunga * bungaBulananRate;
      let pajakBungaBulanIni = 0;

      // Cek apakah saldo melebihi ambang batas pajak
      if (saldoUntukPerhitunganBunga > AMBANG_BATAS_PAJAK) {
        pajakBungaBulanIni = bungaDidapatBulanIni * PERSEN_PAJAK; // Hitung pajak
        bungaDidapatBulanIni -= pajakBungaBulanIni; // Kurangi bunga dengan pajak (bunga bersih)
      }

      akumulasiBungaBersih += bungaDidapatBulanIni; // Akumulasikan bunga bersih
      akumulasiPajakBungaTotal += pajakBungaBulanIni; // Akumulasikan total pajak

      // Hitung saldo akhir bulan ini
      totalSaldoAkhirBulanIni =
        saldoUntukPerhitunganBunga + bungaDidapatBulanIni;

      // Simpan data detail untuk bulan ini ke dalam array tabel
      dataBulananUntukTabel.push({
        bulanKe: i,
        setoran: setoranBulanIni,
        saldoAwal: saldoAwalBulanIni,
        bunga: bungaDidapatBulanIni,
        pajakBunga: pajakBungaBulanIni,
        saldoAkhir: totalSaldoAkhirBulanIni,
      });
    }

    // Set state untuk ringkasan hasil akhir simulasi
    setRingkasanHasil({
      setoran: setoranBulanan,
      jangkaWaktu: jangkaWaktuBulan,
      totalSetoran: totalSetoranKumulatif,
      akumulasiBunga: akumulasiBungaBersih, // Ini adalah bunga bersih setelah pajak
      akumulasiBungaSebelumPajak:
        akumulasiBungaBersih + akumulasiPajakBungaTotal, // Bunga kotor
      akumulasiPajak: akumulasiPajakBungaTotal, // Total pajak yang dipotong
      saldoAkhir: totalSaldoAkhirBulanIni,
    });

    // Set state untuk data tabel simulasi
    setDataTabelSimulasi(dataBulananUntukTabel);
  };

  // Fungsi untuk mengunduh hasil simulasi sebagai PDF menggunakan html2pdf.js
  const handleDownloadPdf = () => {
    // Pastikan simulasi sudah dijalankan dan ada konten untuk di-render
    if (
      !ringkasanHasil ||
      dataTabelSimulasi.length === 0 ||
      !contentRef.current
    ) {
      setMessage("Harap simulasikan terlebih dahulu sebelum mengunduh PDF.");
      return;
    }
    setMessage("Membuat PDF, mohon tunggu..."); // Beri tahu pengguna bahwa proses sedang berjalan

    // Opsi konfigurasi untuk html2pdf
    const options = {
      margin: 10, // Margin halaman dalam mm
      filename: `laporan-simulasi-tabungan-${namaPengguna || "pengguna"}.pdf`,
      image: { type: "jpeg", quality: 0.98 }, // Kualitas gambar
      html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true }, // Opsi html2canvas
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // Opsi jsPDF
    };

    // Panggil html2pdf dengan elemen target dan opsi
    html2pdf().set(options).from(contentRef.current).save();

    setMessage("PDF berhasil diunduh!");
  };

  return (
    // Container utama dengan styling Tailwind untuk layout dan tampilan
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl my-8 font-inter">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Simulasi Tabungan Berjangka
      </h2>

      {/* Bagian Form Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        {/* Input Nama Pengguna */}
        <div className="mb-4">
          <label
            htmlFor="namaPengguna"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama Anda:
          </label>
          <input
            type="text"
            id="namaPengguna"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={namaPengguna}
            onChange={(e) => setNamaPengguna(e.target.value)}
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* Input Setoran Rutin Bulanan */}
        <div className="mb-4">
          <label
            htmlFor="setoranBulanan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Setoran Rutin Bulanan (Rp):
          </label>
          <input
            type="number"
            id="setoranBulanan"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={setoranBulanan}
            onChange={(e) => setSetoranBulanan(parseFloat(e.target.value))}
            min="0" // Set nilai minimum 0
          />
        </div>

        {/* Input Jangka Waktu Menabung */}
        <div className="mb-4">
          <label
            htmlFor="jangkaWaktuBulan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Jangka Waktu Menabung (Bulan):
          </label>
          <input
            type="number"
            id="jangkaWaktuBulan"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={jangkaWaktuBulan}
            onChange={(e) => setJangkaWaktuBulan(parseInt(e.target.value))}
            min="1" // Set nilai minimum 1 bulan
          />
        </div>

        {/* Input Suku Bunga Tahunan */}
        <div className="mb-4">
          <label
            htmlFor="bungaTahunanPersen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Suku Bunga Tahunan (%):
          </label>
          <input
            type="number"
            step="0.01" // Memungkinkan input desimal (misal: 3.5)
            id="bungaTahunanPersen"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={bungaTahunanPersen}
            onChange={(e) => setBungaTahunanPersen(parseFloat(e.target.value))}
            min="0" // Set nilai minimum 0
          />
        </div>
      </div>

      {/* Tombol Simulasikan */}
      <button
        onClick={hitungTotalTabungan}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Simulasikan Sekarang!
      </button>

      {/* Pesan error atau informasi */}
      {message && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
          {message}
        </div>
      )}

      {/* --- Bagian Konten yang akan di-render ke PDF (Ringkasan & Tabel) --- */}
      {/* Tambahkan ref={contentRef} di sini untuk menandai konten yang akan diubah ke PDF */}
      {(ringkasanHasil || dataTabelSimulasi.length > 0) && (
        <div ref={contentRef} className="p-4">
          {" "}
          {/* Tambahkan padding untuk hasil PDF yang lebih baik */}
          {ringkasanHasil && (
            <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg shadow-lg">
              <h3 className="text-2xl font-extrabold text-green-800 mb-4 text-center">
                Hasil Simulasi Tabungan{" "}
                {namaPengguna && `untuk ${namaPengguna}`}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
                {/* Detail Setoran Bulanan */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">Setoran Bulanan:</p>
                  <p className="text-green-800 font-bold text-xl">
                    {formatRupiah(ringkasanHasil.setoran)}
                  </p>
                </div>
                {/* Detail Jangka Waktu */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">Jangka Waktu:</p>
                  <p className="text-green-800 font-bold text-xl">
                    {ringkasanHasil.jangkaWaktu} Bulan
                  </p>
                </div>
                {/* Detail Total Setoran */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">
                    Total Setoran Anda:
                  </p>
                  <p className="text-green-800 font-bold text-xl">
                    {formatRupiah(ringkasanHasil.totalSetoran)}
                  </p>
                </div>
                {/* Detail Akumulasi Bunga (Sebelum Pajak) */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">
                    Akumulasi Bunga (Sebelum Pajak):
                  </p>
                  <p className="text-green-800 font-bold text-xl">
                    {formatRupiah(ringkasanHasil.akumulasiBungaSebelumPajak)}
                  </p>
                </div>
                {/* Detail Total Pajak Bunga */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">
                    Total Pajak Bunga:
                  </p>
                  <p className="text-red-700 font-bold text-xl">
                    {formatRupiah(ringkasanHasil.akumulasiPajak)}
                  </p>
                </div>
                {/* Detail Akumulasi Bunga (Setelah Pajak) */}
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">
                    Akumulasi Bunga (Setelah Pajak):
                  </p>
                  <p className="text-green-800 font-bold text-xl">
                    {formatRupiah(ringkasanHasil.akumulasiBunga)}
                  </p>
                </div>
                {/* Saldo Akhir Tabungan (Paling Menonjol) */}
                <div className="lg:col-span-3 text-center mt-6 p-6 bg-green-200 rounded-lg shadow-inner">
                  <p className="text-2xl font-bold text-green-900">
                    Saldo Akhir Tabungan Anda:
                  </p>
                  <p className="text-5xl font-extrabold text-green-900 mt-2">
                    {formatRupiah(ringkasanHasil.saldoAkhir)}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* --- Bagian Tabel Detail Simulasi --- */}
          {dataTabelSimulasi.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Detail Pertumbuhan Tabungan per Bulan:
              </h3>
              <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Bulan Ke-
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Setoran
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Saldo Awal
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Bunga Didapat
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Pajak Bunga (20%)
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Saldo Akhir
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataTabelSimulasi.map((data, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 text-center">
                          {data.bulanKe}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
                          {formatRupiah(data.setoran)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
                          {formatRupiah(data.saldoAwal)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
                          {formatRupiah(data.bunga)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600 font-medium text-right">
                          {formatRupiah(data.pajakBunga)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-blue-600 text-right">
                          {formatRupiah(data.saldoAkhir)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pesan peringatan jika tabel terlalu panjang */}
              {jangkaWaktuBulan > 60 && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Tabel ini mungkin cukup panjang. Anda bisa menggulir (scroll)
                  ke samping atau ke bawah untuk melihat semua detail.
                </p>
              )}
            </div>
          )}
        </div>
      )}
      {/* Tombol Download PDF - Dipindahkan ke luar contentRef agar tidak ikut di-render ke gambar */}
      {ringkasanHasil && ( // Hanya tampilkan jika ada hasil simulasi
        <button
          onClick={handleDownloadPdf}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
        >
          Unduh Laporan PDF
        </button>
      )}
    </div>
  );
};

export default SavingsSimulator;
