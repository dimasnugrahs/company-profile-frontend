import React from "react";
import ReportSection from "../components/report/ReportSection";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";
import Breadcrumbs from "../components/Breadcrumbs";

const Report = () => {
  return (
    <>
      <LayouDefaultContent>
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Laporan Perusahaan" },
          ]}
        />
        <ReportSection />
      </LayouDefaultContent>
    </>
  );
};

export default Report;
