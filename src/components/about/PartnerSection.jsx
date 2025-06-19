import LayoutBackgroundCompany from "../../layouts/LayoutBackgroundCompany";
import Vendor1 from "../../assets/images/logo-bpr.png";
import Vendor2 from "../../assets/images/logo-lps.png";

// eslint-disable-next-line
import { motion } from "framer-motion";

const PartnerSection = () => {
  const vendors = [
    { id: 1, logo: Vendor1, name: "Vendor A" },
    { id: 2, logo: Vendor2, name: "Vendor B" },
  ];

  return (
    <LayoutBackgroundCompany>
      <div className="flex flex-wrap justify-center items-center gap-24 overflow-x-hidden">
        {vendors.map((vendor) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            key={vendor.id}
            className="flex justify-center items-center"
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
