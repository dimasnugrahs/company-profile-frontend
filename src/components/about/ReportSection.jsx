import LayoutDefaultContent from "../../layouts/LayoutDefaultContent";
import imgReport from "../../assets/images/why-1.jpg";

// eslint-disable-next-line
import { motion } from "framer-motion";

const ReportSection = () => {
  const reports = [
    { id: 1, title: "Laporan Keuangan", image: imgReport },
    { id: 2, title: "Laporan Tata Kelola", image: imgReport },
    { id: 3, title: "Struktur Organisasi", image: imgReport },
  ];
  return (
    <LayoutDefaultContent>
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl text-company-950 font-inter-black text-center">
            Laporan Perusahaan
          </h2>
          <p className="text-company-950 text-center mt-2">
            BPR Dim Nugraha adalah mitra finansial yang siap membantu Anda
            tumbuh dan berkembang.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {reports.map((report) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: report.id * 0.3 }}
              key={report.id}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
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
      </div>
    </LayoutDefaultContent>
  );
};

export default ReportSection;
