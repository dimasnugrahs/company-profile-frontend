import LayoutBackgroundCompany from "../home/_components/LayoutBackgroundCompany";
import Vendor1 from "../../assets/images/logo-bpr.png";
import Vendor2 from "../../assets/images/logo-lps.png";

// eslint-disable-next-line
import { motion } from "motion/react";

const PartnerSection = () => {
  const vendors = [
    { id: 1, logo: Vendor1, name: "Vendor A" },
    { id: 2, logo: Vendor2, name: "Vendor B" },
  ];

  return (
    <LayoutBackgroundCompany>
      <div className="flex flex-wrap justify-center items-center gap-24 overflow-x-hidden">
        {vendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={vendor.logo}
              alt={vendor.name}
              className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </LayoutBackgroundCompany>
  );
};

export default PartnerSection;
