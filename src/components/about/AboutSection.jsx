// eslint-disable-next-line
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div className="py-20 overflow-x-hidden">
      <div className="mx-auto">
        <div className="gap-12 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="lg:w-full flex justify-center mx-auto">
            <motion.div
              className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
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

          <div className="lg:w-5/6 mt-10 lg:mt-0 text-center lg:text-left mx-auto">
            <motion.p
              className="text-gray-500 uppercase mb-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Established Since 2000
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-inter-black text-company-950 leading-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Melayani Anda <br />
              <span className="text-company-500">lebih dari 24 tahun.</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-2 leading-relaxed text-justify lg:text-justify"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Lembaga perbankan yang telah melayani masyarakat selama lebih dari
              24 tahun. Dengan pengalaman yang luas dan komitmen untuk
              memberikan layanan berkualitas, kami menyediakan berbagai solusi
              keuangan yang dirancang untuk memenuhi kebutuhan nasabah kami.
            </motion.p>
            <motion.button
              className="mt-6 bg-company-500 hover:bg-company-700 text-company-50 py-2 px-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Tentang Perusahaan
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
