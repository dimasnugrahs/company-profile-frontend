import ProductImage from "../../assets/images/product-details.jpg";

// eslint-disable-next-line
import { motion } from "framer-motion";

const BlogDetailSection = () => {
  const blogs = [
    {
      id: 1,
      image: ProductImage,
      administrator: "Admin Dim",
      date: "20 Mar 2025",
      category: "Konten Perbankan",
      title: "Hari Anak Sedunia",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  return (
    <div className="py-20">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="font-inter-black text-4xl"
          >
            {blog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-500"
          >
            {blog.administrator} - {blog.date} - {blog.category}
          </motion.p>
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={blog.image}
            className="w-full h-auto max-h-[500px] mt-6 rounded-lg shadow-lg object-cover"
          />

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.0 }}
            className="mt-8"
          >
            {blog.description}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetailSection;
