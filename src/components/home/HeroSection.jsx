import { useEffect, useState } from "react";
import HeroSectionFirst from "../../assets/images/hero-section-1.jpg";
import HeroSectionSecond from "../../assets/images/hero-section-2.jpg";
import HeroSectionThird from "../../assets/images/hero-section-3.jpg";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: HeroSectionFirst,
    },
    {
      id: 2,
      image: HeroSectionSecond,
    },
    {
      id: 3,
      image: HeroSectionThird,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function untuk beralih ke slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function untuk beralih ke slide sebelumnya
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Menggunakan useEffect untuk autoplay
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); // Ganti slide setiap 4 detik
    return () => clearInterval(slideInterval); // Bersihkan interval saat komponen di-unmount
  });

  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden hidden lg:block">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}

        {/* Tombol navigasi */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-black px-4 py-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-black px-4 py-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
      <div className="lg:hidden px-10 py-32">
        <h2 className="font-bold text-3xl text-center text-company-950">
          Solusi Keuangan Anda. Lebih Mudah, Cepat dan Terpercaya.
        </h2>
        <p className="mt-4 text-center text-company-950">
          Kelola keuangan Anda dengan lebih mudah dan aman. Kami hadir untuk
          memberikan solusi keuangan yang cepat, transparan, dan terpercaya,
          membantu Anda mencapai tujuan finansial dengan lebih baik.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
