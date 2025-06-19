// eslint-disable-next-line
import { motion } from "framer-motion";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="overflow-x-hidden">
      <motion.ol
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center space-x-1 lg:pt-24"
      >
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-4 text-gray-400">{">"}</span> // atau '›'
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-company-950 text-company-600"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </motion.ol>
    </nav>
  );
};

export default Breadcrumbs;
