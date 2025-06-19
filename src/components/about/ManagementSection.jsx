import LayoutDefaultContent from "../../layouts/LayoutDefaultContent";
import ImageCardOne from "../../assets/images/management-1.jpg";
import ImageCardTwo from "../../assets/images/management-2.jpg";
import ImageCardThree from "../../assets/images/management-3.jpg";
import ImageCardFourth from "../../assets/images/management-4.jpg";

// eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";

const ManagementSection = () => {
  const leaders = [
    {
      id: 1,
      name: "Dimas Nugraha",
      job: "Direktur Utama",
      image: ImageCardOne, // ganti dengan path gambar masing-masing
      description:
        "Visioner dan selalu mengedepankan inovasi dan efisiensi dalam pengelolaan keuangan.",
      motivation:
        "Inovasi tanpa aksi hanyalah mimpi. Mari wujudkan dengan langkah nyata.",
    },
    {
      id: 2,
      name: "Ben Steve",
      job: "Direktur Kepatuhan",
      image: ImageCardTwo,
      description:
        "Strategis yang ahli dalam mengelola risiko dan membaca peluang bisnis.",
      motivation: "Keputusan besar dimulai dari keberanian untuk melangkah.",
    },
    {
      id: 3,
      name: "Jessie Caroline",
      job: "Komisaris Utama",
      image: ImageCardThree,
      description: "Kuat dalam analisis keuangan dan pengembangan produk.",
      motivation: "Keteguhan dan ketekunan adalah kunci dari hasil luar biasa.",
    },
    {
      id: 4,
      name: "David Benjamin",
      job: "Komisaris",
      image: ImageCardFourth,
      description:
        "Kekuatan terbesar suatu lembaga adalah tim yang solid dan berdaya saing tinggi",
      motivation:
        "Bersama, kita bukan hanya bekerja. Kita tumbuh dan belajar menjadi lebih hebat.",
    },
  ];

  const [flipped, setFlipped] = useState(Array(leaders.length).fill(false));

  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <LayoutDefaultContent>
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl text-company-950 font-inter-black text-center">
            Kelola keuanganmu sekarang di BPR Dim Nugraha
          </h1>
          <p className="text-company-950 text-center mt-2">
            Tumbuh Bersama BPR Dim Nugraha, Wujudkan Keuangan yang Lebih Stabil
            dan Berkembang.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
          {leaders.map((leader, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: leader.id * 0.3 }}
              key={leader.id}
              className="w-full h-[400px] [perspective:1000px]"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped[index] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-8 text-white">
                    <p className="font-inter text-[22px]">{leader.name}</p>
                    <div
                      className="absolute bottom-4 right-4 py-4 text-white text-lg cursor-pointer"
                      onClick={() => handleFlip(index)}
                    >
                      <span className="bg-white/30 hover:bg-white/50 p-3 rounded-full">
                        ➜
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-company-950 backface-hidden [transform:rotateY(180deg)] rounded-xl shadow-xl flex flex-col px-8 py-8 justify-between">
                  <div>
                    <h3 className="text-[22px] text-company-50">
                      {leader.name}
                    </h3>
                    <p className="italic text-company-50 text-sm mb-4">
                      {leader.job}
                    </p>
                    <p className="text-company-50 mb-2">{leader.description}</p>
                    <div className="relative pl-4 border-l-2 border-company-100 mt-8">
                      <p className="italic text-company-100 text-sm leading-relaxed">
                        {leader.motivation}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => handleFlip(index)}
                      className="w-full py-2 bg-company-50 hover:bg-company-100 text-company-950 rounded-md transition duration-300"
                    >
                      <span className="mr-2">←</span> Kembali
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </LayoutDefaultContent>
  );
};

export default ManagementSection;
