// eslint-disable-next-line
import { motion } from "motion/react";
import LayoutCompany from "../home/_components/LayoutCompany";

const LocationSection = () => {
  return (
    <LayoutCompany>
      <div className="overflow-x-hidden">
        <motion.h2
          className="text-4xl text-company-950 font-inter-black text-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Lokasi Kantor Pusat BPR Dim Nugraha
        </motion.h2>
        <motion.div
          className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-blue-300 mt-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Lokasi BPR Restu Dewata"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1513832889173!2d115.25319477456688!3d-8.58143978709118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fc44bead20f%3A0x7f46cc8f88f1fec4!2sPT.%20BPR%20Restu%20Dewata%20Kantor%20Cabang%20Gianyar!5e0!3m2!1sen!2sid!4v1744636509475!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </LayoutCompany>
  );
};

export default LocationSection;
