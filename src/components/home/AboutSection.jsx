import LayoutCompany from "./_components/LayoutCompany";

const AboutSection = () => {
  return (
    <LayoutCompany>
      <div className="mx-auto">
        <div className="gap-12 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="lg:w-full flex justify-center mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/TboWOSW7qCI?si=g9bwcKiLAQgkldfW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="lg:w-5/6 mt-10 lg:mt-0 text-center lg:text-left mx-auto">
            <p className="text-sm text-gray-600 uppercase font-semibold mb-2">
              Established Since 2000
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-company-950 mt-2 leading-tight">
              Melayani Anda <br />
              <span className="text-company-500">lebih dari 24 tahun.</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-justify lg:text-left">
              Lembaga perbankan yang telah melayani masyarakat selama lebih dari
              24 tahun. Dengan pengalaman yang luas dan komitmen untuk
              memberikan layanan berkualitas, kami menyediakan berbagai solusi
              keuangan yang dirancang untuk memenuhi kebutuhan nasabah kami.
            </p>
            <button className="mt-6 bg-company-500 hover:bg-company-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-300 shadow-lg">
              Tentang Perusahaan
            </button>
          </div>
        </div>
      </div>
    </LayoutCompany>
  );
};

export default AboutSection;
