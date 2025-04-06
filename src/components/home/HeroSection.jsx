import { Link } from "react-router-dom";
import HeroSectionFirst from "../../assets/images/hero-section-1.png";
// eslint-disable-next-line
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 w-full min-h-screen lg:px-32 px-6 ">
      <motion.div
        className="lg:w-1/2 text-center lg:text-left space-y-6 lg:pt-0 pt-24"
        initial={{ opacity: 0, x: -100 }} // dari kanan (x positif)
        animate={{ opacity: 1, x: 0 }} // ke posisi normal
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl lg:text-5xl font-inter-black text-company-950 leading-11 lg:mb-4 mb-2">
          Solusi Keuangan Anda Lebih Mudah, Cepat dan Terpercaya
        </h1>
        <p className="text-company-950 lg:text-lg">
          Kelola keuangan Anda dengan lebih mudah dan aman. Kami hadir untuk
          memberikan solusi keuangan yang cepat, transparan, dan terpercaya,
          membantu Anda mencapai tujuan finansial dengan lebih baik.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 lg:text-lg">
          <Link to="/services">
            <button className="px-6 py-2 border-2 border-company-500 text-company-500 rounded-lg hover:bg-company-500 hover:text-company-50 hover:border-company-500">
              Jelajahi Layanan
            </button>
          </Link>
          <Link to="https://wa.me/6282146485018?text=Halo%20Bagus%20Komputer,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda.">
            <button className="px-6 py-2 text-company-50 border-2 border-company-500 bg-company-500 rounded-lg hover:bg-company-700 hover:text-brand-white hover:border-company-700">
              Hubungi Sekarang
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex justify-center mb-16 mt-0 lg:mt-0"
        initial={{ opacity: 0, x: 100 }} // dari kanan (x positif)
        animate={{ opacity: 1, x: 0 }} // ke posisi normal
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={HeroSectionFirst}
          alt="Illustration"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
