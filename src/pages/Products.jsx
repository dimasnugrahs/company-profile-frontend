import Breadcrumbs from "../components/Breadcrumbs";
import HeroSectionProduct from "../components/product/ProductDetail";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <LayouDefaultContent>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Tabungan Berjangka" }, // item terakhir biasanya tidak punya link
        ]}
      />
      {products.map((product) => (
        <Link
          to={`/product/${product.slug}`}
          key={product.slug}
          className="border p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
          <h2 className="text-xl font-semibold mt-2">{product.subtitle}</h2>
          <h2 className="text-xl font-semibold mt-2">{product.description}</h2>
          {/* <p className="text-gray-600">Rp{product.price.toLocaleString()}</p> */}
        </Link>
      ))}
    </LayouDefaultContent>
  );
}
