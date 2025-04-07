import Breadcrumbs from "../components/Breadcrumbs";
import HeroSectionProduct from "../components/product/HeroSectionProduct";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";

export default function Services() {
  return (
    <LayouDefaultContent>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Tabungan Berjangka" }, // item terakhir biasanya tidak punya link
        ]}
      />
      <HeroSectionProduct />
    </LayouDefaultContent>
  );
}
