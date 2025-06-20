import { useParams } from "react-router-dom";
import products from "../../data/products";

import LayouDefaultContent from "../../layouts/LayoutDefaultContent";
import Breadcrumbs from "../Breadcrumbs";
import { useEffect } from "react";

// eslint-disable-next-line
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!product) {
    return <div className="p-8 text-red-500">Produk tidak ditemukan.</div>;
  }

  const cards = [
    {
      id: 1,
      title: "Keunggulan Produk",
      items: [
        "Setoran Bulanan Tetap – Nasabah menyetor sejumlah dana yang telah disepakati setiap bulan.",
        "Suku Bunga Kompetitif – Suku bunga lebih tinggi dibandingkan tabungan reguler.",
        "Jangka Waktu Fleksibel – 6 bulan dan 12 bulan.",
        "Mudah untuk menabung – Praktis tanpa harus setor manual setiap bulan.",
        "Bonus Reward – Hadiah menarik bagi nasabah yang disiplin menabung sesuai tenor yang dipilih.",
        "Bebas Biaya Administrasi – Tidak ada biaya bulanan.",
      ],
    },
    {
      id: 2,
      title: "Syarat dan Ketentuan",
      items: [
        "Minimal setoran awal: Rp100.000",
        "Minimal setoran bulanan: Rp100.000",
        "Tenor (jangka waktu): 6 bulan hingga 12 bulan",
        "Tidak dapat dicairkan sebelum jatuh tempo (kecuali kondisi tertentu dengan bukti valid)",
        "Wajib memiliki rekening di bank",
      ],
    },
    {
      id: 3,
      title: "Cara Membuka Tabungan",
      items: [
        "Datang ke Kantor Pusat Restu Dewata atau Kantor Cabang Restu Dewata",
        "Mengisi Formulir Pendaftaran",
        "Tentukan jumlah setoran bulanan & tenor tabungan",
        "Dapatkan buku tabungan & notifikasi digital",
      ],
    },
  ];

  return (
    <LayouDefaultContent>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Product", href: "/products" },
          { label: product.title }, // item terakhir biasanya tidak punya link
        ]}
      />
      <div className="py-20" key={slug}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="font-inter-black text-4xl"
        >
          {product.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-500"
        >
          {product.subtitle}
        </motion.p>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          src={product.image}
          className="w-full h-auto max-h-[500px] mt-6 rounded-lg shadow-lg object-cover"
        />

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.0 }}
          className="mt-8"
        >
          {product.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {cards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: card.id * 0.3 }}
              key={index}
              className="bg-gradient-to-b from-white to-company-400 shadow-lg rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-company-950 mb-4 mt-4">
                {card.title}
              </h2>
              <ul className="list-decimal list-inside text-company-900 space-y-1 text-sm sm:text-base">
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </LayouDefaultContent>
  );
};

export default ProductDetail;
