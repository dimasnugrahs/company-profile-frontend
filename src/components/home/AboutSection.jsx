import LayoutDefaultContent from "../../layouts/LayoutDefaultContent";

// eslint-disable-next-line
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <LayoutDefaultContent>
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl text-company-950 font-inter-black text-center">
            Kelola keuanganmu sekarang di BPR Restu Dewata
          </h1>
          <p className="text-company-950 text-center lg:mt-2 mt-4 mb-8">
            Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
            dan Berkembang.
          </p>
        </motion.div>
        <div className="gap-12 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="lg:w-full flex justify-center mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/TboWOSW7qCI?si=g9bwcKiLAQgkldfW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:w-5/6 mt-10 lg:mt-0 text-center lg:text-left mx-auto"
          >
            <p className="text-gray-500 uppercase mb-2">
              Established Since 2000
            </p>
            <h2 className="text-3xl md:text-4xl font-inter-black text-company-950 leading-10">
              Melayani Anda <br />
              <span className="text-company-500">lebih dari 24 tahun.</span>
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed text-justify lg:text-justify">
              Lembaga perbankan yang telah melayani masyarakat selama lebih dari
              24 tahun. Dengan pengalaman yang luas dan komitmen untuk
              memberikan layanan berkualitas, kami menyediakan berbagai solusi
              keuangan yang dirancang untuk memenuhi kebutuhan nasabah kami.
            </p>
            <button className="mt-6 bg-company-500 hover:bg-company-700 text-company-50 py-2 px-10 rounded-lg shadow-lg">
              Tentang Perusahaan
            </button>
          </motion.div>
        </div>
      </div>
    </LayoutDefaultContent>
  );
};

export default AboutSection;
