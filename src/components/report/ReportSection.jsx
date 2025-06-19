import React from "react";
import LayoutDefaultContent from "../../layouts/LayoutDefaultContent";
import PdfFile from "../../assets/files/sample.pdf";

// eslint-disable-next-line
import { motion } from "framer-motion";

const ReportSection = () => {
  const handleOpenPdf = () => {
    window.open(PdfFile, "_blank");
  };
  return (
    <div className="max-w-4xl py-20">
      {/* Dropdown Tahun */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-6"
      >
        <select className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none">
          <option>Laporan Publikasi Tahun 2025</option>
          <option>Laporan Publikasi Tahun 2024</option>
          <option>Laporan Publikasi Tahun 2023</option>
        </select>
      </motion.div>

      {/* Box daftar laporan */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white/50 rounded-xl p-6 shadow-md backdrop-blur-sm"
      >
        {[
          "Laporan Posisi Keuangan",
          "Laporan Laba Rugi",
          "Laporan Kualitas Aset Produktif",
          "Laporan Komitmen Kontijensi",
          "Laporan Informasi Lainnya",
        ].map((judul, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-3 border-b last:border-b-0"
          >
            <span className="text-sm md:text-base w-1/2">{judul}</span>
            <button
              onClick={handleOpenPdf}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Lihat PDF
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReportSection;
