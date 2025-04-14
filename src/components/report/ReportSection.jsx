import React from "react";
import LayoutCompany from "../home/_components/LayoutCompany";

const ReportSection = () => {
  return (
    <LayoutCompany>
      <div className="max-w-4xl">
        {/* Dropdown Tahun */}
        <div className="mb-6">
          <select className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none">
            <option>Laporan Publikasi Tahun 2025</option>
            <option>Laporan Publikasi Tahun 2024</option>
            <option>Laporan Publikasi Tahun 2023</option>
          </select>
        </div>

        {/* Box daftar laporan */}
        <div className="bg-white/50 rounded-xl p-6 shadow-md backdrop-blur-sm">
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
              <span className="text-sm md:text-base">{judul}</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Lihat PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </LayoutCompany>
  );
};

export default ReportSection;
