import LayoutCompany from "./_components/LayoutCompany";
import ImageCardOne from "../../assets/images/why-1.jpg";
import ImageCardTwo from "../../assets/images/why-2.jpg";
import ImageCardThree from "../../assets/images/why-3.jpg";
import ImageCardFourth from "../../assets/images/why-4.jpg";

// eslint-disable-next-line
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhyChooseUsSection = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true }); // hanya jalan sekali

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // jarak antar animasi tiap card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // dari kiri
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cards = [
    {
      id: 1,
      image: ImageCardOne, // Ganti dengan URL gambar asli
      title: "Aman dan Terpercaya",
    },
    {
      id: 2,
      image: ImageCardTwo,
      title: "Mudah dan Fleksibel",
    },
    {
      id: 3,
      image: ImageCardThree,
      title: "Layanan Nasabah",
    },
    {
      id: 4,
      image: ImageCardFourth,
      title: "Keuangan Inovatif",
    },
  ];

  return (
    <LayoutCompany>
      <div>
        <motion.h1
          ref={titleRef}
          className="text-4xl text-company-950 font-inter-black text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Kelola keuanganmu sekarang di BPR Restu Dewata
        </motion.h1>
        <motion.p
          className="text-company-950 text-center mt-2"
          ref={titleRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
          dan Berkembang.
        </motion.p>
      </div>

      {/* Grid Layout untuk Card */}
      <motion.div
        ref={cardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {cards.map((card) => (
          <motion.div
            variants={cardVariants}
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300"
          >
            <div
              className="h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 hover:bg-gradient-b hover:from-company-950 hover:opacity-60 bg-gradient-to-t from-blue-600 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 w-full text-white text-center py-4 text-2xl">
              {card.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </LayoutCompany>
  );
};

export default WhyChooseUsSection;
