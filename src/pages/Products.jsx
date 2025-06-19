import Breadcrumbs from "../components/Breadcrumbs";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";
import products from "../data/products";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Products() {
  return (
    <LayouDefaultContent>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "All Products" }, // item terakhir biasanya tidak punya link
        ]}
      />
      {/* Grid Layout untuk Card */}
      <div className="py-20">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <Link to={`/product/${product.slug}`} key={product.slug}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-company-50 pb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: product.id * 0.2 }}
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
                    {product.description.length > 200
                      ? product.description.slice(0, 200) + "..."
                      : product.description}
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
        </motion.div>
      </div>
    </LayouDefaultContent>
  );
}
