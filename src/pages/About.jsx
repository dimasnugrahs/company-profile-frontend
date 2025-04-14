import AboutSection from "../components/about/AboutSection";
import ManagementSection from "../components/about/ManagementSection";
import PartnerSection from "../components/about/PartnerSection";
import ReportSection from "../components/about/ReportSection";
import VisiMisiSection from "../components/about/VisiMisiSection";
import Breadcrumbs from "../components/Breadcrumbs";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";
import ContactSection from "../components/home/ContactSection";
import LocationSection from "../components/about/LocationSection";

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
      <PartnerSection />
      <ReportSection />
      <ContactSection />
      <LocationSection />
    </>
  );
}
