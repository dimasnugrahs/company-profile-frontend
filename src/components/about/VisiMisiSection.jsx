import LayoutBackgroundCompany from "../../layouts/LayoutBackgroundCompany";

// eslint-disable-next-line
import { motion } from "framer-motion";

const VisiMisiSection = () => {
  return (
    <LayoutBackgroundCompany>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-company-50 font-inter-black text-center">
          VISI & MISI
        </h1>
        <p className="text-company-50 text-center mt-2">
          Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
          dan Berkembang.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mt-10 bg-company-50 text-gray-800 rounded-lg px-6 py-10 md:px-16 md:py-14 max-w-6xl mx-auto"
      >
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Visi</h3>
          <p className="leading-relaxed">
            Menjadi lembaga keuangan terpercaya yang berperan aktif dalam
            mendorong pertumbuhan ekonomi masyarakat melalui pelayanan prima,
            inovasi berkelanjutan, dan komitmen terhadap kesejahteraan nasabah.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Misi</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Menyediakan produk dan layanan perbankan yang aman, mudah, dan
              inovatif.
            </li>
            <li>
              Meningkatkan inklusi keuangan bagi masyarakat luas, terutama
              sektor UMKM.
            </li>
            <li>
              Menjalankan tata kelola perusahaan yang transparan, profesional,
              dan beretika.
            </li>
            <li>
              Menumbuhkan SDM yang kompeten dan berorientasi pada pelayanan
              terbaik.
            </li>
          </ul>
        </div>
      </motion.div>
    </LayoutBackgroundCompany>
  );
};

export default VisiMisiSection;
