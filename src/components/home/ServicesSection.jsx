import LayoutBackgroundCompany from "./_components/LayoutBackgroundCompany";
import ImageCardOne from "../../assets/images/products-1.jpg";
import ImageCardTwo from "../../assets/images/products-2.jpg";
import ImageCardThree from "../../assets/images/products-3.jpg";
import ImageCardFourth from "../../assets/images/products-4.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ServicesSection = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true }); // hanya jalan sekali

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const services = [
    {
      id: 1,
      image: ImageCardOne,
      title: "Tabungan Harian",
      tags: ["#photography", "#travel", "#winter"],
    },
    {
      id: 2,
      image: ImageCardTwo,
      title: "Tabungan Berjangka",
      tags: ["#nature", "#hiking", "#explore"],
    },
    {
      id: 3,
      image: ImageCardThree,
      title: "Deposito",
      tags: ["#cityscape", "#night", "#urban"],
    },
    {
      id: 4,
      image: ImageCardFourth,
      title: "Kredit Pinjaman",
      tags: ["#beach", "#ocean", "#relax"],
    },
  ];

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

  return (
    <LayoutBackgroundCompany>
      <div>
        <motion.h1
          ref={titleRef}
          className="text-4xl text-company-50 font-inter-black text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Pilihan tepat untuk pertumbuhan keuangan Anda
        </motion.h1>
        <motion.p
          className="text-company-50 text-center mt-2"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {services.map((service) => (
          <Link to="/services" key={service.id}>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-company-50 pb-8"
              variants={cardVariants}
            >
              <img
                className="w-full h-48 object-cover"
                src={service.image}
                alt="Product Images"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-company-950">
                  {service.title}
                </div>
                <p className="text-company-950">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              {/* <div className="px-6 pt-4 pb-2">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div> */}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </LayoutBackgroundCompany>
  );
};

export default ServicesSection;
