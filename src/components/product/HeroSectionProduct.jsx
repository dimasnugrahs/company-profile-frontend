import ProductImage from "../../assets/images/product-details.jpg";

const HeroSectionProduct = () => {
  const products = [
    {
      id: 1,
      image: ProductImage,
      title: "Tabungan Harian",
      subtitle: "Wujudkan Impian, Menabung Pasti, Masa Depan Terjamin!",
      description:
        "Tabungan Berjangka BPR Restu Dewata adalah solusi cerdas bagi Anda yang ingin menabung secara disiplin dengan setoran tetap setiap bulan. Dengan bunga kompetitif dan jangka waktu fleksibel, tabungan ini membantu Anda mencapai berbagai tujuan finansial, seperti dana pendidikan, liburan impian, atau investasi masa depan. Nikmati kemudahan menabung, tanpa perlu khawatir lupa menyetor. Selain itu, bebas biaya administrasi dan berkesempatan mendapatkan bonus reward bagi nasabah yang konsisten menabung hingga akhir tenor!",
    },
  ];

  const cards = [
    {
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
    <div className="overflow-x-hidden py-20">
      {products.map((product) => (
        <div key={product.id}>
          <h1 className="font-inter-black text-4xl">{product.title}</h1>
          <p className="text-gray-500">{product.subtitle}</p>
          <img
            src={product.image}
            className="w-full h-auto max-h-[400px] mt-6 rounded-lg shadow-lg object-cover"
          />

          <p className="mt-8">{product.description}</p>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {cards.map((card, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionProduct;
