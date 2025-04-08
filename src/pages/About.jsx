import AboutSection from "../components/about/AboutSection";
import ManagementSection from "../components/about/ManagementSection";
import VisiMisiSection from "../components/about/VisiMisiSection";
import Breadcrumbs from "../components/Breadcrumbs";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";

export default function About() {
  return (
    <>
      <LayouDefaultContent>
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Tentang Perusahaan" },
          ]}
        />
        <AboutSection />
      </LayouDefaultContent>
      <VisiMisiSection />
      <ManagementSection />
    </>
  );
}
