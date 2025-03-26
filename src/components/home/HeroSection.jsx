import { useEffect, useRef, useState } from "react";
import HeroSectionFirst from "../../assets/images/hero-section-1.jpg";
import HeroSectionSecond from "../../assets/images/hero-section-2.jpg";
import HeroSectionThird from "../../assets/images/hero-section-3.jpg";
import HeroSectionMobile from "../../assets/images/hero-section-3.jpg";

const images = [HeroSectionFirst, HeroSectionSecond, HeroSectionThird];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Fungsi menangani event sentuhan awal (touchstart)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Fungsi menangani event sentuhan akhir (touchend)
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // Geser ke kiri (slide ke kanan)
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide(); // Geser ke kanan (slide ke kiri)
    }
  };

  // Fungsi menangani pergerakan jari (touchmove)
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Efek untuk mengganti slide otomatis
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="relative w-full h-auto md:h-screen overflow-hidden lg:mt-0 mt-16 hidden lg:block"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Wrapper untuk slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Hero ${i + 1}`}
              className="w-full h-auto md:h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigasi Manual */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1 h-1 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="lg:hidden px-6 py-32">
        <h2 className="font-bold text-3xl text-center text-company-950 ">
          Solusi Keuangan Anda. Lebih Mudah, Cepat dan Terpercaya.
        </h2>
        <p className="text-center mt-4">
          Kelola keuangan Anda dengan lebih mudah dan aman. Kami hadir untuk
          memberikan solusi keuangan yang cepat, transparan, dan terpercaya,
          membantu Anda mencapai tujuan finansial dengan lebih baik.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
