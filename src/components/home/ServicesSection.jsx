import LayoutBackgroundCompany from "../../layouts/LayoutBackgroundCompany";
import ImageCardOne from "../../assets/images/products-1.jpg";
import ImageCardTwo from "../../assets/images/products-2.jpg";
import ImageCardThree from "../../assets/images/products-3.jpg";
import ImageCardFourth from "../../assets/images/products-4.jpg";
import products from "../../data/products";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import { motion } from "framer-motion";

const ServicesSection = () => {
  // const services = [
  //   {
  //     id: 1,
  //     image: ImageCardOne,
  //     title: "Tabungan Harian",
  //     tags: ["#photography", "#travel", "#winter"],
  //   },
  //   {
  //     id: 2,
  //     image: ImageCardTwo,
  //     title: "Tabungan Berjangka",
  //     tags: ["#nature", "#hiking", "#explore"],
  //   },
  //   {
  //     id: 3,
  //     image: ImageCardThree,
  //     title: "Deposito",
  //     tags: ["#cityscape", "#night", "#urban"],
  //   },
  //   {
  //     id: 4,
  //     image: ImageCardFourth,
  //     title: "Kredit Pinjaman",
  //     tags: ["#beach", "#ocean", "#relax"],
  //   },
  // ];

  return (
    <LayoutBackgroundCompany>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-company-50 font-inter-black text-center">
          Pilihan tepat untuk pertumbuhan keuangan Anda
        </h1>
        <p className="text-company-50 text-center mt-2">
          Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
          dan Berkembang.
        </p>
      </motion.div>

      {/* Grid Layout untuk Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <Link to={`/product/${product.slug}`} key={product.slug}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: product.id * 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-company-50 pb-8"
            >
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt="Product Images"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-company-950">
                  {product.title}
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
      </div>
    </LayoutBackgroundCompany>
  );
};

export default ServicesSection;
