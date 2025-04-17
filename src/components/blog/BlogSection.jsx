import React from "react";
import LayoutCompany from "../home/_components/LayoutCompany";
import { Link } from "react-router-dom";
import ImageCardOne from "../../assets/images/products-1.jpg";

// eslint-disable-next-line
import { motion } from "motion/react";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      image: ImageCardOne,
      title: "Hari Anak Sedunia",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: ImageCardOne,
      title: "Selamat Hari Natal",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: ImageCardOne,
      title: "Staff IT",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      image: ImageCardOne,
      title: "Tips Mudah Menabung",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      image: ImageCardOne,
      title: "Hari Anak Sedunia",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      image: ImageCardOne,
      title: "Selamat Hari Natal",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      image: ImageCardOne,
      title: "Staff IT",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 8,
      image: ImageCardOne,
      title: "Tips Mudah Menabung",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 9,
      image: ImageCardOne,
      title: "Hari Anak Sedunia",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 10,
      image: ImageCardOne,
      title: "Selamat Hari Natal",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 11,
      image: ImageCardOne,
      title: "Staff IT",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 12,
      image: ImageCardOne,
      title: "Tips Mudah Menabung",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <LayoutCompany>
      <div className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Dropdown & Title */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Artikel Terbaru
            </h1>
            <select className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none">
              <option>Cari berdasarkan kategori</option>
              <option>Berita</option>
              <option>Tips</option>
              <option>IT</option>
            </select>
          </div>

          {/* Artikel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link to="/blog/details" key={article.id}>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-company-50 pb-8"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: article.id * 0.2 }}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={article.image}
                    alt="Product Images"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-company-950">
                      {article.title}
                    </div>
                    <p className="text-company-950">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
              {article.tags.map((tag, index) => (
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
        </div>
      </div>
    </LayoutCompany>
  );
};

export default BlogSection;
