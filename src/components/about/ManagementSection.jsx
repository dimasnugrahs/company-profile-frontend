import LayoutCompany from "../home/_components/LayoutCompany";
import ImageCardOne from "../../assets/images/management-1.jpg";
import ImageCardTwo from "../../assets/images/management-2.jpg";
import ImageCardThree from "../../assets/images/management-3.jpg";
import ImageCardFourth from "../../assets/images/management-4.jpg";

// eslint-disable-next-line
import { motion } from "motion/react";

const ManagementSection = () => {
  const leaders = [
    {
      id: 1,
      name: "Dimas Nugraha",
      image: ImageCardOne, // ganti dengan path gambar masing-masing
    },
    {
      id: 2,
      name: "Ben Steve",
      image: ImageCardTwo,
    },
    {
      id: 3,
      name: "Jessie Caroline",
      image: ImageCardThree,
    },
    {
      id: 4,
      name: "David Benjamin",
      image: ImageCardFourth,
    },
  ];

  return (
    <LayoutCompany>
      <div className="overflow-x-hidden">
        <div>
          <motion.h1
            className="text-4xl text-company-950 font-inter-black text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Kelola keuanganmu sekarang di BPR Restu Dewata
          </motion.h1>
          <motion.p
            className="text-company-950 text-center mt-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
            dan Berkembang.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: leader.id * 0.2 }}
            >
              <img
                className="h-96 bg-cover bg-center"
                src={leader.image}
                alt="Product Images"
              />
              <div className="absolute inset-0 hover:bg-gradient-b bg-gradient-to-t hover:from-company-950 hover:opacity-60 from-blue-600 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-8 text-white">
                <p className="font-inter text-[22px] ">{leader.name}</p>
                <div className="absolute bottom-4 right-4 py-4 text-white text-lg">
                  <span className="bg-white/30 p-3 rounded-full">➜</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </LayoutCompany>
  );
};

export default ManagementSection;
