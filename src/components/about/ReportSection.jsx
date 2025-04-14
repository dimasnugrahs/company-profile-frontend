import LayoutCompany from "../home/_components/LayoutCompany";
import imgReport from "../../assets/images/why-1.jpg";

// eslint-disable-next-line
import { motion } from "motion/react";

const ReportSection = () => {
  const reports = [
    { id: 1, title: "Laporan Keuangan", image: imgReport },
    { id: 2, title: "Laporan Tata Kelola", image: imgReport },
    { id: 3, title: "Struktur Organisasi", image: imgReport },
  ];
  return (
    <LayoutCompany>
      <motion.h2
        className="text-4xl text-company-950 font-inter-black text-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Laporan Perusahaan
      </motion.h2>
      <motion.p
        className="text-company-950 text-center mt-2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        BPR Restu Dewata adalah mitra finansial yang siap membantu Anda tumbuh
        dan berkembang.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={report.image}
              alt={report.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-company-500/60 to-transparent flex items-center justify-center">
              <h3 className="text-company-50 text-[22px]">{report.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </LayoutCompany>
  );
};

export default ReportSection;
