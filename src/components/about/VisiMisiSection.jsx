import LayoutBackgroundCompany from "../home/_components/LayoutBackgroundCompany";
import ImageCardOne from "../../assets/images/products-1.jpg";
import ImageCardTwo from "../../assets/images/products-2.jpg";
import ImageCardThree from "../../assets/images/products-3.jpg";
import ImageCardFourth from "../../assets/images/products-4.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import { motion } from "motion/react";

const VisiMisiSection = () => {
  return (
    <LayoutBackgroundCompany>
      <div className="overflow-x-hidden">
        <div>
          <motion.h1
            className="text-4xl text-company-50 font-inter-black text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            VISI & MISI
          </motion.h1>
          <motion.p
            className="text-company-50 text-center mt-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
            dan Berkembang.
          </motion.p>
        </div>
        <div className="flex justify-center items-center w-[1200px] h-[500px] bg-company-50">
          Hello, this is visi and misi section
        </div>

        {/* Grid Layout untuk Card */}
      </div>
    </LayoutBackgroundCompany>
  );
};

export default VisiMisiSection;
