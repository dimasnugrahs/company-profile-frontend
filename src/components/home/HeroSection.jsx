import { Link } from "react-router-dom";
import HeroSectionFirst from "../../assets/images/hero-section-1.png";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: HeroSectionFirst,
      title: "Solusi Keuangan Anda Lebih Mudah, Cepat dan Terpercaya",
      description:
        "Kelola keuangan Anda dengan lebih mudah dan aman. Kami hadir untuk memberikan solusi keuangan yang cepat, transparan, dan terpercaya, membantu Anda mencapai tujuan finansial dengan lebih baik.",
    },
  ];

  return (
    <div className="lg:px-32">
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-0 h-full items-center">
              <div className="max-w-xl lg:max-w-4xl text-center lg:text-left mt-20 lg:mt-0">
                <h2 className="text-3xl lg:text-5xl font-inter font-black mb-4 text-company-950">
                  {slide.title}
                </h2>
                <p className="text-company-950 mb-4">{slide.description}</p>
                <div className="flex justify-center lg:justify-start gap-3 transition-opacity duration-700 ease-out">
                  <Link to="/services">
                    <button className="px-6 py-2 border-2 border-company-500 text-company-950 rounded-lg hover:bg-company-500 hover:text-company-50 focus:outline-none">
                      Jelajahi Layanan
                    </button>
                  </Link>
                  <Link to="https://wa.me/6282146485018?text=Halo%20Bagus%20Komputer,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda.">
                    <button className="px-6 py-2 text-company-50 hover:text-company-50 border-2 border-company-500 bg-company-500 rounded-lg hover:border-company-700 hover:bg-company-700">
                      Hubungi Sekarang
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center mb-40 lg:mb-0">
                <div
                  className="w-[600px] lg:h-[600px] h-[400px] px-12"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
