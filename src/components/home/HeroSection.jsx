import { Link } from "react-router-dom";
import HeroSectionFirst from "../../assets/images/hero-section-1.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 w-full min-h-screen lg:px-32 px-6 ">
      <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:pt-0 pt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-black text-company-950">
          Solusi Keuangan Anda Lebih Mudah, Cepat dan Terpercaya
        </h1>
        <p className="text-company-950 text-lg">
          Kelola keuangan Anda dengan lebih mudah dan aman. Kami hadir untuk
          memberikan solusi keuangan yang cepat, transparan, dan terpercaya,
          membantu Anda mencapai tujuan finansial dengan lebih baik.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 text-lg">
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
      </div>
      <div className="lg:w-1/2 flex justify-center mb-16 mt-0 lg:mt-0">
        <img
          src={HeroSectionFirst}
          alt="Illustration"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
